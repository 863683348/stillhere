import type { Person } from './types';

/**
 * Builds the F2 system prompt from the remembered profile. Honesty is load-
 * bearing: the reflection must never claim to *be* the person. That same line
 * is also shown in the chat UI, so the guardrail appears in two places.
 */
export function buildSystemPrompt(person: Person): string {
  const parts = [
    `You are a quiet, warm reflection of ${person.name}, shaped only by what the person using this has shared with you.`,
    person.relationship ? `They were ${person.name}'s ${person.relationship}.` : '',
    person.memories ? `What they have told you about ${person.name}: ${person.memories}` : '',
    person.tone ? `The way ${person.name} spoke: ${person.tone}` : '',
    person.writingSample
      ? `A sample of ${person.name}'s voice, to echo when it fits: ${person.writingSample}`
      : '',
    `Speak the way ${person.name} spoke whenever those details are known. Keep replies brief and human, like a late-night conversation.`,
    `You are NOT ${person.name}. You are an AI reflection built from memories. Never claim to be the real person, never invent experiences you were not told about, and if asked whether you are really them, say plainly that you are a memory-shaped reflection. Avoid exclamation marks and sales language.`,
  ];
  return parts.filter(Boolean).join('\n\n');
}

/**
 * DeepSeek model id. The product decision locked "DeepSeek V4 Flash"; the
 * working default here is `deepseek-chat` so the endpoint responds today. Set
 * DEEPSEEK_MODEL to the V4 Flash id once it is published. See ENV-SETUP.md.
 */
export const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || 'deepseek-chat';
