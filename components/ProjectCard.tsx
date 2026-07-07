// components/ProjectCard.tsx
import { Github, ArrowUpRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import type { PROJECTS } from "@/lib/data";

export default function ProjectCard({
  project,
  reversed = false,
}: {
  project: (typeof PROJECTS)[number];
  reversed?: boolean;
}) {
  return (
    <div className="card-surface overflow-hidden">
      <div
        className={`grid gap-0 md:grid-cols-2 ${
          reversed ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="p-6 md:p-10">
          <p className="eyebrow mb-2">Featured project</p>
          <h3 className="font-display text-2xl font-semibold md:text-3xl">
            {project.name}
          </h3>
          <p className="mb-5 text-sm text-secondary">{project.subtitle}</p>

          <p className="mb-6 text-secondary">{project.description}</p>

          <ul className="mb-6 space-y-2.5">
            {project.bullets.map((b) => (
              <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-secondary">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-purple" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mb-6 grid grid-cols-3 gap-4 border-y border-border py-4">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="stat-mono text-lg font-semibold text-primary">
                  {m.value}
                </p>
                <p className="text-[11px] text-secondary">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent-cyan hover:underline"
          >
            <Github size={15} /> View source <ArrowUpRight size={13} />
          </a>
        </div>

        <div className="flex items-center bg-base-elevated/40 p-6 md:p-10">
          <ArchitectureDiagram type={project.diagram} />
        </div>
      </div>
    </div>
  );
}
