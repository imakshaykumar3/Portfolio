"use client";

import { useState } from "react";
import { Github, Linkedin, Copy, Check, MapPin, Code2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/ui/Button";
import { CONTACT, PROFILE } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — fail silently, email is still visible as text
    }
  }

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="section-container">
        <FadeIn>
          <div className="card-surface relative overflow-hidden p-10 text-center md:p-16">
            <div className="pointer-events-none absolute inset-0 bg-gradient-radial-fade" />
            <div className="relative">
              <p className="eyebrow mb-4">Contact</p>
              <h2 className="mx-auto mb-4 max-w-xl font-display text-3xl font-semibold md:text-4xl">
                Let&apos;s talk about what you&apos;re building.
              </h2>
              <p className="mx-auto mb-2 flex items-center justify-center gap-1.5 text-sm text-secondary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
                </span>
                {PROFILE.availability}
              </p>
              <p className="mb-8 flex items-center justify-center gap-1.5 text-sm text-secondary">
                <MapPin size={14} /> {PROFILE.location}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={copyEmail}
                  className="glass glass-hover flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  {copied ? "Copied" : CONTACT.email}
                </button>
                <Button href={CONTACT.linkedin} target="_blank" variant="secondary">
                  <Linkedin size={15} /> LinkedIn
                </Button>
                <Button href={CONTACT.github} target="_blank" variant="secondary">
                  <Github size={15} /> GitHub
                </Button>
                <Button href={CONTACT.codolio} target="_blank" variant="secondary">
                  <Code2 size={15} /> Codolio
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
