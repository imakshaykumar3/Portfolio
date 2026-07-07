import { Building2, Factory } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Badge from "@/components/ui/Badge";
import { EXPERIENCE } from "@/lib/data";

const icons = [Building2, Factory];

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-border">
      <div className="section-container">
        <FadeIn>
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="mb-14 max-w-xl font-display text-3xl font-semibold md:text-4xl">
            Production time, not just project time.
          </h2>
        </FadeIn>

        <div className="relative space-y-10 border-l border-border pl-8 md:pl-12">
          {EXPERIENCE.map((job, i) => {
            const Icon = icons[i % icons.length];
            return (
              <FadeIn key={job.company} delay={i * 0.08}>
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-base-elevated border border-border md:-left-[57px]">
                    <Icon size={15} className="text-accent-cyan" />
                  </span>

                  <div className="card-surface p-6 md:p-8">
                    <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="font-display text-xl font-semibold">
                          {job.role}
                        </h3>
                        <p className="text-secondary">
                          {job.company} · {job.location}
                        </p>
                      </div>
                      <span className="stat-mono text-xs text-muted">
                        {job.period}
                      </span>
                    </div>

                    <ul className="mb-5 space-y-2.5 text-secondary">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm leading-relaxed">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
