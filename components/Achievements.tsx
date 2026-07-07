// components/Achievements.tsx
import { Trophy, Award, BadgeCheck } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { ACHIEVEMENTS } from "@/lib/data";

const ICONS: Record<string, typeof Trophy> = {
  "Competitive Programming": Trophy,
  Hackathon: Award,
  Certification: BadgeCheck,
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding border-t border-border">
      <div className="section-container">
        <FadeIn>
          <p className="eyebrow mb-4">Achievements</p>
          <h2 className="mb-14 max-w-xl font-display text-3xl font-semibold md:text-4xl">
            Measured outcomes, not participation trophies.
          </h2>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = ICONS[a.tag] ?? Trophy;
            return (
              <FadeIn key={a.title} delay={i * 0.06}>
                <div className="card-surface flex h-full gap-4 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-signal">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="eyebrow mb-1 text-[10px]">{a.tag}</p>
                    <h3 className="mb-1.5 font-display text-base font-semibold leading-snug">
                      {a.title}
                    </h3>
                    <p className="text-sm text-secondary">{a.description}</p>
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
