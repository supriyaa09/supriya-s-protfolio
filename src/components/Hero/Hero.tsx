import React from 'react';
import { ArrowDown, Mail, Download, Sparkles, Code2, Cpu } from 'lucide-react';
import { CharacterHeroIllustration } from '../Illustrations/CharacterIllustrations';
import { StarDoodle, UnderlineSwoosh, TapeStrip, Github, Linkedin } from '../Illustrations/EditorialDoodles';

export const Hero: React.FC = () => {
  const headlineWords = ['I', 'turn', 'curious', 'ideas', 'into', 'things', 'that', 'work.'];

  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden editorial-paper-bg"
    >
      {/* Decorative background grid and rules */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 lg:grid-cols-12 gap-6 px-6">
          <div className="border-r border-dashed border-charcoal/10 h-full hidden lg:block" />
          <div className="border-r border-dashed border-charcoal/10 h-full hidden lg:block" />
          <div className="border-r border-dashed border-charcoal/10 h-full hidden lg:block" />
          <div className="border-r border-dashed border-charcoal/10 h-full hidden lg:block" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Editorial Issue Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-charcoal/15">
          <div className="flex items-center space-x-3">
            <TapeStrip text="VOL. 2026 ✦ THE ILLUSTRATED EDITION" rotate="-rotate-1" />
            <span className="hidden sm:inline-block text-xs font-mono font-medium text-secondary">
              CSE Student • Sreenidhi University • GPA: 9.1
            </span>
          </div>

          <div className="flex items-center space-x-4 text-xs font-mono font-semibold text-secondary">
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              <span>HYDERABAD, INDIA</span>
            </span>
            <span className="hidden md:inline text-charcoal/30">|</span>
            <span className="hidden md:inline text-terracotta font-bold">STATUS: BUILDING IDEAS</span>
          </div>
        </div>

        {/* Main 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Supporting Tagline / Subtitle */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-beige/80 border border-charcoal/20 w-fit shadow-editorial-sm">
              <Sparkles className="w-3.5 h-3.5 text-terracotta animate-spin" style={{ animationDuration: '6s' }} />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-charcoal">
                Developer. Builder. Creative thinker.
              </span>
            </div>

            {/* Oversized Editorial Heading */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.08] text-charcoal tracking-tight">
              {headlineWords.map((word, idx) => (
                <span
                  key={idx}
                  className={`inline-block mr-3 transition-all duration-300 ${
                    word === 'curious'
                      ? 'text-terracotta italic font-serif'
                      : word === 'work.'
                      ? 'relative text-charcoal'
                      : 'text-charcoal'
                  }`}
                >
                  {word}
                  {word === 'work.' && (
                    <span className="absolute -bottom-2 left-0 w-full block">
                      <UnderlineSwoosh color="#788568" />
                    </span>
                  )}
                </span>
              ))}
            </h1>

            {/* Editorial Description */}
            <p className="text-lg sm:text-xl text-secondary font-sans leading-relaxed max-w-2xl pt-2">
              Exploring the intersection of technology, AI and meaningful digital experiences. Transforming complex problems into simple, functional digital solutions.
            </p>

            {/* Hand-drawn Marginal Annotation */}
            <div className="flex items-center space-x-3 text-terracotta font-hand text-xl sm:text-2xl pt-1">
              <StarDoodle size={18} color="#C8795C" />
              <span>“Technology is what I build. Creativity is how I bring it to life.”</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#work"
                onClick={scrollToWork}
                className="inline-flex items-center space-x-3 px-7 py-3.5 bg-charcoal text-cream font-bold text-sm tracking-wider uppercase rounded-xl border-2 border-charcoal shadow-editorial hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-editorial-sm transition-all group"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 text-terracotta group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/resume/Supriya_Resume.pdf"
                download="Supriya_Resume.pdf"
                className="inline-flex items-center space-x-3 px-6 py-3.5 bg-cream-warm text-charcoal font-bold text-sm tracking-wider uppercase rounded-xl border-2 border-charcoal shadow-editorial hover:bg-beige/60 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-editorial-sm transition-all"
              >
                <Download className="w-4 h-4 text-sage-dark" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center space-x-5 pt-4 text-charcoal">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-secondary">
                Find Me:
              </span>
              <a
                href="https://github.com/supriyaa09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-beige/60 border border-charcoal/20 hover:bg-charcoal hover:text-cream shadow-editorial-sm hover:-translate-y-0.5 transition-all"
                title="GitHub @supriyaa09"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/supriya-09dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-beige/60 border border-charcoal/20 hover:bg-charcoal hover:text-cream shadow-editorial-sm hover:-translate-y-0.5 transition-all"
                title="LinkedIn @supriya-09dev"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:supriyaaa.926@gmail.com"
                className="p-2 rounded-lg bg-beige/60 border border-charcoal/20 hover:bg-charcoal hover:text-cream shadow-editorial-sm hover:-translate-y-0.5 transition-all"
                title="Email supriyaaa.926@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Original Illustrated Character & Portrait Frame */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Main Character Illustration Component */}
            <div className="relative w-full max-w-[480px]">
              <CharacterHeroIllustration className="w-full drop-shadow-md" />

              {/* Editorial Profile Frame Badge (with configurable focal position & clean placeholder preview) */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-cream-warm p-2.5 rounded-xl border-2 border-charcoal shadow-editorial max-w-[210px] transform -rotate-2 hover:rotate-0 transition-transform">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg border-2 border-charcoal overflow-hidden bg-beige flex-shrink-0 relative">
                    <img
                      src="/images/supriya-portrait.jpg"
                      alt="Supriya — Profile Portrait"
                      className="w-full h-full object-cover object-[center_20%]"
                      onError={(e) => {
                        // Fallback indicator if image is missing
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-bold text-xs text-charcoal leading-tight">
                      Supriya
                    </span>
                    <span className="text-[10px] font-mono text-terracotta font-semibold">
                      CSE @ Sreenidhi
                    </span>
                    <span className="text-[9px] font-mono text-secondary">
                      GPA: 9.1
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating tech badge */}
              <div className="absolute -top-3 -right-2 bg-sage-subtle px-3 py-1.5 rounded-lg border-2 border-charcoal shadow-editorial-sm transform rotate-3 flex items-center space-x-1.5">
                <Code2 className="w-3.5 h-3.5 text-sage-dark" />
                <span className="text-xs font-mono font-bold text-sage-dark">React • AI/ML</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-16 lg:pt-20">
          <a
            href="#about"
            className="flex flex-col items-center space-y-2 text-secondary hover:text-charcoal transition-colors group"
          >
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">Scroll to Read Story</span>
            <div className="w-6 h-10 rounded-full border-2 border-charcoal/40 flex items-start justify-center p-1 group-hover:border-charcoal">
              <div className="w-1.5 h-2 bg-terracotta rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
