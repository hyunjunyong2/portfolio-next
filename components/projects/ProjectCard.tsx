import Link from 'next/link';
import { Project } from '@/data/projects';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="
        group
        block
        rounded-xl
        border
        bg-white
        p-5
        transition
        hover:-translate-y-1
        hover:shadow-md
        active:scale-[0.99]
      "
    >
      {/* Thumbnail */}
      {project.thumbnail && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="
              h-40 w-full object-cover
              transition-transform
              group-hover:scale-105
            "
          />
        </div>
      )}

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600">
          {project.summary}
        </p>

        <div className="pt-2 text-xs text-gray-500">
          {project.period}
        </div>
      </div>
    </Link>
  );
}
