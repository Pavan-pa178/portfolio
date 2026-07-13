import NavRail from "@/components/NavRail";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Hackathons from "@/components/Hackathons";
import Certifications from "@/components/Certifications";
//import LeetCode from "@/components/LeetCode";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavRail />
      <MobileNav />
      <main className="lg:ml-[260px]">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Hackathons />
        <Certifications />
        {/*<LeetCode />*/}
        <Contact />
        <Footer />
      </main>
    </>
  );
}
