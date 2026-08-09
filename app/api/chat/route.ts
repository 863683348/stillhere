import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { getPerson, addMessage } from '@/lib/persons';
import { buildSystemPrompt, DEEPSEEK_MODEL } from '@/lib/deepseek';
import { rateLimit } from '@/lib/rate-limit';

export const dynamic = 'force-dynamic';

const STREAM_HEADERS = {
  'Content-Type': 'text/plain; charset=utf-8',
  'Cache-Control': 'no-cache, no-transform',
  'X-Accel-Buffering': 'no',
};

const MAX_MESSAGE_LEN = 4000;
const MAX_TOKENS = 500;

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Per-user throttle: 20 chats/min keeps a logged-in client from hammering
  // the paid DeepSeek upstream through this route.
  const rl = rateLimit(`chat:${session.user.email}`, 20, 60_000);
  if (!rl.ok) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a moment and try again.' },
      { status: 429, headers: { 'Retry-After': String(rl.retryAfterSeconds) } },
    );
  }

  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  const personId = typeof body?.personId === 'string' ? body.personId : '';
  const message = typeof body?.message === 'string' ? body.message.trim() : '';
  if (!personId || !message) {
    return NextResponse.json({ error: 'personId and message are required' }, { status: 400 });
  }
  if (message.length > MAX_MESSAGE_LEN) {
    return NextResponse.json({ error: 'message is too long' }, { status: 400 });
  }

  const person = await getPerson(personId, session.user.email);
  if (!person) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  // Persist the user's turn immediately so history is never lost, even if the
  // model call fails mid-stream.
  await addMessage(personId, 'user', message);

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'DeepSeek API key is not configured' },
      { status: 500 },
    );
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      let full = '';
      try {
        const upstream = await fetch('https://api.deepseek.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: DEEPSEEK_MODEL,
            messages: [
              { role: 'system', content: buildSystemPrompt(person) },
              { role: 'user', content: message },
            ],
            stream: true,
            temperature: 0.8,
            max_tokens: MAX_TOKENS,
          }),
        });

        if (!upstream.ok || !upstream.body) {
          controller.enqueue(
            encoder.encode('[The light flickers — the model could not be reached. Please try again.]'),
          );
          controller.close();
          return;
        }

        const reader = upstream.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith('data:')) continue;
            const data = trimmed.slice(5).trim();
            if (data === '[DONE]') continue;
            try {
              const json = JSON.parse(data);
              const token = json?.choices?.[0]?.delta?.content;
              if (token) {
                controller.enqueue(encoder.encode(token));
                full += token;
              }
            } catch {
              // Keep-alive comments and partial frames are not valid JSON — skip.
            }
          }
        }

        await addMessage(personId, 'assistant', full);
      } catch {
        controller.enqueue(
          encoder.encode('[Something went quiet. Please try again in a moment.]'),
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, { headers: STREAM_HEADERS });
}
