'use client';

import { useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

// 초기 테마는 layout 의 인라인 스크립트가 <html data-theme> 에 반영해 둔다.
// 그 속성을 외부 저장소처럼 구독하면 effect 안에서 setState 를 부르지 않아도 된다.
function readStored(): Theme | null {
  try {
    const t = localStorage.getItem(STORAGE_KEY);
    return t === 'light' || t === 'dark' ? t : null;
  } catch {
    return null;
  }
}

/** 색 전환이 transition-colors 요소마다 따로 번지지 않도록 한 프레임 동안 전환 효과를 끈다 */
function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.themeSwitching = '';
  root.dataset.theme = theme;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => delete root.dataset.themeSwitching);
  });
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  // 직접 고른 적이 없으면 OS 테마 변경을 실시간으로 따라간다.
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const onSystemChange = (e: MediaQueryListEvent) => {
    if (!readStored()) applyTheme(e.matches ? 'dark' : 'light');
  };
  media.addEventListener('change', onSystemChange);

  return () => {
    observer.disconnect();
    media.removeEventListener('change', onSystemChange);
  };
}

const getSnapshot = (): Theme | null =>
  document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';

const getServerSnapshot = (): Theme | null => null;

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // 저장이 막힌 환경에서는 현재 방문에만 적용한다.
    }
  };

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
      title={isDark ? '라이트 모드' : '다크 모드'}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-muted transition-colors hover:border-ink hover:text-ink"
    >
      {theme === null ? null : isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}
