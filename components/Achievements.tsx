// components/Achievements.tsx

import FadeIn from "@/components/FadeIn";
import { ACHIEVEMENTS } from "@/lib/data";
import Image from "next/image";

export default function Achievements() {
  return (
    <section
  id="achievements"
  className="min-h-screen flex flex-col justify-center py-16 md:py-20 border-t border-white/5"
>
      <div className="section-container">
        <FadeIn>
          <p className="eyebrow mb-5">Achievements</p>

          <h2 className="mb-16 w-full font-display text-4xl font-bold leading-tight text-white md:text-4xl lg:text-5xl lg:whitespace-nowrap">
            Measured outcomes, not participation trophies.
          </h2>
        </FadeIn>

        {/* Updated Grid Layout Here */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => {
            return (
              <FadeIn key={a.title} delay={i * 0.08}>
                <div
                  className="
                    group
                    flex
                    h-full
                    gap-5
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-8
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400/30
                    hover:bg-white/[0.05]
                  "
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white p-2">
                    {a.logo ? (
                      <Image
                        src={a.logo}
                        alt={a.title}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    ) : (
                      <div className="h-full w-full rounded-full bg-gray-200/20" />
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="eyebrow mb-2 text-[11px] tracking-[0.3em]">
                      {a.tag}
                    </p>

                    <h3 className="mb-3 font-display text-xl font-semibold leading-snug text-white">
                      {a.title}
                    </h3>

                    <p className="text-base leading-7 text-justify text-secondary">
                      {a.description}
                    </p>
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