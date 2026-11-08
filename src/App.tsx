import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { BeyondCode } from './components/BeyondCode/BeyondCode';
import { Achievements } from './components/Achievements/Achievements';
import { Certifications } from './components/Certifications/Certifications';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'work',
      'skills',
      'experience',
      'beyond-code',
      'achievements',
      'connect',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal font-sans selection:bg-terracotta selection:text-cream-light">
      {/* Sticky Editorial Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <BeyondCode />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      {/* Editorial Colophon & Footer */}
      <Footer />
    </div>
  );
};

export default App;

