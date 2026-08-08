import { auth } from '@/auth';
import { listPersons } from '@/lib/persons';
import Link from 'next/link';
import { Plus, UserRound } from 'lucide-react';
import { Lamp } from '@/components/Lamp';
import { getDictionary } from '@/lib/i18n';
import { resolveLocale } from '@/lib/locale-server';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

export default async function AppHome() {
  const session = await auth();
  const userId = session?.user?.email ?? '';
  const persons = userId ? await listPersons(userId) : [];
  const t = getDictionary(await resolveLocale());

  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        <div>
          <p className="eyebrow">{t.brand.name}</p>
          <h1 className="h2">{t.app.greeting}</h1>
        </div>
        <Link href="/app/new" className="btn btn-primary">
          <Plus size={18} strokeWidth={1.75} aria-hidden />
          <span>{t.app.newPerson}</span>
        </Link>
      </div>

      {persons.length === 0 ? (
        <div className={styles.empty}>
          <Lamp size={56} variant="breathe" className={styles.emptyLamp} />
          <h2 className="h3">{t.app.empty.title}</h2>
          <p className="body-secondary">{t.app.empty.body}</p>
          <Link href="/app/new" className="btn btn-primary">
            {t.app.empty.cta}
          </Link>
        </div>
      ) : (
        <ul className={styles.grid}>
          {persons.map((p) => (
            <li key={p.id}>
              <Link href={`/app/${p.id}`} className={styles.card}>
                <UserRound size={20} strokeWidth={1.5} className={styles.cardIcon} aria-hidden />
                <span className={styles.cardName}>{p.name}</span>
                {p.relationship ? (
                  <span className={styles.cardRel}>{p.relationship}</span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
