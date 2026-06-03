import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Summary from "@/components/Summary";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import dynamic from 'next/dynamic';

const Experience = dynamic(() => import('@/components/Experience'));
const Projects = dynamic(() => import('@/components/Projects'));
const Certifications = dynamic(() => import('@/components/Certifications'));
const WhyMe = dynamic(() => import('@/components/WhyMe'));
const Contact = dynamic(() => import('@/components/Contact'));
const ClientScripts = dynamic(() => import('@/components/ClientScripts'));

export default function Home() {
  return (
    <main>
      <Navigation />
      <About />
      <div className="relative sticky-stack-wrapper">
        <Summary />
        <Education />
        <Skills />
      </div>
      <Experience />
      <Projects />
      <Certifications />
      <WhyMe />
      <Contact />
      <ClientScripts />
    </main>
  );
}
