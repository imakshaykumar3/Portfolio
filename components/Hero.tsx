"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Code2 } from "lucide-react";

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
      className="relative min-h-screen overflow-hidden flex items-center pt-28 pb-16 lg:pb-24"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <AgentGraphBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,.10),transparent_35%)]" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base/40 to-base pointer-events-none" />

      {/* MAIN CONTENT WRAPPER */}
      <div className="section-container relative z-10 min-h-screen flex flex-col justify-center">
        <div className="w-full">
          {/* TOP SECTION: NAME + PHOTO */}
          <div className="grid lg:grid-cols-[1.35fr_0.9fr] gap-12 items-center">
            {/* LEFT SIDE */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="eyebrow mb-5"
              >
                BUILDING PRODUCTION AI SYSTEMS
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-display font-bold leading-none tracking-tight text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap"
              >
                {PROFILE.name}
              </motion.h1>

              <div className="mt-6 h-12">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={roleIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="gradient-text font-display text-3xl lg:text-4xl font-semibold tracking-tight"
                  >
                    {PROFILE.roles[roleIndex]}
                  </motion.h2>
                </AnimatePresence>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-secondary text-justify"
              >
                I build production-grade{" "}
                <span className="text-accent-cyan font-semibold">
                  multi-agent AI systems
                </span>
                , scalable FastAPI backends, enterprise RAG pipelines, and intelligent
                applications that solve real engineering problems.
              </motion.p>
            </div>

            {/* RIGHT SIDE: PHOTO */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="
                hidden
                lg:flex
                justify-center
                self-center
                pt-8
              "
            >
              <HeroPhoto />
            </motion.div>
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-10 md:mt-12 flex flex-wrap gap-2.5 xl:gap-3 items-center">
            <Button
              href="#projects"
              className="group px-5 xl:px-6 py-3.5 rounded-2xl text-sm xl:text-base shadow-xl hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
            >
              Explore Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href={CONTACT.github} target="_blank" variant="secondary" className="px-4 xl:px-5 py-3.5 rounded-2xl text-sm xl:text-base !text-slate-200 hover:!text-white">
              <Github size={16} /> GitHub
            </Button>
            <Button href={CONTACT.linkedin} target="_blank" variant="secondary" className="px-4 xl:px-5 py-3.5 rounded-2xl text-sm xl:text-base !text-slate-200 hover:!text-white">
              <Linkedin size={16} /> LinkedIn
            </Button>
            <Button href={CONTACT.codolio} target="_blank" variant="secondary" className="px-4 xl:px-5 py-3.5 rounded-2xl text-sm xl:text-base !text-slate-200 hover:!text-white">
              <Code2 size={16} /> Codolio
            </Button>
          </div>

          {/* ACHIEVEMENT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-6 mt-10 md:mt-12 relative z-20">
            {/* Card 1: Virtusa */}
            <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/[0.05] p-6 xl:p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-white p-1 border border-white/10 flex items-center justify-center h-16 w-16 shrink-0">
                    <Image src="/images/virtusa-logo.svg" alt="Virtusa" width={60} height={60} className="object-contain w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 tracking-tight">Agentic AI Intern</h3>
                    <p className="text-sm font-semibold text-cyan-400">Virtusa</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed text-justify">Engineered stateful multi-agent AI pipelines to automate enterprise compliance and policy enforcement workflows.</p>
              </div>
            </div>

            {/* Card 2: TCS CodeVita */}
            <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/[0.05] p-6 xl:p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-white p-1 border border-white/10 flex items-center justify-center h-16 w-16 shrink-0">
                    <Image src="/images/tcs-logo.svg" alt="TCS" width={60} height={60} className="object-contain w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 tracking-tight">Global Rank 71</h3>
                    <p className="text-sm font-semibold text-blue-400">TCS CodeVita Season 13</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed text-justify">Secured the top 0.05% position globally out of 146,922 participants in the world's largest programming competition.</p>
              </div>
            </div>

            {/* Card 3: IBM Hackathon */}
            <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/[0.05] p-6 xl:p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-white p-1 border border-white/10 flex items-center justify-center h-14 w-14 shrink-0">
                    <Image src="/images/ibm-logo.svg" alt="IBM" width={60} height={60} className="object-contain w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 tracking-tight">Finalist</h3>
                    <p className="text-sm font-semibold text-purple-400">IBM Expert Labs Hackathon</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed text-justify">Shortlisted among the top tier nationwide for developing an AI-powered enterprise cloud governance solution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}