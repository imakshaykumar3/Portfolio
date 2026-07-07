import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#050816",
        "base-elevated": "#0A0F24",
        card: "#111827",
        "card-hover": "#151E32",
        border: "rgba(255,255,255,0.08)",
        primary: "#F5F7FA",
        secondary: "#94A3B8",
        muted: "#64748B",
        accent: {
          blue: "#3B82F6",
          purple: "#8B5CF6",
          cyan: "#22D3EE",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-signal":
          "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #22D3EE 100%)",
        "gradient-radial-fade":
          "radial-gradient(circle at center, rgba(59,130,246,0.15) 0%, rgba(5,8,22,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.25)",
        "glow-purple": "0 0 40px rgba(139,92,246,0.25)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
};

export default config;
