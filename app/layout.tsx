// app/layout.tsx

import type { Metadata } from "next";
import {
  Inter,
  Space_Grotesk,
  JetBrains_Mono,
  Orbitron,
} from "next/font/google";
// @ts-ignore - allow importing global CSS without module declarations in this environment
import "./globals.css";
import { Toaster } from "sonner";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  weight: ["700", "800", "900"],
});

const SITE_URL = "https://akshaykumar.dev"; 

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Akshay Kumar — Software Developer & AI Engineer",
    template: "%s | Akshay Kumar",
  },
  description:
    "Akshay Kumar is an AI Platform & Backend Engineer building production multi-agent systems, RAG pipelines, and scalable APIs with Python, FastAPI, LangGraph, and LangChain. Ranked 71st globally (top 0.05%) in TCS CodeVita among 146,922 participants.",
  keywords: [
    "Akshay Kumar",
    "AI Engineer",
    "Backend Engineer",
    "Agentic AI",
    "LangGraph",
    "LangChain",
    "FastAPI",
    "RAG",
    "Generative AI Engineer",
    "LLM Engineer",
  ],
  authors: [{ name: "Akshay Kumar", url: SITE_URL }],
  creator: "Akshay Kumar",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Akshay Kumar — AI Platform & Backend Engineer",
    description:
      "Building production-grade agentic AI systems, RAG pipelines, and scalable backend infrastructure.",
    siteName: "Akshay Kumar",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Akshay Kumar — AI Platform & Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Kumar — AI Platform & Backend Engineer",
    description:
      "Building production-grade agentic AI systems, RAG pipelines, and scalable backend infrastructure.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo2.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akshay Kumar",
  jobTitle: "AI Platform & Backend Engineer",
  url: SITE_URL,
  sameAs: [
    "https://github.com/imakshaykumar3",
    "https://www.linkedin.com/in/imakshaykumar3",
    "https://codolio.com/profile/akshaykumar",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Amity University, Ranchi",
  },
  knowsAbout: [
    "Agentic AI",
    "LangGraph",
    "LangChain",
    "Retrieval-Augmented Generation",
    "FastAPI",
    "Python",
    "Backend Engineering",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${orbitron.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent-blue focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to main content
        </a>
        {children}
        <Toaster
          position="top-right"
          richColors
          closeButton
          duration={3000}
        />
      </body>
    </html>
  );
}
