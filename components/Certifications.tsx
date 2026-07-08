// components/Certifications.tsx

import FadeIn from "@/components/FadeIn";
import { CERTIFICATIONS } from "@/lib/data";
import Image from "next/image";

export default function Certifications() {
  return (
    <section
      id="certifications"
      // Reduced top/bottom padding (py-12 md:py-16) to pull it up slightly
      className="min-h-screen flex flex-col justify-center py-14 md:py-20 border-t border-white/5"
    >
      <div className="section-container">
        <FadeIn>
          <p className="eyebrow mb-3">Certifications</p>

          {/* Reduced margin-bottom (mb-10) to pull the grid up closer to the text */}
          <h2 className="mb-10 w-full font-display text-4xl font-bold leading-tight text-white md:text-4xl lg:text-5xl lg:whitespace-nowrap">
            Continuous learning & upskilling.
          </h2>
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