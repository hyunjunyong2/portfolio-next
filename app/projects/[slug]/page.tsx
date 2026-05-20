import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import FadeIn from '@/components/motion/FadeIn';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <section className="space-y-10">
      {/* Back */}
      <FadeIn>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-black transition-colors"
        >
          ← 프로젝트 목록
        </Link>
      </FadeIn>

      {/* Header */}
      <FadeIn>
        <div className="space-y-2">
          {project.company && (
            <p className="text-sm text-blue-500 font-medium">{project.company}</p>
          )}
          <h1 className="text-3xl sm:text-4xl font-bold">{project.title}</h1>
          <p className="text-gray-500 text-sm">{project.period}</p>
          <p className="text-gray-600 mt-2">{project.summary}</p>
        </div>
      </FadeIn>

      {/* Links */}
      {(project.link || project.github || project.youtube) && (
        <FadeIn>
          <div className="flex flex-wrap gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm text-blue-600 hover:bg-blue-100 transition-colors"
              >
                🔗 서비스 바로가기
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                💻 GitHub
              </a>
            )}
            {project.youtube && (
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm text-red-600 hover:bg-red-100 transition-colors"
              >
                ▶ YouTube
              </a>
            )}
          </div>
        </FadeIn>
      )}

      {/* Awards */}
      {project.awards && project.awards.length > 0 && (
        <FadeIn>
          <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-5 space-y-2">
            <h2 className="font-semibold text-yellow-800">🏆 수상</h2>
            <ul className="space-y-1">
              {project.awards.map((award) => (
                <li key={award} className="text-sm text-yellow-700">
                  • {award}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      )}

      {/* Description */}
      <FadeIn>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">프로젝트 소개</h2>
          <ul className="space-y-2">
            {project.description.map((desc, i) => (
              <li key={i} className="flex gap-2 text-gray-700 text-sm sm:text-base">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

      {/* Role */}
      <FadeIn>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">담당 역할</h2>
          <ul className="space-y-2">
            {project.role.map((r, i) => (
              <li key={i} className="flex gap-2 text-gray-700 text-sm sm:text-base">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

      {/* Tech Stack */}
      <FadeIn>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">기술 스택</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border bg-gray-50 px-3 py-1 text-sm text-gray-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Retrospective */}
      {project.retrospective && (
        <FadeIn>
          <div className="rounded-xl border-l-4 border-blue-400 bg-blue-50 p-5">
            <h2 className="mb-2 font-semibold text-blue-800">회고</h2>
            <p className="text-sm text-blue-700">{project.retrospective}</p>
          </div>
        </FadeIn>
      )}
    </section>
  );
}
