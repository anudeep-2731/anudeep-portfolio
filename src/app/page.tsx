import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative w-full overflow-x-hidden pt-20">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <WorkExperience />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
