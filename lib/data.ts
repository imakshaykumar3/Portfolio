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
    description: "An autonomous AI travel platform that orchestrates multiple AI agents to deliver intelligent, real-time travel planning through scalable backend architecture and live API integration.",
    bullets: [
      "Built a 13-node autonomous multi-agent architecture that enables intelligent task delegation, memory persistence, and dynamic decision-making using LangGraph",
      "Developed a high-performance FastAPI orchestration layer that streams AI responses in real time while integrating multiple LLMs and external travel intelligence services.",
      "Delivered a production-ready AI system optimized for scalability, fault tolerance, and low-latency execution through asynchronous workflows, checkpoint recovery, and structured AI outputs.",
    ],
    metrics: [
      { value: "13", label: "StateGraph nodes" },
      { value: "<700ms", label: "Recommendation latency" },
      { value: "2", label: "LLMs orchestrated" }
    ],
    tech: ["PYTHON", "LANGGRAPH", "LANGCHAIN", "FASTAPI", "GPT-4", "GEMINI", "SQLITE", "SSE", "PYDANTIC"],
    github: "https://github.com/imakshaykumar3/Sarthi.AI", 
    image: "/images/sarthi-ai.png", 
    diagram: "sarthi", 
  },
  {
    slug: "contextgpt",
    name: "ContextGPT",
    subtitle: "AI-Powered Meeting Intelligence Platform",
    description:
      "Built an AI-powered meeting intelligence platform that transforms hours of conversations into searchable organizational knowledge. By combining state-of-the-art speech recognition, vector search, and Retrieval-Augmented Generation, the platform delivers accurate insights, summaries, and conversational answers with enterprise-grade security and performance.",
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
      "Designed an end-to-end RAG architecture using LangChain, ChromaDB, and BAAI embeddings, enabling low-latency semantic retrieval and grounded AI responses.",
      "Built a high-performance multi-modal ingestion pipeline supporting audio, video, and YouTube content with Faster-Whisper, reducing manual meeting documentation by 80%.",
      "Developed production-ready FastAPI microservices with JWT authentication, PostgreSQL, and asynchronous APIs to deliver secure, scalable, and enterprise-ready AI workflows.",
    ],
    metrics: [
      { value: "80%", label: "less note-prep time" },
      { value: "3", label: "input modalities" },
      { value: "JWT", label: "secured API layer" },
    ],
    diagram: "contextgpt" as const,
    image: "/images/contextgpt.png",
    github: "https://github.com/imakshaykumar3/ContextGPT",
  },
  {
    slug: "investify",
    name: "Investify",
    subtitle: "Full-Stack Investment & Portfolio Management Platform",
    description:
      "A modern full-stack investment platform that delivers real-time market insights, portfolio tracking, and secure trading workflows through a scalable Spring Boot backend and responsive React frontend.",
    bullets: [
      "Engineered scalable Spring Boot REST APIs to power secure portfolio management, watchlists, and real-time financial data integration with clean backend architecture.",
      "Developed a responsive React and Tailwind CSS dashboard featuring interactive market analytics, portfolio tracking, watchlists, and an optimized cross-device user experience.",
      "Designed a production-ready full-stack application with modular architecture, seamless frontend-backend communication, and maintainable code following modern software engineering practices.",
    ],
    metrics: [
      { value: "100%", label: "Responsive UI" },
      { value: "REST", label: "API Architecture" },
      { value: "Full Stack", label: "Web Application" }
    ],
    tech: [
      "JAVA",
      "SPRING BOOT",
      "REACT",
      "TAILWIND CSS",
      "REST APIs",
      "SPRING SECURITY",
      "JWT",
      "MYSQL",
      "MAVEN",
      "LOMBOK"
    ],
    github: "https://github.com/imakshaykumar3/Investify",
    image: "/images/investify.png",
    diagram: "investify",
  },
  {
  slug: "intelligent-file-management",
  name: "Intelligent File Management System",
  subtitle: "AI-Inspired Duplicate Detection & Smart Storage Management",
  description:
    "A full-stack file management platform that intelligently detects duplicate files, automates storage optimization, and provides secure file lifecycle management through a scalable Spring Boot backend and React frontend.",
  bullets: [
    "Engineered a high-performance duplicate detection engine using SHA-256 hashing and Levenshtein similarity, achieving over 95% detection accuracy while identifying redundant files and empty directories.",
    "Developed secure Spring Boot REST APIs powering file uploads, previews, categorization, activity tracking, and deletion workflows with seamless React integration.",
    "Built a responsive React and Tailwind CSS interface with real-time file management, metadata visualization, and an intuitive user experience following clean architecture principles.",
  ],
  metrics: [
    { value: "95%+", label: "Detection Accuracy" },
    { value: "SHA-256", label: "Hash-Based Matching" },
    { value: "REST", label: "API Architecture" }
  ],
  tech: [
    "JAVA",
    "SPRING BOOT",
    "REACT",
    "TAILWIND CSS",
    "REST APIs",
    "SHA-256",
    "LEVENSHTEIN",
    "LOMBOK",
    "SLF4J",
    "APACHE COMMONS CODEC"
  ],
  github: "https://github.com/imakshaykumar3/your-repository",
  image: "/images/ifms.png",
  diagram: "file-management",
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
