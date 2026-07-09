import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
// app/page.tsx
import Footer from "@/components/Footer";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
