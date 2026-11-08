import React from 'react';
import { beyondCodeData, ScrapbookItem } from '../../data/beyondCode';
import { StarDoodle, UnderlineSwoosh, TapeStrip } from '../Illustrations/EditorialDoodles';
import { Sparkles, Users, Shield, Flag, Award, HeartHandshake } from 'lucide-react';

export const BeyondCode: React.FC = () => {
  const getItemIcon = (id: string) => {
    switch (id) {
      case 'acm':
        return <Users className="w-5 h-5 text-sage-dark" />;
      case 'ncc':
        return <Shield className="w-5 h-5 text-terracotta" />;
      case 'hackathons':
        return <Flag className="w-5 h-5 text-sage-dark" />;
      default:
        return <Sparkles className="w-5 h-5 text-charcoal" />;
    }
  };

  return (
    <section id="beyond-code" className="py-24 bg-cream-warm border-t-2 border-b-2 border-charcoal/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-terracotta uppercase mb-2">
            <StarDoodle size={14} color="#C8795C" />
            <span>SECTION 06 ✦ LEADERSHIP & PASSIONS</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight leading-tight">
            There's more to me than code.
          </h2>
          <div className="w-64 mt-3">
            <UnderlineSwoosh color="#788568" />
          </div>

          <p className="mt-4 text-base sm:text-lg text-secondary font-sans leading-relaxed max-w-2xl">
            Character isn't built in a compiler. A scrapbook of leadership, disciplined military cadet service, hackathon energy, and community initiatives that shape who I am as a builder.
          </p>
        </div>

        {/* Illustrated Scrapbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {beyondCodeData.map((item, idx) => (
            <div
              key={item.id}
              className={`relative bg-cream rounded-2xl border-2 border-charcoal shadow-editorial p-6 sm:p-7 transition-all duration-300 hover:rotate-0 hover:shadow-editorial-lg ${item.rotation}`}
            >
              {/* Tape Stamp on Scrapbook Corner */}
              <div className="absolute -top-3.5 right-6 z-10">
                <TapeStrip text={item.editorialStamp} rotate="rotate-2" />
              </div>

              {/* Icon & Category */}
              <div className="flex items-center space-x-3 mb-4 pt-1">
                <div className="p-2.5 rounded-xl bg-beige/70 border border-charcoal/20">
                  {getItemIcon(item.id)}
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-secondary block">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono font-semibold text-terracotta">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Title & Role */}
              <div className="space-y-1 mb-4">
                <h3 className="font-serif text-2xl text-charcoal leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm font-bold font-mono text-sage-dark">
                  Role: {item.role}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-secondary font-sans leading-relaxed mb-5">
                {item.description}
              </p>

              {/* Key Bullet Highlights */}
              <div className="pt-4 border-t border-charcoal/15 space-y-2.5">
                {item.bulletPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start space-x-2 text-xs font-sans text-secondary leading-relaxed">
                    <span className="text-terracotta font-bold">✦</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Scrapbook pin footer */}
              <div className="mt-5 pt-3 border-t border-dashed border-charcoal/20 flex items-center justify-between text-[11px] font-mono text-secondary">
                <span>Scrapbook Memo #{idx + 1}</span>
                <span className="text-terracotta font-bold">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

