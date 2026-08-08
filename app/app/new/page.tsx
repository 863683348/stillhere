import type { Metadata } from 'next';
import { PersonaForm } from '@/components/PersonaForm';
import { getDictionary } from '@/lib/i18n';
import { resolveLocale } from '@/lib/locale-server';

export const metadata: Metadata = {
  title: 'Begin',
  robots: { index: false, follow: false },
};

export default async function NewPersonPage() {
  const t = getDictionary(await resolveLocale());
  return (
    <div>
      <h1 className="h2">{t.app.new.heading}</h1>
      <p className={`body-secondary ${'measure'}`}>{t.app.new.intro}</p>
      <PersonaForm />
    </div>
  );
}
