import type { Metadata, Viewport } from 'next';
import { Geist_Mono, Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google';
import './globals.css';
import Header from '@components/layouts/Header';
import Footer from '@components/layouts/Footer';

const body = Noto_Sans_KR({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

const serif = Noto_Serif_KR({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
});

const code = Geist_Mono({
  variable: '--font-code',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f4ee' },
    { media: '(prefers-color-scheme: dark)', color: '#11110e' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: '현준용 | 프론트엔드 개발자',
    template: '%s | 현준용',
  },
  description:
    'Vue, Nuxt 기반 실무 경험을 바탕으로 사용자 경험과 유지보수를 함께 고민하는 프론트엔드 개발자 현준용의 포트폴리오입니다.',
  keywords: [
    '프론트엔드 개발자',
    'Vue',
    'Nuxt',
    'Next.js',
    '웹 개발자 포트폴리오',
    '현준용',
  ],
  authors: [{ name: '현준용' }],
  creator: '현준용',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    title: '현준용 | 프론트엔드 개발자',
    description:
      'Vue, Nuxt 기반 실무 경험을 바탕으로 사용자 경험과 유지보수를 함께 고민하는 프론트엔드 개발자 현준용의 포트폴리오입니다.',
    siteName: 'Hyunjun Yong Portfolio',
  },
};

// 첫 페인트 전에 저장된 테마(없으면 시스템 설정)를 적용해 깜빡임을 막는다.
const themeScript = `(function(){var t;try{t=localStorage.getItem('theme')}catch(e){}if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t;})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${body.variable} ${serif.variable} ${code.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen font-sans">
        <Header />
        <main className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
