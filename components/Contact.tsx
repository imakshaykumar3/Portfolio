"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

import FadeIn from "@/components/FadeIn";
import AgentGraphBackground from "@/components/AgentGraphBackground";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

const [loading, setLoading] = useState(false);

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully! 🚀", {
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      toast.error("Failed to send message", {
        description: "Please try again after a few moments.",
      });
    }
  } catch (error) {
    console.error(error);

    toast.error("Something went wrong", {
      description: "Please check your connection and try again.",
    });
  }

  setLoading(false);
};
  return (
    <section 
      id="contact" 
      /* Added relative and overflow-hidden to contain the absolute background */
      className="relative overflow-hidden pt-24 pb-8 border-t border-border bg-transparent" 
    >
      {/* BACKGROUND ANIMATION LAYER */}
      <div className="absolute inset-0 pointer-events-none">
        <AgentGraphBackground />
        {/* Adjusted glows for variety: Indigo top-left, Cyan bottom-right */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,.10),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,.12),transparent_35%)]" />
        
        {/* Optional: Vignette blend to smoothly fade into sections above/below */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/80 via-transparent to-[#0B1120]/80" />
      </div>

      {/* MAIN CONTENT WRAPPER - Added relative and z-10 */}
      <div className="section-container relative z-10">
        <FadeIn>
          <h2 className="mb-4 font-display text-4xl font-bold uppercase tracking-wider text-white md:text-5xl">
            Let&apos;s <span className="text-purple-400">Connect</span>
          </h2>
          <p className="mb-9 font-display text-xl text-gray-400 md:text-2xl">
            Great projects start with a conversation.
          </p>

          {/* BOTTOM SECTION: Grid (Left Text / Right Form) */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-24 lg:items-center mt-2">
            
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
                  exceptional !
                </span>
              </h2>
              
              <p className="mt-6 max-w-sm text-sm md:text-base leading-relaxed text-gray-400">
                I&apos;m currently looking for full-time AI/ML & Backend
                Engineering opportunities. My inbox is always open.
              </p>
            </div>

            {/* Right Column: Form */}
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
  disabled={loading}
  className="group inline-flex w-fit items-center justify-center gap-2 rounded-xl
             bg-gradient-to-r from-cyan-500 to-blue-500
             px-8 py-3.5 text-sm font-semibold text-white
             transition-all duration-300
             hover:opacity-90
             hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
             disabled:cursor-not-allowed
             disabled:opacity-70"
>
  {loading ? (
    <>
      <svg
        className="h-4 w-4 animate-spin"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373
          0 0 5.373 0 12h4z"
        />
      </svg>

      Sending...
    </>
  ) : (
    <>
      Submit
      <Send
        size={16}
        className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </>
  )}
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