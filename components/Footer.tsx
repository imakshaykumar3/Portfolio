// components/Footer.tsx
import { PROFILE, CONTACT } from "@/lib/data";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function Footer() {
  const iconClass =
    "flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900 shadow-[0_4px_14px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-white hover:shadow-[0_6px_20px_rgba(34,211,238,0.4)]";

  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col items-center justify-between gap-6 text-sm text-white/70 md:flex-row md:gap-3">
        
        {/* Copyright */}
        <p className="font-medium tracking-wide">
          © {new Date().getFullYear()} {PROFILE.name}.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${CONTACT.email}`}
            className={iconClass}
            aria-label="Email"
          >
            {/* Removed fill="currentColor" and added a thicker strokeWidth */}
            <Mail size={20} strokeWidth={2.5} />
          </a>

          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className={iconClass}
            aria-label="GitHub"
          >
            <Github size={20} fill="currentColor" />
          </a>
          
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={iconClass}
            aria-label="LinkedIn"
          >
            <Linkedin size={20} fill="currentColor" />
          </a>

          <a
            href={CONTACT.codolio}
            target="_blank"
            rel="noopener noreferrer"
            className={iconClass}
            aria-label="Codolio"
          >
            <Code2 size={20} strokeWidth={2.5} />
          </a>
        </div>

      </div>
    </footer>
  );
}