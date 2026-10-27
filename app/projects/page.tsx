import type { Metadata } from 'next';
import ProjectCard from '@/components/projects/ProjectCard';
import FadeIn from '@/components/motion/FadeIn';
import Section from '@/components/ui/Section';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    '프론트엔드 개발자 현준용의 실무 및 사이드 프로젝트 목록입니다.',
};

const WORK_GROUPS = [
  { company: '가제트코리아 (유심사)', period: '2024.02 ~ 현재' },
  { company: '싸이클로이드', period: '2023.12 ~ 2024.02' },
  { company: '커넥트웨이브', period: '2023.03 ~ 2023.10' },
  { company: '카비오스', period: '2022.02 ~ 2023.03' },
];

const sideProjects = projects.filter((p) => p.category === 'side');

export default function ProjectsPage() {
  return (
    <div className="space-y-16">
      <FadeIn>
        <h1 className="font-display text-3xl font-bold leading-snug sm:text-5xl">
          실제 서비스에서 만든 것들
        </h1>
        <p className="mt-5 max-w-xl text-muted">
          실무 프로젝트는 최신순으로 정렬했습니다. 팀 프로젝트는 제가 맡은 범위를 함께
          적었습니다.
        </p>
      </FadeIn>

      {WORK_GROUPS.map((group) => {
        const groupProjects = projects.filter(
          (p) => p.category === 'work' && p.company === group.company,
        );
        if (groupProjects.length === 0) return null;

        return (
          <Section key={group.company} label={group.period} labelAs="p">
            <h2 className="font-display text-2xl font-bold">{group.company}</h2>
            <div className="mt-4">
              {groupProjects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </Section>
        );
      })}

      <Section label="Side" labelAs="p">
        <h2 className="font-display text-2xl font-bold">사이드 프로젝트</h2>
        <p className="mt-1 text-sm text-muted">개인 또는 팀으로 진행한 프로젝트입니다.</p>
        <div className="mt-4">
          {sideProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Section>
    </div>
  );
}
