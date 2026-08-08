'use client';

import { useRouter } from 'next/navigation';
import { useDictionary } from './LocaleProvider';
import { SUPPORTED_LOCALES } from '@/lib/i18n';
import styles from './LocaleToggle.module.css';

const LABELS: Record<string, string> = { zh: '中文', en: 'EN' };

export function LocaleToggle() {
  const { locale, setLocale } = useDictionary();
  const router = useRouter();

  return (
    <div className={styles.toggle} role="group" aria-label="Language">
      {SUPPORTED_LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          className={l === locale ? styles.active : styles.option}
          aria-pressed={l === locale}
          onClick={() => {
            setLocale(l);
            router.refresh();
          }}
        >
          {LABELS[l] ?? l}
        </button>
      ))}
    </div>
  );
}
