import type { Metadata } from 'next';
import './globals.css';
import Header from '@components/layouts/Header';

export const metadata: Metadata = {
  // metadataBase: new URL('내 url'), // vercel 배포후 수정예정
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
