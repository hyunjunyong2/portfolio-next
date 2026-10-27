import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/motion/FadeIn';
import Section from '@/components/ui/Section';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: '홈',
  description:
    '프론트엔드 개발자 현준용의 포트폴리오 홈입니다. Vue, Nuxt 실무 경험과 Next.js 기반 개인 프로젝트를 소개합니다.',
};

const CAREER = [
  {
    company: '가제트코리아 (유심사)',
    period: '2024.02 ~ 현재',
    desc: 'Nuxt 3/4 · Next.js',
  },
  {
    company: '싸이클로이드',
    period: '2023.12 ~ 2024.02',
    desc: 'Vue · Nuxt',
  },
  {
    company: '커넥트웨이브',
    period: '2023.03 ~ 2023.10',
    desc: 'Nuxt3 · Storybook',
  },
  {
    company: '카비오스',
    period: '2022.02 ~ 2023.03',
    desc: 'Vue · Nuxt',
  },
];

const HIGHLIGHTS = [
  {
    project: '유심사몰 인증',
    role: '4종 소셜 로그인 통합 인증 설계·구현',
    tech: '만료 JWT 로그인 루프 방어 (exp 판정 · 쿠키 수명 제한)',
  },
  {
    project: '세일즈 파트너스 포털',
    role: '역할 기반 권한 관리 설계 · 대량 개통 프론트엔드 담당 (팀 프로젝트)',
    tech: 'CSV → Excel 전환 · ICCID 처리',
  },
  {
    project: '공항 송영(TA)',
    role: '예약 서비스 프론트엔드 개발 (팀 프로젝트)',
    tech: '항공편 조회 실패 시 수기 입력 폴백 · 24시간 리드타임 검사 · 8개 공항 확장',
  },
];

const FEATURED_SLUGS = ['usimsa-web', 'usimsa-partners', 'usimsa-sales-partners'];
const featured = FEATURED_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(
  (p): p is NonNullable<typeof p> => Boolean(p),
);

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <FadeIn>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Frontend Developer · 4+ years
        </p>
        <h1 className="mt-5 font-display text-[clamp(1.875rem,7.5vw,3.75rem)] font-bold leading-tight">
          원인을 끝까지 파고드는
          <br />
          프론트엔드 개발자
          <br />
          현준용입니다.
        </h1>
        <p className="mt-7 max-w-2xl text-base text-muted sm:text-lg">
          Vue/Nuxt 기반 4년 이상의 실무 경험으로, 유심사몰의 인증·결제·SSR 성능을 맡았습니다.
          Turborepo 모노레포 설계와 Next.js 전환에 참여하고, 제휴사 웹 재구축을 프론트엔드 단독으로 맡았습니다.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            프로젝트 보기
          </Link>
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line-strong px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
          >
            이력서 ↗
          </a>
        </div>
      </FadeIn>

      {/* Highlights */}
      <FadeIn>
        <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {HIGHLIGHTS.map((h) => (
            <div key={h.project} className="bg-surface p-6">
              <dt className="font-display text-2xl font-bold text-accent">{h.project}</dt>
              <dd className="mt-3 text-sm font-medium leading-relaxed">{h.role}</dd>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{h.tech}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-xs text-muted">팀 프로젝트는 제가 맡은 범위를 함께 적었습니다.</p>
      </FadeIn>

      {/* Selected work */}
      <Section label="Selected Work">
        <div className="-mt-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-6 inline-block text-sm text-muted transition-colors hover:text-accent"
        >
          전체 프로젝트 보기 →
        </Link>
      </Section>

      {/* Career */}
      <Section label="Career">
        <ul className="divide-y divide-line">
          {CAREER.map((c) => (
            <li
              key={c.company}
              className="flex flex-col gap-1 py-4 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <p className="font-medium">{c.company}</p>
                <p className="font-mono text-xs text-muted">{c.desc}</p>
              </div>
              <span className="font-mono text-xs text-muted">{c.period}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-muted">제주대학교 졸업 (2022.08)</p>
      </Section>
    </div>
  );
}
