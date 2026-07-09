"use client";

import { useRef } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Badge from "@/components/ui/Badge";
import { EDUCATION } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

// --- SUB-COMPONENT FOR INDIVIDUAL EDUCATION ITEMS ---
function EducationItem({ edu, index }: { edu: typeof EDUCATION[0]; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start center", "end center"],
  });

  const circleBg = useTransform(scrollYProgress, [0, 0.05], ["transparent", "#06b6d4"]);
  const circleBorder = useTransform(scrollYProgress, [0, 0.05], ["#334155", "#06b6d4"]); 
  const circleShadow = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["0px 0px 0px rgba(6, 182, 212, 0)", "0px 0px 20px 4px rgba(6, 182, 212, 0.6)"]
  );

  return (
    <FadeIn delay={index * 0.08}>
      <div ref={itemRef} className="relative">
        
        {/* Animated Node */}
        <motion.div
          style={{
            backgroundColor: circleBg,
            borderColor: circleBorder,
            boxShadow: circleShadow,
          }}
          className="absolute -left-[39px] top-2 z-10 h-4 w-4 rounded-full border-2 md:-left-[55px]"
        />

        <div className="card-surface p-6 md:p-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            
            {/* LOGO & TITLE CONTAINER */}
            <div className="flex items-center gap-4">
              {edu.logo && (
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1 shadow-sm border border-white/10 md:h-16 md:w-16">
                  <Image
                    src={edu.logo}
                    alt={`${edu.school} logo`}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              )}
              <div>
                <h3 className="font-display text-xl font-semibold text-slate-100">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-slate-300">
                  {edu.school} · {edu.location}
                </p>
              </div>
            </div>

            {/* DATE BADGE */}
            <span className="stat-mono shrink-0 rounded-full bg-white/[0.05] px-3 py-1 text-xs text-slate-300 border border-white/10">
              {edu.period}
            </span>
          </div>

          {/* ACADEMIC SCORE & COURSES */}
          <div className="mt-5 flex flex-col gap-3">
            {/* Score Badge */}
            <div>
              <span className="font-mono text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.05] text-slate-200">
                {edu.score}
              </span>
            </div>

            {/* Courses/Subjects Badges */}
            {edu.courses && edu.courses.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {edu.courses.map((course) => (
                  <Badge key={course}>{course}</Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

// --- MAIN EDUCATION COMPONENT ---
export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="section-padding border-t border-border">
      <div className="section-container">
        
        <FadeIn>
          <h2 className="mb-4 font-display text-4xl font-bold uppercase tracking-wider text-primary md:text-5xl">
            Academic <span className="text-purple-400">Background</span>
          </h2>
          <p className="mb-14 font-display text-xl text-secondary whitespace-nowrap md:text-2xl">
            Building the foundation.
          </p>
        </FadeIn>

        <div ref={containerRef} className="relative space-y-10 pl-8 md:pl-12">
          
          {/* ANIMATED TIMELINE TRACK */}
          <div className="absolute bottom-0 left-0 top-0 w-[2px] bg-border">
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-0 top-0 w-full bg-accent-blue shadow-[0_0_20px_rgba(59,130,246,0.8)]"
            />
            
            <motion.div
              style={{ top: lineHeight }}
              className="absolute left-1/2 z-20 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-accent-blue bg-base-elevated shadow-[0_0_15px_rgba(59,130,246,1)]"
            />
          </div>

          {/* RENDER INDIVIDUAL EDUCATION ITEMS */}
          {EDUCATION.map((edu, i) => (
            <EducationItem key={edu.degree} edu={edu} index={i} />
          ))}
          
        </div>
      </div>
    </section>
  );
}