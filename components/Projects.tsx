import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="section-container">
        <FadeIn>
          <p className="eyebrow mb-4">Projects</p>
          <h2 className="mb-14 max-w-xl font-display text-3xl font-semibold md:text-4xl">
            Systems with state, not just prompts.
          </h2>
        </FadeIn>

        <div className="space-y-10">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} reversed={i % 2 === 1} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
