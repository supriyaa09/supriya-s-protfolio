import React from 'react';
import confetti from 'canvas-confetti';
import { achievementsData, Achievement } from '../../data/achievements';
import { CharacterAchievementsIllustration } from '../Illustrations/CharacterIllustrations';
import { StarDoodle, UnderlineSwoosh, TapeStrip } from '../Illustrations/EditorialDoodles';
import { Trophy, Award, Star, Heart, Sparkles } from 'lucide-react';

export const Achievements: React.FC = () => {
  const triggerCelebration = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#C8795C', '#788568', '#E5DED1', '#292B25'],
    });
  };

  const getAchievementIcon = (icon: string) => {
    switch (icon) {
      case 'trophy':
        return <Trophy className="w-6 h-6 text-terracotta" />;
      case 'award':
        return <Award className="w-6 h-6 text-sage-dark" />;
      case 'star':
        return <Star className="w-6 h-6 text-terracotta" />;
      case 'heart':
        return <Heart className="w-6 h-6 text-sage-dark" />;
      default:
        return <Sparkles className="w-6 h-6 text-charcoal" />;
    }
  };

  return (
    <section id="achievements" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Character Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-terracotta uppercase mb-2">
              <StarDoodle size={14} color="#C8795C" />
              <span>SECTION 07 ✦ HONOURS & MILESTONES</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight leading-tight">
              Small wins. Big learning curves.
            </h2>
            <div className="w-56 mt-3">
              <UnderlineSwoosh color="#C8795C" />
            </div>

            <p className="mt-4 text-base sm:text-lg text-secondary font-sans leading-relaxed max-w-xl">
              Competitive hackathon triumphs, ideathon podiums, and teaching initiatives. Each milestone is a testament to working under pressure, shipping fast, and solving problems that matter.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[360px]">
              <CharacterAchievementsIllustration className="w-full drop-shadow-sm" />
            </div>
          </div>
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item, idx) => (
            <div
              key={item.id}
              onClick={triggerCelebration}
              className="bg-cream-warm rounded-2xl border-2 border-charcoal shadow-editorial p-6 flex flex-col justify-between cursor-pointer hover:shadow-editorial-lg hover:-translate-y-1 transition-all duration-300 group"
              title="Click to celebrate!"
            >
              <div>
                {/* Card Top: Icon & Year */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-charcoal/15">
                  <div className="p-3 rounded-xl bg-cream border-2 border-charcoal shadow-editorial-sm group-hover:rotate-6 transition-transform">
                    {getAchievementIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-secondary bg-beige/80 px-2.5 py-1 rounded-full border border-charcoal/20">
                    {item.year}
                  </span>
                </div>

                {/* Badge Label */}
                <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-terracotta/15 text-terracotta-dark border border-terracotta/30 mb-2">
                  {item.badgeLabel}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal leading-snug mb-2 group-hover:text-terracotta transition-colors">
                  {item.title}
                </h3>

                {/* Event Name */}
                <p className="text-xs font-mono text-sage-dark font-semibold mb-3">
                  {item.event}
                </p>

                {/* Description */}
                <p className="text-xs text-secondary font-sans leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Bottom Highlight Note */}
              <div className="pt-3 border-t border-dashed border-charcoal/20 text-[11px] font-sans text-charcoal/80 flex items-center justify-between">
                <span>✦ Verified Milestone</span>
                <span className="text-xs">🎉</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

