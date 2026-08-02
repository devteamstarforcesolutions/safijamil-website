import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import CaseWork from "@/components/CaseWork";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <CaseWork />
      <Skills />
      <Testimonials />
      <Insights />
      <Contact />
      <Footer />
    </>
  );
}
