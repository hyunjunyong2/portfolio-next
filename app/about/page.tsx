import type { Metadata } from 'next';
import FadeIn from '@/components/motion/FadeIn';
import Section from '@/components/ui/Section';
import Tag from '@/components/ui/Tag';

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
      'B2C 유심사몰(Nuxt3)의 인증·결제·성능과 공항 송영(TA) 서비스를 담당하고, Turborepo 기반 Next.js 전환과 제휴사 웹(Nuxt 4) 재구축을 진행했습니다. 내부 어드민과 B2B 세일즈 파트너스 포털도 함께 맡았습니다.',
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
      'Vue/Nuxt 기반 커머스·미디어·백오피스 서비스 개발 및 유지보수를 담당했습니다. Storybook 기반 아토믹 디자인 시스템을 구축했습니다.',
  },
];

const STACKS = [
  { label: '주력', items: ['Vue.js 2/3', 'Nuxt.js 2/3/4', 'TypeScript', 'JavaScript'] },
  { label: '그 외 프레임워크', items: ['Next.js (App Router)', 'React 19'] },
  { label: '상태관리 / 데이터', items: ['Pinia', 'Vuex', 'Zustand', 'TanStack Query'] },
  { label: 'UI / 스타일', items: ['TailwindCSS', 'Element Plus', 'TipTap', 'Storybook'] },
  { label: '결제 / 연동', items: ['Toss Payments', 'Supabase', 'Airbridge', 'GTM'] },
  {
    label: '인프라 / 도구',
    items: ['Turborepo', 'pnpm workspace', 'GitHub Actions', 'Playwright', 'Sentry', 'Git Husky'],
  },
  { label: 'AI 활용', items: ['Claude Code', 'PRD·설계 문서 선행 개발', 'CLAUDE.md 컨벤션'] },
  { label: '협업', items: ['Git', 'GitHub', 'Jira', 'Figma'] },
];

export default function About() {
  return (
    <div className="space-y-16">
      <FadeIn>
        <h1 className="font-display text-3xl font-bold leading-snug sm:text-5xl">
          사용자 경험과 유지보수를 함께
          <br className="hidden sm:inline" /> 고민하는 프론트엔드 개발자
        </h1>
      </FadeIn>

      <Section label="Intro">
        <div className="space-y-4 text-base text-muted">
          <p>
            혼자 문제를 해결하기보다는 팀과 함께 논의하며 더 나은 방향을 찾아가는 과정을
            즐깁니다. 개발 중 생기는 이슈를 단순히 넘기지 않고 원인을 파악해 해결하는 것을
            중요하게 생각합니다.
          </p>
          <p>
            Vue/Nuxt 실무 경험을 바탕으로, 현재는 Next.js App Router 환경에서 확장성과
            유지보수를 고려한 프론트엔드 구조에 관심을 두고 있습니다.
          </p>
        </div>
      </Section>

      <Section label="Career">
        <ol className="space-y-8">
          {CAREER.map((c) => (
            <li key={c.company} className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
              <p className="font-mono text-xs text-muted sm:pt-1.5">{c.period}</p>
              <div>
                <p className="font-display text-xl font-bold">{c.company}</p>
                <p className="text-sm text-accent">{c.role}</p>
                <p className="mt-2 text-sm text-muted">{c.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section label="Tech Stack">
        <div className="space-y-5">
          {STACKS.map((stack) => (
            <div key={stack.label} className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              <span className="w-36 shrink-0 text-sm text-muted sm:pt-1">{stack.label}</span>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
