import Link from 'next/link';
import { Project } from '@/data/projects';

type Props = {
  project: Project;
  index?: number;
};

/** 목록형 행. 번호 · 제목/요약 · 기간, 호버 시 화살표가 움직인다. */
export default function ProjectCard({ project, index }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 border-b border-line -mx-3 px-3 py-6 transition-colors sm:grid-cols-[2.5rem_1fr_auto] sm:hover:bg-surface"
    >
      <span className="shrink-0 pt-1.5 font-mono text-xs text-muted">
        {index !== undefined ? String(index + 1).padStart(2, '0') : '—'}
      </span>

      <div className="min-w-0">
        <h3 className="font-display text-xl font-bold leading-snug transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm text-muted">{project.summary}</p>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div className="col-start-2 mt-2 flex items-center gap-3 font-mono text-xs text-muted sm:col-start-3 sm:mt-0 sm:flex-col sm:items-end sm:justify-between">
        <span>{project.period}</span>
        <span
          aria-hidden
          className="text-base text-ink transition-transform group-hover:translate-x-1 group-hover:text-accent"
        >
          →
        </span>
      </div>
    </Link>
  );
}
