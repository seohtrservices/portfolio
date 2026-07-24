import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Education from '@/components/Education';
import TechMarquee from '@/components/TechMarquee';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Home Page
 * Main portfolio page with all sections
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Stats />
        <Testimonials />
        <Education />
        <TechMarquee />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
