"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/data";
import AgentGraphBackground from "@/components/AgentGraphBackground";

// --- SUB-COMPONENT FOR INDIVIDUAL PROJECT ITEMS ---
function ProjectTimelineItem({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
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
    <div ref={itemRef} className="relative w-full group">
      
      <motion.div
        style={{
          backgroundColor: circleBg,
          borderColor: circleBorder,
          boxShadow: circleShadow,
        }}
        className="hidden md:block absolute -left-[55px] top-10 z-20 h-4 w-4 rounded-full border-2 lg:-left-[71px]"
      />

      <FadeIn delay={index * 0.08}>
        <ProjectCard project={project} reversed={index % 2 === 1} />
      </FadeIn>
    </div>
  );
}

// --- MAIN PROJECTS COMPONENT ---
export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 10,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  return (
    <section id="projects" className="relative overflow-hidden border-t border-border scroll-mt-16">
      
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        <AgentGraphBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,.10),transparent_35%)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base/40 to-base pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto px-6 lg:px-16 2xl:px-24 pt-8 pb-20 min-h-[calc(100vh-6rem)] flex flex-col">
        
        <FadeIn>
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white md:text-4xl lg:text-5xl pb-6">
            FEATURED <span className="text-[#c4a5ff]">PROJECTS</span>
          </h2>
        </FadeIn>

        <div className="flex-1 flex flex-col justify-center w-full">
          
          {/* TIMELINE WRAPPER */}
          <div ref={containerRef} className="relative w-full md:pl-12 lg:pl-16 mt-4">

            {/* ANIMATED TIMELINE TRACK */}
            <div className="hidden md:block absolute bottom-0 left-0 top-0 w-[2px] bg-white/10">
              
              {/* Glowing Line */}
              <motion.div
                style={{ height: lineHeight }}
                className="absolute left-0 top-0 w-full bg-[#06b6d4] shadow-[0_0_20px_rgba(6,182,212,0.8)]"
              />
              
              {/* The Leading Edge Tracker Dot */}
              <motion.div
                style={{ top: lineHeight }}
                className="absolute left-1/2 z-20 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-[#06b6d4] bg-slate-900 shadow-[0_0_15px_rgba(6,182,212,1)]"
              />

            </div>

            <div className="space-y-24 lg:space-y-32">
              {PROJECTS.map((project, i) => (
                <ProjectTimelineItem key={project.slug} project={project} index={i} />
              ))}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}