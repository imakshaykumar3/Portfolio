"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

import FadeIn from "@/components/FadeIn";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submission logic here
  };

  return (
    <section 
      id="contact" 
      className="section-padding border-t border-border bg-transparent" 
    >
      <div className="section-container">
        <FadeIn>
          <h2 className="mb-4 font-display text-4xl font-bold uppercase tracking-wider text-white md:text-5xl">
            Let&apos;s <span className="text-purple-400">Connect</span>
          </h2>
          <p className="mb-14 font-display text-xl text-gray-400 md:text-2xl">
            Great projects start with a conversation.
          </p>

          {/* BOTTOM SECTION: Grid (Left Text / Right Form) */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-24 lg:items-center mt-8">
            
            {/* Left Column */}
            <div className="flex flex-col text-white min-w-0">
              <h2 className="font-display tracking-tight leading-[1.1]">
                <span className="block text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white">
                  Let&apos;s build
                </span>
                <span className="block mt-2 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white">
                  something
                </span>
                <span className="block mt-2 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent pb-2">
                  exceptional.
                </span>
              </h2>
              
              <p className="mt-6 max-w-sm text-sm md:text-base leading-relaxed text-gray-400">
                I&apos;m currently looking for full-time AI/ML & Backend
                Engineering opportunities. My inbox is always open.
              </p>
            </div>

            {/* Right Column: Form (Removed the classes pushing it to the far right!) */}
            <div className="w-full max-w-md flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                
                {/* Name Input */}
                <div className="group relative">
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="peer w-full border-b border-white/20 bg-transparent py-2.5 text-sm text-white transition-colors focus:border-cyan-400 focus:outline-none placeholder-transparent"
                    placeholder="Name"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 -top-3.5 text-xs text-white/50 transition-all cursor-text peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-cyan-400"
                  >
                    Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="group relative">
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="peer w-full border-b border-white/20 bg-transparent py-2.5 text-sm text-white transition-colors focus:border-cyan-400 focus:outline-none placeholder-transparent"
                    placeholder="Email"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 -top-3.5 text-xs text-white/50 transition-all cursor-text peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-cyan-400"
                  >
                    Email
                  </label>
                </div>

                {/* Message Input */}
                <div className="group relative mt-1">
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[100px] w-full resize-none border-b border-white/20 bg-transparent py-2.5 text-sm text-white transition-colors peer focus:border-cyan-400 focus:outline-none placeholder-transparent"
                    placeholder="Message"
                  />
                  <label 
                    htmlFor="message" 
                    className="absolute left-0 -top-3.5 text-xs text-white/50 transition-all cursor-text peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-cyan-400"
                  >
                    Message
                  </label>
                </div>

                {/* Submit Button */}
                <div className="mt-3">
                  <button
                    type="submit"
                    className="group inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0B1120]"
                  >
                    Submit
                    <Send size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </button>
                </div>

              </form>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}