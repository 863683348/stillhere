'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import {
  Users,
  MessageCircle,
  UserPlus,
  Image,
  Rss,
  Sparkles,
  Clock,
  Coins,
  Bell,
  LogOut,
  Menu,
  X,
  Settings,
} from 'lucide-react';
import { useState } from 'react';
import { Lamp } from '@/components/Lamp';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LocaleToggle } from '@/components/LocaleToggle';
import type { Dictionary } from '@/locales/en';
import type { Session } from 'next-auth';
import styles from './AppSidebar.module.css';

type NavItem = {
  key: string;
  href?: string;
  icon: React.ElementType;
  label: string;
  disabled?: boolean;
};

function avatarFallback(name: string | null | undefined, email: string | null | undefined) {
  if (name) {
    return name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }
  return email?.[0]?.toUpperCase() ?? '?';
}

export function AppSidebar({
  t,
  session,
}: {
  t: Dictionary;
  session: Session;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const user = session.user;

  const primary: NavItem[] = [
    { key: 'people', href: '/app', icon: Users, label: t.app.sidebar.people },
    { key: 'chat', href: '/app', icon: MessageCircle, label: t.app.sidebar.chat },
    { key: 'newPerson', href: '/app/new', icon: UserPlus, label: t.app.sidebar.newPerson },
    { key: 'settings', href: '/app/settings', icon: Settings, label: t.app.sidebar.settings },
  ];

  const secondary: NavItem[] = [
    { key: 'photos', icon: Image, label: t.app.sidebar.photos, disabled: true },
    { key: 'social', icon: Rss, label: t.app.sidebar.social, disabled: true },
    { key: 'creation', icon: Sparkles, label: t.app.sidebar.creation, disabled: true },
    { key: 'tasks', icon: Clock, label: t.app.sidebar.tasks, disabled: true },
    { key: 'credits', icon: Coins, label: t.app.sidebar.credits, disabled: true },
    { key: 'messages', icon: Bell, label: t.app.sidebar.messages, disabled: true },
  ];

  const isActive = (href?: string) => !!href && pathname === href;

  const renderItem = (item: NavItem) => {
    const Icon = item.icon;
    const active = isActive(item.href);
    const content = (
      <>
        <Icon size={20} strokeWidth={1.5} aria-hidden className={styles.icon} />
        <span className={styles.label}>{item.label}</span>
      </>
    );

    if (item.disabled) {
      return (
        <span
          key={item.key}
          className={`${styles.item} ${styles.disabled}`}
          aria-disabled="true"
          title={t.app.sidebar.soon}
        >
          {content}
        </span>
      );
    }

    return (
      <Link
        key={item.key}
        href={item.href!}
        className={`${styles.item} ${active ? styles.active : ''}`}
        onClick={() => setOpen(false)}
        aria-current={active ? 'page' : undefined}
      >
        {content}
      </Link>
    );
  };

  return (
    <>
      {/* Mobile top bar */}
      <header className={styles.mobileTopBar}>
        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? t.app.sidebar.closeMenu : t.app.sidebar.openMenu}
          aria-expanded={open}
          aria-controls="app-sidebar"
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
        <Link href="/app" className={styles.mobileBrand}>
          <Lamp size={22} variant="still" />
          <span>{t.brand.name}</span>
        </Link>
        <div className={styles.mobileSpacer} />
      </header>

      {/* Overlay for mobile */}
      {open && <div className={styles.overlay} onClick={() => setOpen(false)} aria-hidden />}

      {/* Sidebar */}
      <aside
        id="app-sidebar"
        className={`${styles.sidebar} ${open ? styles.open : ''}`}
        aria-label={t.app.sidebar.navigation}
      >
        <div className={styles.inner}>
          <div className={styles.header}>
            <Link href="/app" className={styles.brand} onClick={() => setOpen(false)}>
              <Lamp size={24} variant="still" />
              <span>{t.brand.name}</span>
            </Link>
          </div>

          <nav className={styles.nav} aria-label={t.app.sidebar.primaryNav}>
            {primary.map(renderItem)}
          </nav>

          <nav className={styles.nav} aria-label={t.app.sidebar.secondaryNav}>
            {secondary.map(renderItem)}
          </nav>

          <div className={styles.footer}>
            <div className={styles.toggles}>
              <LocaleToggle />
              <ThemeToggle label={t.nav.toggleTheme} />
            </div>

            <div className={styles.user}>
              <div className={styles.avatar} aria-hidden>
                {avatarFallback(user?.name, user?.email)}
              </div>
              <div className={styles.userInfo}>
                <span className={styles.userName}>{user?.name || user?.email || t.app.sidebar.guest}</span>
                {user?.email && user?.name ? (
                  <span className={styles.userEmail}>{user.email}</span>
                ) : null}
              </div>
              <button
                type="button"
                className={styles.signOut}
                onClick={() => signOut({ callbackUrl: '/' })}
                aria-label={t.app.signOut}
                title={t.app.signOut}
              >
                <LogOut size={18} strokeWidth={1.5} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
