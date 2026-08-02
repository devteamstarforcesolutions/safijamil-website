import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import CaseWork from "@/components/CaseWork";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import HomeFaq from "@/components/HomeFaq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

// Revalidate hourly so scheduled blog posts surface on the homepage as they publish.
export const revalidate = 3600;

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
      <HomeFaq />
      <Insights />
      <Contact />
      <Footer />
    </>
  );
}
