"use client";

import { useRef } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Badge from "@/components/ui/Badge";
import { EXPERIENCE } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

// --- SUB-COMPONENT FOR INDIVIDUAL JOB ITEMS ---
function ExperienceItem({ job, index }: { job: typeof EXPERIENCE[0]; index: number }) {
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
        
        <motion.div
          style={{
            backgroundColor: circleBg,
            borderColor: circleBorder,
            boxShadow: circleShadow,
          }}
          className="absolute -left-[39px] top-2 z-10 h-4 w-4 rounded-full border-2 md:-left-[55px]"
        />

        <div className="card-surface p-6 md:p-8">
          <div className="mb-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            
            {/* LOGO & TITLE CONTAINER */}
            <div className="flex items-center gap-4">
              {job.logo && (
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-2 shadow-sm border border-white/10 md:h-14 md:w-14">
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    fill
                    className="object-contain p-1.5"
                  />
                </div>
              )}
              <div>
                <h3 className="font-display text-xl font-semibold">
                  {job.role}
                </h3>
                <p className="text-secondary mt-0.5">
                  {job.company} · {job.location}
                </p>
              </div>
            </div>

            {/* DATE BADGE */}
            <span className="stat-mono shrink-0 rounded-full bg-white/[0.03] px-3 py-1 text-xs text-muted border border-border">
              {job.period}
            </span>
          </div>

          {/* BULLET POINTS */}
          <ul className="mb-5 space-y-2.5 text-secondary">
            {job.bullets.map((b) => (
              // ADDED text-justify right here 
              <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-justify">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                <span>{b}</span>
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
}

// --- MAIN EXPERIENCE COMPONENT ---
export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section-padding border-t border-border">
      <div className="section-container">
        
        <FadeIn>
          <h2 className="mb-4 font-display text-4xl font-bold uppercase tracking-wider text-primary md:text-5xl">
            Work <span className="text-purple-400">Experience</span>
          </h2>
          <p className="mb-14 font-display text-xl text-secondary whitespace-nowrap md:text-2xl">
            Production time, not just project time.
          </p>
        </FadeIn>

        <div ref={containerRef} className="relative space-y-10 pl-8 md:pl-12">
          
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

          {EXPERIENCE.map((job, i) => (
            <ExperienceItem key={job.company} job={job} index={i} />
          ))}
          
        </div>
      </div>
    </section>
  );
}