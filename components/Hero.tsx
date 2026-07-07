"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE, CONTACT } from "@/lib/data";
import Button from "@/components/ui/Button";
import AgentGraphBackground from "@/components/AgentGraphBackground";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % PROFILE.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <AgentGraphBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-base/40 to-base" />

      <div className="section-container relative z-10">
        <p className="eyebrow mb-6">Building agentic AI in production</p>

        <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          {PROFILE.name}
        </h1>

        <div className="mt-4 h-10 md:h-12">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="gradient-text font-display text-2xl font-medium md:text-3xl"
            >
              {PROFILE.roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <p className="mt-6 max-w-xl text-lg text-secondary md:text-xl">
          {PROFILE.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="#projects">
            See the systems I&apos;ve built <ArrowRight size={16} />
          </Button>
          <Button href={CONTACT.github} target="_blank" variant="secondary">
            <Github size={16} /> GitHub
          </Button>
          <Button href={CONTACT.linkedin} target="_blank" variant="secondary">
            <Linkedin size={16} /> LinkedIn
          </Button>
          <Button href={`mailto:${CONTACT.email}`} variant="ghost">
            <Mail size={16} /> {CONTACT.email}
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8">
          <div>
            <p className="stat-mono text-2xl font-semibold text-primary">71</p>
            <p className="text-xs text-secondary">
              global rank, TCS CodeVita
            </p>
          </div>
          <div>
            <p className="stat-mono text-2xl font-semibold text-primary">
              146,922
            </p>
            <p className="text-xs text-secondary">participants competed against</p>
          </div>
          <div>
            <p className="stat-mono text-2xl font-semibold text-primary">2</p>
            <p className="text-xs text-secondary">
              production internships shipped
            </p>
          </div>
          <div>
            <p className="stat-mono text-2xl font-semibold text-primary">
              13
            </p>
            <p className="text-xs text-secondary">
              node StateGraph in SARTHI.AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
