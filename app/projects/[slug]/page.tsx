import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import FadeIn from '@/components/motion/FadeIn';
import Tag from '@/components/ui/Tag';

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

const linkClass =
  'inline-flex items-center gap-1 rounded-full border border-line-strong px-4 py-1.5 text-sm transition-colors hover:border-ink';

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="space-y-14">
      <FadeIn>
        <Link
          href="/projects"
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          ← 프로젝트 목록
        </Link>

        <div className="mt-8 space-y-4">
          <p className="font-mono text-xs text-accent">
            {project.company ?? 'Side Project'} · {project.period}
          </p>
          <h1 className="font-display text-3xl font-bold leading-snug sm:text-5xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-lg text-muted">{project.summary}</p>
        </div>

        {(project.link || project.github || project.youtube) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={linkClass}>
                서비스 바로가기 ↗
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                GitHub ↗
              </a>
            )}
            {project.youtube && (
              <a href={project.youtube} target="_blank" rel="noopener noreferrer" className={linkClass}>
                YouTube ↗
              </a>
            )}
          </div>
        )}
      </FadeIn>

      <div className="grid gap-12 lg:grid-cols-[1fr_16rem]">
        <div className="space-y-12">
          {project.awards && project.awards.length > 0 && (
            <FadeIn>
              <div className="rounded-2xl border border-line bg-accent-soft p-5">
                <h2 className="font-mono text-xs uppercase tracking-widest text-accent">Awards</h2>
                <ul className="mt-3 space-y-1 text-sm">
                  {project.awards.map((award) => (
                    <li key={award}>{award}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          )}

          <FadeIn>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted">Overview</h2>
            <ul className="mt-5 max-w-[42rem] space-y-4">
              {project.description.map((desc, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-1 shrink-0 font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base leading-relaxed">{desc}</p>
                </li>
              ))}
            </ul>
          </FadeIn>

          {project.retrospective && (
            <FadeIn>
              <blockquote className="border-l-2 border-accent pl-5">
                <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
                  Retrospective
                </h2>
                <p className="mt-3 text-muted">{project.retrospective}</p>
              </blockquote>
            </FadeIn>
          )}
        </div>

        <aside className="order-first space-y-10 lg:order-none lg:sticky lg:top-24 lg:self-start">
          <FadeIn>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted">Role</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {project.role.map((r, i) => (
                <li key={i} className="border-l border-line pl-3 text-muted">
                  {r}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted">Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </FadeIn>
        </aside>
      </div>
    </div>
  );
}
