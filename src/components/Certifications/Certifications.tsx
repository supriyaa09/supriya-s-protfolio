import React from 'react';
import { certificationsData, Certification } from '../../data/achievements';
import { StarDoodle, UnderlineSwoosh, TapeStrip } from '../Illustrations/EditorialDoodles';
import { CheckCircle2, Award, ShieldCheck, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-cream-warm border-t-2 border-b-2 border-charcoal/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-terracotta uppercase mb-2">
            <StarDoodle size={14} color="#C8795C" />
            <span>SECTION 08 ✦ CREDENTIALS & ACADEMIC STANDING</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-tight">
            Verified Certifications.
          </h2>
          <div className="w-48 mt-2">
            <UnderlineSwoosh color="#788568" />
          </div>

          <p className="mt-3 text-sm sm:text-base text-secondary font-sans leading-relaxed max-w-xl">
            Official technical credentials and national cadet certifications demonstrating verified mastery, disciplinary training, and modern software development practices.
          </p>
        </div>

        {/* Editorial Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-cream rounded-2xl border-2 border-charcoal shadow-editorial p-6 flex flex-col justify-between hover:shadow-editorial-lg transition-all duration-300 relative group"
            >
              {/* Outer corner dashed borders resembling diploma */}
              <div className="border border-dashed border-charcoal/30 rounded-xl p-5 flex flex-col justify-between h-full bg-cream-warm/50">
                <div>
                  {/* Top Seal */}
                  <div className="flex items-center justify-between pb-3 border-b border-charcoal/15 mb-3">
                    <div className="p-2 rounded-lg bg-beige border border-charcoal/20">
                      <ShieldCheck className="w-5 h-5 text-sage-dark" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-sage/20 text-sage-dark border border-sage/40">
                      {cert.badgeText}
                    </span>
                  </div>

                  {/* Cert Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal leading-snug mb-1">
                    {cert.name}
                  </h3>

                  {/* Issuing Authority */}
                  <p className="text-xs font-mono text-terracotta font-semibold mb-3">
                    Issued by: {cert.issuingBody}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-secondary font-sans leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Ribbon */}
                <div className="mt-6 pt-3 border-t border-charcoal/15 flex items-center justify-between text-[11px] font-mono text-secondary">
                  <div className="flex items-center space-x-1.5 text-sage-dark font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>STATUS: {cert.status.toUpperCase()}</span>
                  </div>
                  <span className="text-charcoal/40">OFFICIAL</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

