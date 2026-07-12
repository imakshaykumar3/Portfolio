"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Code2, Mail } from "lucide-react";

import { PROFILE, CONTACT } from "@/lib/data";
import Button from "@/components/ui/Button";
import AgentGraphBackground from "@/components/AgentGraphBackground";
import HeroPhoto from "@/components/HeroPhoto";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % PROFILE.roles.length);
    }, 2500);

    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      // REDUCED: Top padding slightly to pull everything up (pt-32 -> pt-28)
      className="relative min-h-screen overflow-hidden pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-24"
    >
      {/* BACKGROUND ANIMATION LAYER */}
      <div className="absolute inset-0 pointer-events-none">
        <AgentGraphBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,.10),transparent_35%)]" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base/40 to-base pointer-events-none" />

      {/* MAIN CONTENT WRAPPER */}
      <div className="section-container relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="w-full">
          
          {/* TOP SECTION: NAME + PHOTO */}
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1.35fr_0.9fr] gap-8 lg:gap-12 items-center">
            
            {/* LEFT SIDE: TEXT */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full">
              
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-display font-bold leading-tight tracking-tight text-5xl sm:text-6xl md:text-7xl xl:text-8xl break-words"
              >
                {PROFILE.name}
              </motion.h1>

              <div className="mt-4 sm:mt-6 h-10 sm:h-12 w-full">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={roleIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="gradient-text font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight"
                  >
                    {PROFILE.roles[roleIndex]}
                  </motion.h2>
                </AnimatePresence>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-secondary text-justify"
              >
                I build production-grade{" "}
                <span className="text-accent-cyan font-semibold">
                  multi-agent AI systems
                </span>
                , scalable FastAPI backends, enterprise RAG pipelines, and intelligent
                applications that solve real engineering problems.
              </motion.p>

              {/* CTA BUTTONS */}
              {/* REDUCED: Margin top reduced from mt-10 to mt-6/8 */}
              <div className="mt-6 lg:mt-8 flex flex-wrap gap-3 xl:gap-4 items-center justify-center lg:justify-start w-full">
                <Button
                  href="#projects"
                  className="group px-4 sm:px-5 xl:px-6 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm xl:text-base shadow-xl hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 w-full sm:w-auto flex justify-center"
                >
                  Explore Projects
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 ml-2" />
                </Button>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 xl:gap-3 w-full sm:w-auto">
                  <Button href={CONTACT.github} target="_blank" variant="secondary" className="px-3.5 sm:px-4 xl:px-5 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm xl:text-base !text-slate-200 hover:!text-white flex-1 sm:flex-none justify-center">
                    <Github size={16} className="mr-1.5" /> GitHub
                  </Button>
                  
                  <Button href={CONTACT.linkedin} target="_blank" variant="secondary" className="px-3.5 sm:px-4 xl:px-5 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm xl:text-base !text-slate-200 hover:!text-white flex-1 sm:flex-none justify-center">
                    <Linkedin size={16} className="mr-1.5" /> LinkedIn
                  </Button>
                  
                  <Button href={CONTACT.codolio} target="_blank" variant="secondary" className="px-3.5 sm:px-4 xl:px-5 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm xl:text-base !text-slate-200 hover:!text-white flex-1 sm:flex-none justify-center">
                    <Code2 size={16} className="mr-1.5" /> Codolio
                  </Button>

                  <Button href={`mailto:${CONTACT.email}`} variant="secondary" className="px-3.5 sm:px-4 xl:px-5 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm xl:text-base !text-slate-200 hover:!text-white flex-1 sm:flex-none justify-center">
                    <Mail size={16} className="mr-1.5" /> Email
                  </Button>
                </div>
              </div>
              
            </div>

            {/* RIGHT SIDE: PHOTO */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center self-center w-2/3 sm:w-1/2 lg:w-full pt-8 lg:pt-6"
            >
              <HeroPhoto />
            </motion.div>
          </div>

          {/* ACHIEVEMENT CARDS */}
          {/* REDUCED: Margin top reduced from mt-10 to mt-6/8 to bring them up further */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 mt-6 lg:mt-8 relative z-20">
            {/* Card 1: Virtusa */}
            <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/[0.05] p-5 sm:p-6 xl:p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="rounded-xl bg-white p-1 border border-white/10 flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 shrink-0">
                    <Image src="/images/virtusa-logo.svg" alt="Virtusa" width={60} height={60} className="object-contain w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 tracking-tight">Agentic AI Intern</h3>
                    <p className="text-xs sm:text-sm font-semibold text-cyan-400">Virtusa</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-justify lg:text-left">Engineered stateful multi-agent AI pipelines to automate enterprise compliance and policy enforcement workflows.</p>
              </div>
            </div>

            {/* Card 2: TCS CodeVita */}
            <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/[0.05] p-5 sm:p-6 xl:p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="rounded-xl bg-white p-1 border border-white/10 flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 shrink-0">
                    <Image src="/images/tcs-logo.svg" alt="TCS" width={60} height={60} className="object-contain w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 tracking-tight">Global Rank 71</h3>
                    <p className="text-xs sm:text-sm font-semibold text-cyan-400">TCS CodeVita Season 13</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-justify lg:text-left">Secured the top 0.05% position globally out of 146,922 participants in the world&apos;s largest programming competition.</p>
              </div>
            </div>

            {/* Card 3: IBM Hackathon */}
            <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/[0.05] p-5 sm:p-6 xl:p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="rounded-xl bg-white p-1 border border-white/10 flex items-center justify-center h-14 w-14 sm:h-14 sm:w-14 shrink-0">
                    <Image src="/images/ibm-logo.svg" alt="IBM" width={60} height={60} className="object-contain w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 tracking-tight">Finalist</h3>
                    <p className="text-xs sm:text-sm font-semibold text-cyan-400">IBM Expert Labs Hackathon</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-justify lg:text-left">Shortlisted among the top tier nationwide for developing an AI-powered enterprise cloud governance solution.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}