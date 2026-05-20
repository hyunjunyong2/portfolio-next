import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/motion/FadeIn';

export const metadata: Metadata = {
  title: '홈',
  description:
    '프론트엔드 개발자 현준용의 포트폴리오 홈입니다. Vue, Nuxt 실무 경험과 Next.js 기반 개인 프로젝트를 소개합니다.',
};

const CAREER = [
  {
    company: '가제트코리아 (유심사)',
    period: '2024.02 ~ 현재',
    desc: 'Nuxt3 · Next.js',
  },
  {
    company: '싸이클로이드',
    period: '2023.11 ~ 2024.01',
    desc: 'Vue · Nuxt',
  },
  {
    company: '커넥트웨이브',
    period: '2022.02 ~ 2023.10',
    desc: 'Vue · Nuxt',
  },
];

export default function Home() {
  return (
    <section className="space-y-12">
      {/* Hero */}
      <FadeIn>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          안녕하세요 👋 <br />
          프론트엔드 개발자 <span className="text-blue-500">현준용</span>입니다.
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          혼자 하는 것보다는 여러 사람과 협업하며 커뮤니케이션하는 것을 즐기고,
          어려운 문제에 직면하더라도 해결하기 위해 끊임없이 도전하는 개발자를 지향합니다.
        </p>
      </FadeIn>

      {/* Profile */}
      <FadeIn>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">프로필</h2>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• 1998.01.21</li>
            <li>• 제주대학교 졸업 (2022.08)</li>
          </ul>
        </div>
      </FadeIn>

      {/* Career */}
      <FadeIn>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">경력</h2>
          <ul className="space-y-3">
            {CAREER.map((c) => (
              <li key={c.company} className="flex items-start justify-between gap-4 rounded-lg border p-4">
                <div>
                  <p className="font-medium">{c.company}</p>
                  <p className="mt-0.5 text-sm text-gray-500">{c.desc}</p>
                </div>
                <span className="shrink-0 text-sm text-gray-400">{c.period}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <div className="flex gap-3">
          <Link
            href="/projects"
            className="rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
          >
            프로젝트 보기
          </Link>
          <Link
            href="/about"
            className="rounded-lg border px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            About
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
