import { auth } from '@/auth';
import { getPerson, listMessages } from '@/lib/persons';
import { notFound } from 'next/navigation';
import { Chat } from '@/components/Chat';
import { getDictionary } from '@/lib/i18n';
import { resolveLocale } from '@/lib/locale-server';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

export default async function ChatPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  const userId = session?.user?.email ?? '';
  const { id } = await params;

  const person = userId ? await getPerson(id, userId) : null;
  if (!person) notFound();

  const messages = await listMessages(id, userId);
  const t = getDictionary(await resolveLocale());

  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        <Link href="/app" className={styles.back}>
          <ArrowLeft size={16} strokeWidth={1.75} aria-hidden />
          <span>{t.app.chat.back}</span>
        </Link>
        <h1 className={styles.name}>{person.name}</h1>
        <p className={styles.disclaimer}>{t.app.disclaimer}</p>
      </div>

      <Chat personId={person.id} initialMessages={messages} />
    </div>
  );
}
