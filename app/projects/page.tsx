import type { Metadata } from 'next';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    '프론트엔드 개발자 현준용의 실무 및 사이드 프로젝트 목록입니다.',
};

const WORK_GROUPS = [
  {
    company: '가제트코리아 (유심사)',
    period: '2024.02 ~ 현재',
  },
  {
    company: '싸이클로이드',
    period: '2023.11 ~ 2024.01',
  },
  {
    company: '커넥트웨이브',
    period: '2022.02 ~ 2023.10',
  },
];

const sideProjects = projects.filter((p) => p.category === 'side');

export default function ProjectsPage() {
  return (
    <section className="space-y-16">
      {/* 실무 프로젝트 */}
      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold">실무 프로젝트</h2>
          <p className="mt-1 text-sm text-gray-500">
            실제 서비스 환경에서 개발 및 유지보수를 담당한 프로젝트입니다.
          </p>
        </div>

        {WORK_GROUPS.map((group) => {
          const groupProjects = projects.filter(
            (p) => p.category === 'work' && p.company === group.company
          );
          if (groupProjects.length === 0) return null;

          return (
            <div key={group.company} className="space-y-4">
              <div className="flex items-baseline gap-3">
                <h3 className="text-lg font-semibold">{group.company}</h3>
                <span className="text-sm text-gray-400">{group.period}</span>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {groupProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* 사이드 프로젝트 */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">사이드 프로젝트</h2>
          <p className="mt-1 text-sm text-gray-500">
            개인 또는 팀으로 진행한 프로젝트입니다.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sideProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
