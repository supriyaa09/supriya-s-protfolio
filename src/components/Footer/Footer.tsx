import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { StarDoodle, UnderlineSwoosh, Github, Linkedin } from '../Illustrations/EditorialDoodles';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-cream border-t-4 border-terracotta relative overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Statement */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-terracotta uppercase">
            <StarDoodle size={14} color="#C8795C" />
            <span>FINAL CREATIVE STATEMENT</span>
            <StarDoodle size={14} color="#C8795C" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream-light leading-tight">
            “Technology is what I build. Creativity is how I bring it to life.”
          </h2>

          <p className="text-sm font-sans text-cream/70 max-w-xl">
            Designed as an illustrated editorial experience celebrating computer science, system architectures, and creative problem-solving.
          </p>
        </div>

        {/* Links & Navigation Row */}
        <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-t border-b border-cream/15 text-xs font-mono">
          {/* Brand Monogram */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-terracotta flex items-center justify-center text-cream font-serif text-lg font-bold border border-cream/30">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base text-cream">SUPRIYA</span>
              <span className="text-[10px] text-cream/50 uppercase tracking-wider">
                CSE @ Sreenidhi University
              </span>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap items-center gap-4 text-cream/80">
            <a href="#about" className="hover:text-terracotta transition-colors">ABOUT</a>
            <a href="#work" className="hover:text-terracotta transition-colors">WORK</a>
            <a href="#skills" className="hover:text-terracotta transition-colors">SKILLS</a>
            <a href="#experience" className="hover:text-terracotta transition-colors">EXPERIENCE</a>
            <a href="#beyond-code" className="hover:text-terracotta transition-colors">BEYOND CODE</a>
            <a href="#achievements" className="hover:text-terracotta transition-colors">ACHIEVEMENTS</a>
            <a href="#connect" className="hover:text-terracotta transition-colors">CONNECT</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/supriyaa09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-cream/10 hover:bg-terracotta text-cream transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/supriya-09dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-cream/10 hover:bg-terracotta text-cream transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:supriyaaa.926@gmail.com"
              className="p-2 rounded-lg bg-cream/10 hover:bg-terracotta text-cream transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-cream/20 hover:bg-cream hover:text-charcoal text-cream transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Colophon */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 text-[11px] font-mono text-cream/60">
          <div>
            © {new Date().getFullYear()} Supriya. Crafted with React, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center space-x-1.5">
            <span>Built for the Web with</span>
            <span className="text-terracotta">❤</span>
            <span>in Hyderabad, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
