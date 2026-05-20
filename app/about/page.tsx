import type { Metadata } from 'next';
import FadeIn from '@/components/motion/FadeIn';

export const metadata: Metadata = {
  title: 'About',
  description:
    '사용자 경험과 유지보수를 함께 고민하는 프론트엔드 개발자 현준용의 소개 페이지입니다.',
};

const CAREER = [
  {
    company: '가제트코리아 (유심사)',
    period: '2024.02 ~ 현재',
    role: 'Frontend Developer',
    description:
      'Nuxt3 기반 B2C 메인 서비스·어드민·B2B 파트너스 포털을 담당하며, Next.js App Router + Turborepo 모노레포 신규 서비스 구축에 참여하고 있습니다.',
  },
  {
    company: '싸이클로이드',
    period: '2023.11 ~ 2024.01',
    role: 'Frontend Developer',
    description: '바드림 서비스 프론트엔드 개발에 참여했습니다.',
  },
  {
    company: '커넥트웨이브',
    period: '2022.02 ~ 2023.10',
    role: 'Frontend Developer',
    description:
      'Vue/Nuxt 기반 커머스·미디어·백오피스 서비스 개발 및 유지보수를 담당했습니다. Storybook 기반 아토믹 디자인 시스템 구축 경험.',
  },
];

const STACKS = [
  {
    label: '주력',
    items: ['Vue.js 2/3', 'Nuxt.js 2/3', 'Next.js (App Router)', 'TypeScript', 'JavaScript'],
  },
  {
    label: '상태관리 / 라우팅',
    items: ['Pinia', 'Vuex', 'React Query'],
  },
  {
    label: 'UI / 스타일',
    items: ['TailwindCSS', 'Element Plus', 'TipTap', 'Storybook'],
  },
  {
    label: '인프라 / 도구',
    items: ['Turborepo', 'pnpm workspace', 'Git Husky', 'Airbridge', 'GTM', 'Sentry'],
  },
  {
    label: '협업',
    items: ['Git', 'GitHub', 'Jira', 'Figma'],
  },
];

export default function About() {
  return (
    <section className="space-y-12">
      {/* Title */}
      <FadeIn>
        <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
          사용자 경험과 유지보수를 함께 고민하는<br className="hidden sm:block" /> 프론트엔드 개발자
        </h1>
      </FadeIn>

      {/* Intro */}
      <FadeIn>
        <div className="space-y-3 text-sm sm:text-base text-gray-700">
          <p>
            혼자 문제를 해결하기보다는 팀과 함께 논의하며 더 나은 방향을
            찾아가는 과정을 즐깁니다.
            개발 과정에서 발생하는 이슈를 단순히 넘기지 않고,
            원인을 파악하고 해결하는 것을 중요하게 생각합니다.
          </p>
          <p>
            Vue/Nuxt 기반의 실무 경험을 바탕으로, 현재는 Next.js App Router 환경에서
            확장성과 유지보수를 고려한 프론트엔드 구조에 관심을 두고 있습니다.
          </p>
        </div>
      </FadeIn>

      {/* Career */}
      <FadeIn>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">경력</h2>
          <ol className="relative border-l border-gray-200 space-y-8 pl-6">
            {CAREER.map((c) => (
              <li key={c.company} className="relative">
                <span className="absolute -left-6.25 top-1.5 h-3 w-3 rounded-full border-2 border-blue-400 bg-white" />
                <p className="text-xs text-gray-400">{c.period}</p>
                <p className="mt-0.5 font-semibold">{c.company}</p>
                <p className="text-sm text-blue-500">{c.role}</p>
                <p className="mt-1 text-sm text-gray-600">{c.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </FadeIn>

      {/* Tech Stack */}
      <FadeIn>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">기술 스택</h2>
          <div className="space-y-4">
            {STACKS.map((stack) => (
              <div key={stack.label} className="flex flex-col sm:flex-row sm:items-start gap-2">
                <span className="w-36 shrink-0 text-sm font-medium text-gray-500">
                  {stack.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border bg-gray-50 px-3 py-1 text-sm text-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
