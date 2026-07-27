import { ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";

export default function ProjectsWindow() {
  return (
    <div className="space-y-4">
      <p className="text-text-muted"># ls ~/projects</p>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-border rounded-md p-4 bg-surface-hi/50 hover:border-arch/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-arch font-semibold">{project.name}</h3>
              <div className="flex items-center gap-3">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-muted hover:text-text-primary transition-colors"
                    aria-label={`${project.name} repository`}
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-muted hover:text-text-primary transition-colors"
                    aria-label={`${project.name} live site`}
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-text-primary text-sm mt-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-1.5 py-0.5 rounded bg-base text-text-muted border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
