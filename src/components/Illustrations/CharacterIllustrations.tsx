import React from 'react';

interface IllustrationProps {
  className?: string;
  size?: number | string;
}

/**
 * Main Character Illustration: Hero Pose
 * Uses the exact extracted doodle character image from supriya_exact_doodle_image.svg
 * with editorial frames, floating hand-drawn doodles, tape accents, and animated stickers.
 */
export const CharacterHeroIllustration: React.FC<IllustrationProps> = ({ className = '', size = '100%' }) => {
  return (
    <div className={`relative select-none ${className}`} style={{ width: size }}>
      {/* Editorial Frame for the Exact Doodle Character */}
      <div className="relative rounded-2xl border-2 border-charcoal bg-cream-warm p-4 sm:p-5 shadow-editorial overflow-hidden group">
        {/* Editorial Tape Accent on top */}
        <div className="absolute -top-3.5 left-8 z-20">
          <span className="px-3 py-1 bg-beige text-charcoal font-mono text-[10px] font-bold uppercase tracking-widest border border-charcoal/30 shadow-sm -rotate-2 inline-block">
            SUPRIYA ✦ ORIGINAL DOODLE CHARACTER
          </span>
        </div>

        {/* The Exact Doodle Character Image */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-charcoal/80 bg-cream shadow-inner">
          <picture>
            <source srcSet="/illustrations/supriya_doodle_character.webp" type="image/webp" />
            <img
              src="/illustrations/supriya_doodle_character.png"
              alt="Original doodle illustration of Supriya"
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              loading="eager"
              onError={(e) => {
                // SVG fallback if webp/png fails
                const target = e.target as HTMLImageElement;
                if (!target.src.endsWith('.svg')) {
                  target.src = '/illustrations/supriya_exact_doodle_image.svg';
                }
              }}
            />
          </picture>

          {/* Corner badge inside the doodle frame */}
          <div className="absolute bottom-2.5 right-2.5 bg-cream/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-charcoal/40 text-[10px] font-mono font-bold text-charcoal">
            ✦ CSE @ Sreenidhi
          </div>
        </div>

        {/* Marginal Editorial Annotation under the Doodle */}
        <div className="mt-3.5 pt-2.5 border-t border-charcoal/15 flex items-center justify-between text-xs font-mono text-secondary">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
            <span className="font-bold text-charcoal font-sans text-xs">
              Developer • Builder • Creative Thinker
            </span>
          </div>
          <span className="text-terracotta font-semibold">2026</span>
        </div>
      </div>

      {/* Floating Coffee Cup Doodle */}
      <div className="absolute -bottom-5 -left-4 sm:-left-6 hidden sm:block animate-float-slow z-30">
        <div className="p-2 rounded-xl bg-cream border-2 border-charcoal shadow-editorial-sm flex items-center space-x-2">
          <span className="text-lg">☕</span>
          <span className="text-[11px] font-mono font-bold text-charcoal">coffee ➔ code</span>
        </div>
      </div>

      {/* Floating Idea Lightbulb Doodle */}
      <div className="absolute -top-4 -right-3 animate-float z-30">
        <div className="p-2 rounded-xl bg-cream-warm border-2 border-charcoal shadow-editorial-sm flex items-center space-x-1.5">
          <span className="text-lg">💡</span>
          <span className="text-[11px] font-mono font-bold text-terracotta">idea()</span>
        </div>
      </div>

      {/* Floating Code Snippet Tag */}
      <div className="absolute -top-5 left-1/4 animate-float-reverse hidden md:block z-30">
        <div className="px-3 py-1 rounded-lg bg-charcoal text-cream text-[11px] font-mono font-bold border border-charcoal shadow-editorial-sm">
          build(dream);
        </div>
      </div>
    </div>
  );
};

/**
 * Character Pose: Exploring Projects & Blueprints
 */
export const CharacterProjectIllustration: React.FC<IllustrationProps> = ({ className = '', size = '100%' }) => {
  return (
    <div className={`relative select-none ${className}`} style={{ width: size }}>
      <div className="relative rounded-2xl border-2 border-charcoal bg-cream-warm p-4 shadow-editorial">
        {/* Blueprint background grid */}
        <div className="rounded-xl border border-dashed border-charcoal/30 bg-cream p-4 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-charcoal/15">
            <span className="text-xs font-mono font-bold text-charcoal uppercase tracking-wider flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-terracotta" />
              <span>SYSTEM ARCHITECTURE BLUEPRINT</span>
            </span>
            <span className="text-[10px] font-mono text-secondary">REV 2.0</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
            <div className="p-2 rounded-lg bg-beige/60 border border-charcoal/20">
              <strong className="block text-charcoal text-[11px]">Client UI</strong>
              <span className="text-[9px] text-secondary">React 19 / TS</span>
            </div>
            <div className="p-2 rounded-lg bg-terracotta-subtle border border-terracotta/30">
              <strong className="block text-terracotta-dark text-[11px]">API Engine</strong>
              <span className="text-[9px] text-secondary">FastAPI / Node</span>
            </div>
            <div className="p-2 rounded-lg bg-sage-subtle border border-sage/30">
              <strong className="block text-sage-dark text-[11px]">Data Store</strong>
              <span className="text-[9px] text-secondary">Postgres / Chroma</span>
            </div>
          </div>

          {/* Character Avatar inspecting the diagram */}
          <div className="pt-2 flex items-center space-x-3 bg-cream-warm/80 p-2.5 rounded-lg border border-charcoal/15">
            <div className="w-12 h-12 rounded-full border-2 border-charcoal overflow-hidden flex-shrink-0 bg-cream">
              <img
                src="/illustrations/supriya_doodle_character.webp"
                alt="Supriya inspecting architecture"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/illustrations/supriya_doodle_character.png';
                }}
              />
            </div>
            <div>
              <p className="text-xs font-bold text-charcoal font-sans">
                Architecture Review & Verification
              </p>
              <p className="text-[11px] font-hand text-terracotta font-semibold">
                ✦ “Clean architecture makes systems scale.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Character Pose: Skills & Technology Mastery
 */
export const CharacterSkillsIllustration: React.FC<IllustrationProps> = ({ className = '', size = '100%' }) => {
  return (
    <div className={`relative select-none ${className}`} style={{ width: size }}>
      <div className="relative rounded-2xl border-2 border-charcoal bg-cream-warm p-4 shadow-editorial">
        <div className="rounded-xl border border-dashed border-charcoal/30 bg-cream p-4 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-charcoal/15">
            <span className="text-xs font-mono font-bold text-charcoal uppercase tracking-wider flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-sage" />
              <span>ORCHESTRATED TOOLCHAIN</span>
            </span>
            <span className="text-[10px] font-mono text-terracotta font-bold">CORE CAPABILITIES</span>
          </div>

          <div className="flex items-center space-x-3 bg-cream-warm/80 p-2.5 rounded-lg border border-charcoal/15">
            <div className="w-14 h-14 rounded-full border-2 border-charcoal overflow-hidden flex-shrink-0 bg-cream shadow-editorial-sm">
              <img
                src="/illustrations/supriya_doodle_character.webp"
                alt="Supriya coordinating tools"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/illustrations/supriya_doodle_character.png';
                }}
              />
            </div>
            <div>
              <p className="text-xs font-bold text-charcoal font-sans">
                Full-Stack & Applied AI Engineering
              </p>
              <div className="flex flex-wrap gap-1 mt-1">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sage-subtle text-sage-dark border border-sage/30">
                  Python
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-terracotta-subtle text-terracotta-dark border border-terracotta/30">
                  React
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-beige text-charcoal border border-charcoal/20">
                  AI Agents
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Character Pose: Achievements & Winner Trophy
 */
export const CharacterAchievementsIllustration: React.FC<IllustrationProps> = ({ className = '', size = '100%' }) => {
  return (
    <div className={`relative select-none ${className}`} style={{ width: size }}>
      <div className="relative rounded-2xl border-2 border-charcoal bg-cream-warm p-4 shadow-editorial">
        <div className="rounded-xl border border-dashed border-charcoal/30 bg-cream p-4 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-charcoal/15">
            <span className="text-xs font-mono font-bold text-charcoal uppercase tracking-wider flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-terracotta" />
              <span>PODIUMS & MILESTONES</span>
            </span>
            <span className="text-[10px] font-mono text-terracotta font-bold">1ST PLACE WINNER</span>
          </div>

          <div className="flex items-center space-x-3 bg-cream-warm/80 p-2.5 rounded-lg border border-charcoal/15">
            <div className="w-14 h-14 rounded-full border-2 border-charcoal overflow-hidden flex-shrink-0 bg-cream shadow-editorial-sm">
              <img
                src="/illustrations/supriya_doodle_character.webp"
                alt="Supriya celebrating achievement"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/illustrations/supriya_doodle_character.png';
                }}
              />
            </div>
            <div>
              <p className="text-xs font-bold text-charcoal font-sans flex items-center space-x-1">
                <span>🏆</span>
                <span>HackWave & RoboVeda Winner</span>
              </p>
              <p className="text-[11px] font-sans text-secondary mt-0.5">
                Recognized for rapid prototyping & applied engineering impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Character Pose: Sending Paper Plane (Connect Section)
 */
export const CharacterConnectIllustration: React.FC<IllustrationProps> = ({ className = '', size = '100%' }) => {
  return (
    <div className={`relative select-none ${className}`} style={{ width: size }}>
      <div className="relative rounded-2xl border-2 border-charcoal bg-cream-warm p-5 shadow-editorial overflow-hidden">
        {/* Flight Trajectory Header */}
        <div className="flex items-center justify-between pb-3 border-b border-charcoal/15 mb-3">
          <span className="text-xs font-mono font-bold text-charcoal uppercase tracking-wider flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-sage" />
            <span>DISPATCH & TRANSMISSION</span>
          </span>
          <span className="text-[10px] font-mono text-terracotta font-bold">DIRECT CHANNEL</span>
        </div>

        <div className="flex items-center space-x-4 bg-cream p-3 rounded-xl border border-charcoal/15">
          <div className="w-16 h-16 rounded-xl border-2 border-charcoal overflow-hidden flex-shrink-0 bg-cream-warm shadow-editorial-sm">
            <img
              src="/illustrations/supriya_doodle_character.webp"
              alt="Supriya sending message"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/illustrations/supriya_doodle_character.png';
              }}
            />
          </div>
          <div>
            <p className="font-serif text-lg font-bold text-charcoal leading-tight">
              Let's Connect & Build
            </p>
            <p className="text-xs font-hand text-terracotta text-base leading-tight mt-1">
              ✦ “Ideas are better when shared.”
            </p>
            <p className="text-[11px] font-mono text-secondary mt-0.5">
              Available for collaborations & software engineering inquiries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
