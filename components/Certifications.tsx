// components/Certifications.tsx

import FadeIn from "@/components/FadeIn";
import { CERTIFICATIONS } from "@/lib/data";
import Image from "next/image";
import AgentGraphBackground from "@/components/AgentGraphBackground";

export default function Certifications() {
  return (
    <section
      id="certifications"
      /* Added relative and overflow-hidden to contain the background */
      className="relative overflow-hidden section-padding border-t border-border"
    >
      {/* BACKGROUND ANIMATION LAYER */}
      <div className="absolute inset-0 pointer-events-none">
        <AgentGraphBackground />
        {/* Glows: Cyan top-right, Indigo bottom-left */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.10),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,.10),transparent_35%)]" />
        
        {/* Vignette blend to smoothly fade into sections above/below */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/80 via-transparent to-[#0B1120]/80" />
      </div>

      {/* MAIN CONTENT WRAPPER - Added relative and z-10 */}
      <div className="section-container relative z-10">
        <FadeIn>
          <h2 className="mb-3 font-display text-4xl font-bold uppercase tracking-wider text-white md:text-5xl">
            Professional <span className="text-purple-400">Certifications</span>
          </h2>
          <p className="mb-5 font-display text-xl text-gray-400 md:text-2xl">
            Continuous learning & upskilling.
          </p>
        </FadeIn>

        {/* Reduced the gap between cards from gap-6 to gap-4 */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => {
            return (
              <FadeIn key={cert.title} delay={i * 0.08}>
                <div
                  className="
                    group
                    flex
                    flex-col
                    h-full
                    gap-4 /* Slightly tighter gap between logo and text */
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-5 /* Reduced inner padding from p-6 to p-5 */
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-400/30
                    hover:bg-white/[0.05]
                  "
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white p-2">
                    {cert.logo ? (
                      <Image
                        src={cert.logo}
                        alt={cert.issuer}
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    ) : (
                      <div className="h-full w-full rounded-full bg-gray-200/20" />
                    )}
                  </div>

                  <div className="flex-1 mt-1">
                    <div className="flex items-center justify-between mb-2">
                      <p className="eyebrow text-[10px] tracking-[0.2em]">
                        {cert.issuer}
                      </p>
                      <span className="text-xs text-secondary font-mono">
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="mb-2 font-display text-lg font-semibold leading-snug text-white">
                      {cert.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-secondary text-justify">
                      {cert.description}
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