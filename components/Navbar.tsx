// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  /* ---------------- Scroll Progress ---------------- */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  /* ---------------- Navbar Background ---------------- */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- Active Section (FIXED) ---------------- */
  useEffect(() => {
    const sections = ["top", ...NAV_LINKS.map((item) => item.href.replace("#", ""))];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // As soon as a section crosses into the top 20-60% of the screen, it becomes active
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Removed the strict threshold that was breaking on tall sections!
        rootMargin: "-20% 0px -40% 0px", 
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-cyan-400 to-blue-500"
      />

      {/* Edge-to-Edge Navbar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/5 bg-[#030712]/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent pt-4"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 transition-all duration-500 md:px-8">
          
          {/* Logo */}
          <Link
            href="#top"
            className="flex items-center transition-transform hover:scale-105 py-3"
          >
            <Image 
              src="/images/logo2.png" 
              alt="AK Logo" 
              width={65} 
              height={65} 
              className="object-contain"
              priority 
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((item) => {
              // Normalize IDs to avoid case-sensitivity bugs (e.g. #Experience vs #experience)
              const id = item.href.replace("#", "").toLowerCase();
              const active = activeSection.toLowerCase() === id;
              
              return (
                // Moved relative positioning here for the underline
                <li key={item.href} className="relative py-2">
                  <a
                    href={item.href}
                    className={`block py-1 text-[14px] transition-colors duration-300 ${
                      active
                        ? "font-medium text-white"
                        : "font-normal text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                  
                  {/* Underline Indicator - Positioned relative to the <li> */}
                  {active && (
                    <motion.div
                      layoutId="active-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-cyan-400"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Gradient Resume Button */}
          <div className="hidden lg:block">
            <Button
              href="/document/Akshay Kumar.pdf"
              download
              className="group flex h-9 items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 text-[13px] font-medium text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
            >
              <Download
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="text-slate-300 transition hover:text-white lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ================= Mobile Menu ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 border-b border-white/10 bg-[#030712]/95 px-6 pb-8 pt-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-6">
              {NAV_LINKS.map((item) => {
                const id = item.href.replace("#", "").toLowerCase();
                const active = activeSection.toLowerCase() === id;
                
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block text-[15px] transition-colors ${
                        active ? "font-medium text-cyan-400" : "font-normal text-slate-400"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              
              <li className="pt-2">
                <Button
                  href="/document/Akshay Kumar.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 py-3 text-[14px] font-medium text-white shadow-lg shadow-cyan-500/20 transition-all hover:opacity-90"
                >
                  <Download size={16} />
                  Download Resume
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}