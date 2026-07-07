"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroPhoto() {
  return (
    // Removed the -mt-10 class
    <div className="relative flex items-center justify-center w-full max-w-[380px] mx-auto">
      
      {/* Background Glow */}
      <div className="absolute h-[120%] w-[120%] rounded-full bg-cyan-500/10 blur-[100px]" />

      {/* Animated Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[115%] w-[115%] rounded-full border border-cyan-500/20"
      />

      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full aspect-square"
      >
        <div className="h-full w-full rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 p-[4px]">
          <div className="h-full w-full rounded-full border-[6px] border-[#050816] overflow-hidden relative bg-base-elevated">
            <Image
              src="/images/akshay.png"
              alt="Akshay Kumar"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              priority
              className="rounded-full object-cover object-center"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}