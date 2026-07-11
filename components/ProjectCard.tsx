import Image from "next/image";
import { 
  Github, 
  ArrowUpRight, 
  Network, 
  Activity, 
  Database, 
  AudioLines, 
  Key, 
  Bot, 
  Globe, 
  Lock, 
  Type, 
  Cpu, 
  Terminal, 
  Binary, 
  ShieldCheck 
} from "lucide-react";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

// Helper function to render vibrant, full-color brand logos
const renderTechIcon = (tech: string) => {
  const normalizedTech = tech.toUpperCase();

  // 1. True multi-color icons from Devicon
  if (normalizedTech === "PYTHON") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="h-4 w-4" />;
  }
  if (normalizedTech === "FASTAPI") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="h-4 w-4" />;
  }
  if (normalizedTech === "SQLITE") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" alt="SQLite" className="h-4 w-4" />;
  }
  if (normalizedTech === "POSTGRESQL") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="h-4 w-4" />;
  }
  if (normalizedTech === "JAVA") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="h-4 w-4" />;
  }
  if (normalizedTech === "SPRING BOOT") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" className="h-4 w-4" />;
  }
  if (normalizedTech === "REACT") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="h-4 w-4" />;
  }
  if (normalizedTech === "TAILWIND CSS") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="h-4 w-4" />;
  }
  if (normalizedTech === "MYSQL") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="h-4 w-4" />;
  }
  if (normalizedTech === "MAVEN") {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" alt="Maven" className="h-4 w-4" />;
  }

  // 2. Colored icons from SimpleIcons (using official brand hex codes)
  const simpleIcons: Record<string, string> = {
    "LANGCHAIN": "https://cdn.simpleicons.org/langchain/white", 
    "GEMINI": "https://cdn.simpleicons.org/googlegemini/8E75B2",  
    "PYDANTIC": "https://cdn.simpleicons.org/pydantic/E92063",    
    "GPT MODELS": "https://cdn.simpleicons.org/openai/white",
  };

  if (simpleIcons[normalizedTech]) {
    return (
      <img 
        src={simpleIcons[normalizedTech]} 
        alt={`${tech} logo`} 
        className="h-3.5 w-3.5 object-contain" 
      />
    );
  }
  
  // 3. Fallback generic icons with vibrant Tailwind text colors (Lucide React)
  
  // AI / Data
  if (normalizedTech === "LANGGRAPH") return <Network className="h-3.5 w-3.5 text-indigo-400" />;
  if (normalizedTech === "SSE") return <Activity className="h-3.5 w-3.5 text-emerald-400" />;
  if (normalizedTech === "CHROMADB") return <Database className="h-3.5 w-3.5 text-rose-400" />;
  if (normalizedTech === "FASTER-WHISPER") return <AudioLines className="h-3.5 w-3.5 text-cyan-400" />;
  if (normalizedTech === "JWT") return <Key className="h-3.5 w-3.5 text-amber-400" />;
  
  // Java / Spring Utilities & Concepts
  if (normalizedTech === "REST APIS") return <Globe className="h-3.5 w-3.5 text-blue-400" />;
  if (normalizedTech === "SHA-256") return <Lock className="h-3.5 w-3.5 text-slate-400" />;
  if (normalizedTech === "LEVENSHTEIN") return <Type className="h-3.5 w-3.5 text-pink-400" />;
  if (normalizedTech === "LOMBOK") return <Cpu className="h-3.5 w-3.5 text-red-500" />;
  if (normalizedTech === "SLF4J") return <Terminal className="h-3.5 w-3.5 text-lime-400" />;
  if (normalizedTech === "APACHE COMMONS CODEC") return <Binary className="h-3.5 w-3.5 text-orange-400" />;
  if (normalizedTech === "SPRING SECURITY") return <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />;
  
  // Default fallback if no match is found
  return <Bot className="h-3.5 w-3.5 text-gray-400" />;
};

export default function ProjectCard({
  project,
  reversed = false,
}: {
  project: any; 
  reversed?: boolean;
}) {
  return (
    <div className="w-full">
      <div
        className={`grid gap-8 items-center lg:grid-cols-12 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Left Side: Gradient Box */}
        <div className="flex h-full w-full flex-col justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#3c387d] via-[#433b8a] to-[#27397c] p-3 sm:p-7 lg:col-span-7">

          {project.image ? (
            <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#1e1e1e] shadow-2xl">
              <div className="flex items-center gap-1.5 bg-[#2d2d2d] px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <Image
                src={project.image}
                alt={`${project.name} interface`}
                width={1920}
                height={1080}
                quality={100}
                className="block h-auto w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-base-elevated/40 p-4">
              <ArchitectureDiagram type={project.diagram} />
            </div>
          )}
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col justify-center py-4 lg:col-span-5 lg:pl-6">
          
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center border-l-[3px] border-[#4b6bfb] pl-3">
              <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                {project.name}
              </h3>
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/20 bg-transparent px-3 py-1.5 text-xs font-medium text-white transition-colors duration-200 hover:bg-white/10"
              >
                Check out <ArrowUpRight size={14} />
              </a>
            )}
          </div>

          {/* Description with text-justify */}
          <p className="mb-6 text-sm leading-relaxed text-gray-300 text-justify">
            {project.description}
          </p>

          <ul className="mb-8 space-y-4">
            {project.bullets.map((b: string, idx: number) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm leading-relaxed text-gray-300"
              >
                {/* shrink-0 to prevent the + from squishing */}
                <span className="mt-0.5 shrink-0 text-lg font-medium leading-none text-[#4b6bfb]">
                  +
                </span>
                {/* text-justify for bullet text */}
                <span className="text-justify">{b}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack Pills with Logos */}
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t: string) => (
              <div
                key={t}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0f0f0f] px-3.5 py-1.5 text-xs font-medium tracking-wide text-gray-200 shadow-sm transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-[#1a1a1a]"
              >
                {renderTechIcon(t)}
                <span>{t}</span>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}