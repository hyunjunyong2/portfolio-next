import './globals.css';
import Header from '@components/layouts/Header';

export const metadata = {
  title: 'Hyunjun Yong | Frontend Developer',
  description: 'Next.js 기반 프론트엔드 포트폴리오',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      {/* <body className="bg-white text-black dark:bg-black dark:text-white"> */}
      <body className="bg-white text-black">
        <Header />
        <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
