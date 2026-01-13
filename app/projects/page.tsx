import ProjectCard from '@/components/projects/ProjectCard'
import { projects } from '@/data/projects';

export default function project() {
  return (
    <div className="grid gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}