// components/Skills.tsx
import FadeIn from "@/components/FadeIn";
import Badge from "@/components/ui/Badge";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="section-container">
        <FadeIn>
          <p className="eyebrow mb-4">Skills</p>
          <h2 className="mb-14 max-w-xl font-display text-3xl font-semibold md:text-4xl">
            The stack, grouped by what it&apos;s for.
          </h2>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.05}>
              <div className="card-surface h-full p-6">
                <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-accent-cyan">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
