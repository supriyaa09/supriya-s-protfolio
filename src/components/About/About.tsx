import React from 'react';
import { GraduationCap, MapPin, Award, BookOpen, Layers, Lightbulb, Sparkles, Upload } from 'lucide-react';
import { StarDoodle, UnderlineSwoosh, TapeStrip } from '../Illustrations/EditorialDoodles';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-cream-warm border-t-2 border-b-2 border-charcoal/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-terracotta uppercase mb-2">
            <StarDoodle size={14} color="#C8795C" />
            <span>SECTION 02 ✦ EDITORIAL PROFILE</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight">
            A little about the person behind the code.
          </h2>
          <div className="w-48 mt-2">
            <UnderlineSwoosh color="#788568" />
          </div>
        </div>

        {/* Magazine-inspired 2-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Dedicated Editorial Portrait Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Tape Accents on Frame */}
              <div className="absolute -top-4 left-6 z-20">
                <TapeStrip text="PORTRAIT ✦ SUPRIYA" rotate="-rotate-3" />
              </div>

              {/* Main Photo Card Frame */}
              <div className="bg-cream p-4 sm:p-5 rounded-2xl border-2 border-charcoal shadow-editorial relative overflow-hidden group">
                {/* Photo container with configurable focal position & natural proportion */}
                <div className="relative w-full aspect-[3/4] rounded-xl border-2 border-charcoal overflow-hidden bg-beige/60">
                  <picture>
                    <source srcSet="/images/supriya-portrait.webp" type="image/webp" />
                    <img
                      src="/images/supriya-portrait.jpg"
                      alt="Photograph of Supriya — B.Tech Computer Science and Engineering student at Sreenidhi University"
                      className="w-full h-full object-cover object-[center_25%] transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </picture>

                  {/* Corner stamp */}
                  <div className="absolute bottom-3 right-3 bg-cream/90 backdrop-blur-sm px-2.5 py-1 rounded border border-charcoal text-[10px] font-mono font-bold text-charcoal shadow-sm">
                    HYD • INDIA
                  </div>
                </div>

                {/* Caption beneath portrait */}
                <div className="mt-4 pt-3 border-t border-charcoal/15 flex items-center justify-between text-xs font-mono text-secondary">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-sage" />
                    <span>Supriya — Developer & Builder</span>
                  </div>
                  <span className="text-terracotta font-semibold font-mono">CSE • 9.1 GPA</span>
                </div>
              </div>

              {/* Hand-drawn note pinned to the bottom */}
              <div className="mt-5 p-4 bg-beige/50 rounded-xl border border-dashed border-charcoal/30 flex items-start space-x-3">
                <Sparkles className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                <p className="text-xs font-sans text-secondary leading-relaxed">
                  <strong className="text-charcoal font-semibold">Supriya:</strong> Computer Science and Engineering student at Sreenidhi University. Passionate about AI/ML systems, enterprise software, and product innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Key Academic / Identity Badges */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            {/* Lead Story Paragraph */}
            <div className="space-y-4">
              <p className="text-xl sm:text-2xl font-serif text-charcoal leading-relaxed">
                “I'm a Computer Science and Engineering student at Sreenidhi University. I enjoy exploring new technologies, building practical applications and collaborating with people who love turning ideas into reality.”
              </p>

              <p className="text-base sm:text-lg text-secondary leading-relaxed font-sans">
                My interests span artificial intelligence, software development, product design and creative problem-solving.
                From architecting enterprise railway advisory systems and building edge AI classification models to leading student hackathons and designing multi-agent control planes, I love exploring how technology can solve real-world problems.
              </p>

              <p className="text-base sm:text-lg text-secondary leading-relaxed font-sans font-medium text-charcoal/90">
                I believe the best technology is not just technically impressive but genuinely useful.
              </p>
            </div>

            {/* Academic & Professional Fact Sheets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Fact 1: Education */}
              <div className="p-4 rounded-xl bg-cream border-2 border-charcoal shadow-editorial-sm flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-sage-subtle border border-sage/40 text-sage-dark flex-shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-secondary">
                    EDUCATION
                  </h4>
                  <p className="text-sm font-bold text-charcoal mt-0.5">B.Tech Computer Science & Engg.</p>
                  <p className="text-xs text-secondary">Sreenidhi University</p>
                </div>
              </div>

              {/* Fact 2: Academic Standing */}
              <div className="p-4 rounded-xl bg-cream border-2 border-charcoal shadow-editorial-sm flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-terracotta-subtle border border-terracotta/40 text-terracotta-dark flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-secondary">
                    ACADEMIC EXCELLENCE
                  </h4>
                  <p className="text-sm font-bold text-charcoal mt-0.5">GPA: 9.1 / 10</p>
                  <p className="text-xs text-secondary">Strong Foundations in CS & Math</p>
                </div>
              </div>

              {/* Fact 3: Location */}
              <div className="p-4 rounded-xl bg-cream border-2 border-charcoal shadow-editorial-sm flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-beige border border-charcoal/20 text-charcoal flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-secondary">
                    LOCATION
                  </h4>
                  <p className="text-sm font-bold text-charcoal mt-0.5">Hyderabad, India</p>
                  <p className="text-xs text-secondary">Open to Global Opportunities</p>
                </div>
              </div>

              {/* Fact 4: Core Intersections */}
              <div className="p-4 rounded-xl bg-cream border-2 border-charcoal shadow-editorial-sm flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-sage-subtle border border-sage/40 text-sage-dark flex-shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-secondary">
                    FOCUS DOMAINS
                  </h4>
                  <p className="text-sm font-bold text-charcoal mt-0.5">AI & Software Engineering</p>
                  <p className="text-xs text-secondary">Product Innovation & UI/UX</p>
                </div>
              </div>
            </div>

            {/* Editorial Pullquote Box */}
            <div className="p-5 rounded-2xl bg-charcoal text-cream border-2 border-charcoal shadow-editorial relative">
              <div className="flex items-center space-x-2 text-terracotta text-xs font-mono font-bold uppercase tracking-widest mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CORE PHILOSOPHY</span>
              </div>
              <p className="font-serif italic text-lg sm:text-xl text-cream-light leading-relaxed">
                “Building software isn't just about syntax or frameworks — it's about listening to human needs and crafting systems that make everyday tasks simpler, faster, and more dignified.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

