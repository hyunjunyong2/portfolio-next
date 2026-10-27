'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const NAV_ITEMS = [
  { href: '/', label: 'Home', hideOnMobile: true },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight">
          hyunjunyong<span className="text-accent">.</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-7">
          <nav aria-label="주요 메뉴" className="flex gap-4 text-sm sm:gap-7">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`${item.hideOnMobile ? 'hidden sm:inline' : ''} relative py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-px after:h-px after:origin-left after:bg-accent after:transition-transform ${
                    isActive
                      ? 'text-ink after:scale-x-100'
                      : 'text-muted after:scale-x-0 hover:text-ink hover:after:scale-x-100'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
