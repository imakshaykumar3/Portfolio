// lib/data.ts

export const PROFILE = {
  name: "AKSHAY KUMAR",
  roles: [
    "Software Developer",
    "AI Engineer",
    "Backend Engineer",
    "Generative AI Engineer",
    "LLM Engineer",
    "Agentic AI Engineer",
  ],
  tagline:
    "I build AI systems that move beyond demos architecting production-ready multi-agent workflows, scalable backend services, and retrieval pipelines that solve real engineering problems.",
  summary:
    "AI Platform & Backend Engineer with production internship experience at Virtusa and TATA Steel, specializing in Enterprise AI, LLM applications, RAG systems, agentic workflows, and scalable backend development with Python, FastAPI, LangChain, and LangGraph. Ranked 71st globally in TCS CodeVita among 146,922 participants. Grounded in DSA, OOP, and DBMS fundamentals.",
  location: "Bengaluru, India",
  availability: "Open to full-time AI/ML & Backend Engineering roles",
};

export const CONTACT = {
  email: "imakshaykumarx3@gmail.com",
  github: "https://github.com/imakshaykumar3",
  githubHandle: "github.com/imakshaykumar3",
  linkedin: "https://www.linkedin.com/in/imakshaykumar3",
  linkedinHandle: "linkedin.com/in/imakshaykumar3",
  codolio: "https://codolio.com/profile/akshaykumar",
  codolioHandle: "codolio.com/profile/akshaykumar",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" }, 
  { label: "Let's Connect", href: "#contact" },
];

export const EXPERIENCE = [
  {
    company: "Virtusa",
    role: "Agentic AI Engineer Intern",
    location: "Hyderabad, Telangana",
    period: "Mar 2026 – May 2026",
    logo: "/images/virtusa-logo.svg", 
    bullets: [
      "Developed stateful multi-agent AI pipelines using LangGraph and LangChain to automate compliance monitoring and policy enforcement workflows, reducing manual review effort by 8+ hours per week.",
      "Architected the generative AI reasoning layer of an agentic backend system, processing 500+ unstructured policy documents and reducing policy breach response time by 35% through risk-classified remediation workflows.",
      "Built scalable FastAPI backend services for AI workflows with modular architecture, REST APIs, and Git-based development practices, improving maintainability and deployment readiness.",
    ],
    tech: ["LangGraph", "LangChain", "FastAPI", "Python", "REST APIs", "Git"],
  },
  {
    company: "TATA Steel UISL",
    role: "Artificial Intelligence Intern",
    location: "Jamshedpur, Jharkhand",
    period: "Jun 2025 – Jul 2025",
    logo: "/images/tata-steel.svg", 
    bullets: [
      "Built and deployed a production-ready Automatic Vehicle Recognition System (AVRS) on AWS within Tata Steel's production network using YOLOv8 and PaddleOCR, enabling real-time license plate recognition with 90%+ accuracy for automated gate security access control.",
      "Integrated the deployed inference pipeline with PostgreSQL to automate Employee vs. Visitor classification, reducing manual gate verification time by 40% and eliminating manual log entries across daily operations.",
    ],
    tech: ["YOLOv8", "PaddleOCR", "AWS", "PostgreSQL"],
  },
  {
    company: "Surusha Technology Pvt. Ltd.",
    role: "Software Engineer Intern",
    location: "Remote",
    period: "Dec 2023 – Jun 2024",
    logo: "/images/surusha.png", 
    bullets: [
      "Architected a responsive, cross-platform frontend interface for an EdTech application, optimizing layout structures to streamline user navigation and engagement.",
      "Engineered automated web scraping pipelines to extract high-volume e-commerce data, accelerating inventory synchronization and powering downstream business analytics."
    ],
    tech: ["Frontend Development", "Web Scraping", "UI/UX Design", "Data Extraction"],
  }
];

export const PROJECTS = [
  {
    slug: "sarthi-ai",
    name: "SARTHI.AI",
    subtitle: "Autonomous Agentic Travel Orchestration Intelligence",
    description:
      "A stateful multi-agent travel planning system where a 13-node LangGraph StateGraph routes between specialist agents, checkpoints memory across server restarts, and streams live recommendations to the client as they're generated.",
    tech: [
      "Python",
      "LangGraph",
      "LangChain",
      "FastAPI",
      "GPT-4",
      "Gemini",
      "SQLite",
      "SSE",
      "Pydantic",
    ],
    bullets: [
      "Orchestrated a stateful multi-agent travel system in LangGraph with a 13-node StateGraph and conditional routing, integrating AsyncSqliteSaver for checkpointing that persists memory across server reboots.",
      "Engineered a scalable FastAPI microservice backend using Server-Sent Events (SSE), integrating Amadeus, Tavily, and Unsplash APIs with multi-LLM orchestration, structured outputs, and modular service design, enforcing structured outputs via Pydantic schemas and delivering sub-700ms response latency for live travel recommendations.",
    ],
    metrics: [
      { value: "13", label: "StateGraph nodes" },
      { value: "<700ms", label: "recommendation latency" },
      { value: "2", label: "LLMs orchestrated" },
    ],
    diagram: "sarthi" as const,
    github: "https://github.com/imakshaykumar3",
  },
  {
    slug: "contextgpt",
    name: "ContextGPT",
    subtitle: "AI-Powered Meeting Intelligence Platform",
    description:
      "A RAG-grounded meeting intelligence platform that transcribes audio, video, and YouTube sources, indexes them into a semantic retrieval layer, and answers questions about a meeting through a JWT-secured API.",
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "GPT models",
      "Faster-Whisper",
      "PostgreSQL",
      "JWT",
    ],
    bullets: [
      "Built a RAG-based meeting intelligence platform using Faster-Whisper for multi-modal transcription (audio, video, YouTube), reducing meeting note preparation time by 80% across 3 input modalities with a FastAPI pipeline.",
      "Implemented a semantic retrieval layer using BAAI/bge-small-en-v1.5 embeddings in ChromaDB with LangChain-powered query rewriting and RAG-grounded answer generation, exposing JWT-secured REST APIs backed by PostgreSQL for session persistence.",
    ],
    metrics: [
      { value: "80%", label: "less note-prep time" },
      { value: "3", label: "input modalities" },
      { value: "JWT", label: "secured API layer" },
    ],
    diagram: "contextgpt" as const,
    github: "https://github.com/imakshaykumar3",
  },
];

export const SKILLS = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "SQL"],
  },
  {
    category: "AI / ML",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "Transformers",
      "Hugging Face",
    ],
  },
  {
    category: "LLMs & Agents",
    items: [
      "RAG",
      "Agentic AI",
      "AI Agents",
      "Embeddings",
      "LLM Evaluation",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "Orchestration",
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      "FastAPI",
      "REST APIs",
      "Backend Development",
      "Microservices",
      "API Design",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "SQLite", "ChromaDB", "Pinecone"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Git", "GitHub Actions"],
  },
  {
    category: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Computer Networks",
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    tag: "Competitive Programming",
    title: "TCS CodeVita Season 13 — Global Rank 71",
    logo: "/images/tcs-logo.svg", 
    description:
      "71st globally, top 0.05% among 146,922 participants, in the Guinness World Record-winning world's largest programming competition.",
  },
  {
    tag: "Hackathon",
    title: "IBM Expert Labs National Hackathon — Finalist",
    logo: "/images/ibm-logo.svg", 
    description:
      "Shortlisted among the top teams from 200+ teams nationwide for developing an AI-powered cloud governance solution.",
  },
  {
    title: "Smart India Hackathon 2024 — Internal Winner",
    tag: "HACKATHON",
    description:
      "Emerged as the Winner for Team MahaDevs in the Software category of the Internal Hackathon for Smart India Hackathon 2024 at Amity University Jharkhand.",
    logo: "/images/sih-logo.jpg", 
  }
];

export const EDUCATION = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    school: "Amity University",
    location: "Ranchi, Jharkhand",
    period: "Aug 2022 – Jun 2026",
    score: "CGPA: 8.89 / 10.00",
    logo: "/images/amity.png",
    courses: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Computer Networks"], 
  },
  {
    degree: "Higher Secondary (Science Stream)",
    school: "St. John's Inter College",
    location: "Ranchi, Jharkhand",
    period: "Jul 2020 – Jun 2022",
    score: "Percentage: 92.40% / 100.00%",
    logo: "/images/st-johns.png", 
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
  {
    degree: "Matriculation",
    school: "St. John's High School",
    location: "Ranchi, Jharkhand",
    period: "Jul 2020",
    score: "Percentage: 91.00% / 100.00%",
    logo: "/images/st-johns.png", 
    courses: [],
  },
];

export const CERTIFICATIONS = [
  {
    title: "Building Generative AI Applications Using Amazon Bedrock",
    issuer: "AWS Training & Certification",
    date: "Jan 2026",
    logo: "/images/aws-logo.svg",
    description: "Earned certification for developing generative AI solutions using Amazon Bedrock.",
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    date: "2025", 
    logo: "/images/google-cloud.svg", 
    description: "Fundamental certification covering the core concepts, architecture, and use cases of Large Language Models.",
  },
  {
    title: "Java (Basic) Skill Certification",
    issuer: "HackerRank",
    date: "Nov 2024",
    logo: "/images/hackerrank-logo.png",
    description: "Successfully passed the HackerRank skill certification test for foundational Java programming.",
  },
  {
    title: "CSS (Basic) Skill Certification",
    issuer: "HackerRank",
    date: "Oct 2024",
    logo: "/images/hackerrank-logo.png",
    description: "Successfully passed the HackerRank skill certification test for foundational CSS design.",
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL & IIT Kharagpur",
    date: "Apr 2024",
    logo: "/images/nptel-logo.jpeg",
    description: "Completed the 12-week certification course funded by the MoE, Govt. of India.",
  },
  {
    title: "Introduction to Database Systems",
    issuer: "NPTEL & IIT Madras",
    date: "Apr 2024",
    logo: "/images/nptel-logo.jpeg",
    description: "Completed the 12-week certification course funded by the MoE, Govt. of India.",
  },
];
