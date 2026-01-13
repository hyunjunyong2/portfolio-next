import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

const workProjects = projects.filter(
  (project) => project.category === 'work'
);

const sideProjects = projects.filter(
  (project) => project.category === 'side'
);

export default function ProjectsPage() {
  return (
    <section className="space-y-16">
      {/* Work Projects */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">
            실무 프로젝트
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            실제 서비스 환경에서 유지보수 및 개선을 담당한 프로젝트입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {workProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>

      {/* Side Projects */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">
            사이드 프로젝트
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            개발자로 성장해오며 개인 또는 팀으로 진행한 프로젝트입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {sideProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
