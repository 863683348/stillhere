import type { CSSProperties } from 'react';
import styles from './Lamp.module.css';

export type LampVariant = 'ignite' | 'breathe' | 'flicker' | 'still';

type LampProps = {
  /** px number, or any CSS length (e.g. a clamp() expression for the hero). */
  size?: number | string;
  variant?: LampVariant;
  /** Supply only when the lamp carries meaning on its own; otherwise it is decorative. */
  label?: string;
  className?: string;
};

/**
 * The lamp. Rendered as flat SVG with no gradient <defs>, which keeps it free of
 * generated element ids — so it stays a plain server component and can appear
 * any number of times on a page without id collisions.
 *
 * Colour comes from `currentColor` (set to --accent by the stylesheet); the glow
 * is a CSS radial-gradient. No literal colour values live in this file.
 */
export function Lamp({ size = 40, variant = 'still', label, className }: LampProps) {
  const lampSize = typeof size === 'number' ? `${size}px` : size;

  const classNames = [styles.lamp, styles[variant], className].filter(Boolean).join(' ');

  return (
    <span
      className={classNames}
      style={{ '--lamp-size': lampSize } as CSSProperties}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <span className={styles.halo} />
      <svg
        className={styles.flame}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
      >
        {/* the halo ring — the "( )" around the light */}
        <circle
          className={styles.ring}
          cx="24"
          cy="24"
          r="20"
          stroke="currentColor"
          strokeOpacity="0.16"
          strokeWidth="1"
        />
        {/* the flame body, held back so the core can read as the hotter part */}
        <path
          d="M24 10c6 9 10 15 10 22a10 10 0 0 1-20 0c0-7 4-13 10-22z"
          fill="currentColor"
          fillOpacity="0.5"
        />
        {/* the hotter inner core, same hue at full strength */}
        <path
          d="M24 22c2.6 3.9 4.3 6.5 4.3 9.5a4.3 4.3 0 0 1-8.6 0c0-3 1.7-5.6 4.3-9.5z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
