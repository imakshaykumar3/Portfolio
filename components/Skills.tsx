// components/Skills.tsx

import FadeIn from "@/components/FadeIn";

import {
  SiPython,
  SiPostgresql,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithub,
  SiHuggingface,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiPytorch,
  SiMongodb,
} from "react-icons/si";

import {
  FaDatabase,
  FaJava,
  FaLink,
  FaProjectDiagram,
  FaTools,
  FaCogs,
  FaAws,
  FaRobot,
  FaBrain,
  FaSearch,
  FaServer,
  FaCodeBranch,
  FaMicrochip,
  FaNetworkWired,
  FaCode,
  FaKey,
  FaExchangeAlt,
  FaLayerGroup,
  FaBolt,
  FaCube,
} from "react-icons/fa";

const SKILLS = [
  {
    category: "AI & Generative AI",
    skills: [
      { name: "Generative AI", icon: FaBrain, color: "#A855F7" },
      { name: "LLMs", icon: FaRobot, color: "#22C55E" },
      { name: "AI Agents", icon: FaRobot, color: "#3B82F6" },
      { name: "Agentic AI", icon: FaMicrochip, color: "#EC4899" },
      { name: "Prompt Engineering", icon: FaCode, color: "#F97316" },
      { name: "RAG", icon: FaSearch, color: "#06B6D4" },
      { name: "Embeddings", icon: FaNetworkWired, color: "#8B5CF6" },
      { name: "Vector Databases", icon: FaDatabase, color: "#10B981" },
    ],
  },

  {
    category: "LLM Frameworks",
    skills: [
      { name: "LangChain", icon: FaLink, color: "#FFFFFF" },
      { name: "LangGraph", icon: FaProjectDiagram, color: "#FFFFFF" },
      { name: "LangSmith", icon: FaTools, color: "#FFFFFF" },
      { name: "MCP", icon: FaCogs, color: "#FFFFFF" },
      { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
    ],
  },

  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#F89820" },
      { name: "SQL", icon: FaDatabase, color: "#4479A1" },
    ],
  },

  {
  category: "Backend Development",
  skills: [
    {
      name: "FastAPI",
      icon: SiFastapi,
      color: "#009688",
    },
    {
      name: "REST APIs",
      icon: FaServer,
      color: "#3B82F6",
    },
    {
      name: "Microservices",
      icon: FaProjectDiagram,
      color: "#A855F7",
    },
    {
      name: "JWT Authentication",
      icon: FaKey,
      color: "#F59E0B",
    },
    {
      name: "WebSockets",
      icon: FaExchangeAlt,
      color: "#06B6D4",
    },
    {
      name: "Async Programming",
      icon: FaBolt,
      color: "#10B981",
    },
    {
      name: "Pydantic",
      icon: FaCube,
      color: "#EC4899",
    },
  ],
},

  {
    category: "Machine Learning",
    skills: [
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    ],
  },

  {
  category: "Databases & Vector Stores",
  skills: [
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "#4169E1",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
    },
    {
      name: "ChromaDB",
      icon: FaLayerGroup,
      color: "#8B5CF6",
    },
    {
      name: "Pinecone",
      icon: FaNetworkWired,
      color: "#14B8A6",
    },
    {
      name: "FAISS",
      icon: FaServer,
      color: "#F97316",
    },
  ],
},

  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Git Workflow", icon: FaCodeBranch, color: "#F97316" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding border-t border-border relative z-10"
    >
      <div className="section-container">

        <FadeIn>
          <h2 className="mb-12 font-display text-5xl md:text-6xl font-black uppercase tracking-wider">
            Technical{" "}
            <span className="text-[#A855F7]">
              Skills
            </span>
          </h2>
        </FadeIn>
        {SKILLS.map((group, groupIndex) => (
        <FadeIn key={group.category} delay={groupIndex * 0.1}>
          <div className="mb-14">

            <h3 className="mb-6 text-2xl font-bold text-purple-400 border-l-4 border-purple-500 pl-4">
              {group.category}
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {group.skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="group flex h-40 flex-col items-center justify-center rounded-2xl border border-purple-500/20 bg-[#0b0b0b]/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
                  >
                    <Icon
                      size={48}
                      style={{ color: skill.color }}
                      className="mb-4 transition-transform duration-300 group-hover:scale-110"
                    />

                    <h4 className="text-center text-sm font-semibold text-gray-200 px-2">
                      {skill.name}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      ))}
      </div>
    </section>
  );
}