import React from 'react';
import { experienceData, ExperienceItem } from '../../data/experience';
import { StarDoodle, UnderlineSwoosh, TapeStrip } from '../Illustrations/EditorialDoodles';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-terracotta uppercase mb-2">
            <StarDoodle size={14} color="#C8795C" />
            <span>SECTION 05 ✦ PROFESSIONAL EXPERIENCE</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight leading-tight">
            Work history & internships.
          </h2>
          <div className="w-56 mt-3">
            <UnderlineSwoosh color="#C8795C" />
          </div>

          <p className="mt-4 text-base sm:text-lg text-secondary font-sans leading-relaxed max-w-2xl">
            Practical experience working with enterprise government divisions and student-focused platforms, bridging engineering rigor with creative communications.
          </p>
        </div>

        {/* Illustrated Vertical Editorial Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-dashed border-charcoal/30 space-y-12 max-w-4xl">
          {experienceData.map((item, idx) => (
            <div key={item.id} className="relative group">
              {/* Timeline Pin Node */}
              <div
                className={`absolute -left-[35px] sm:-left-[51px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-charcoal flex items-center justify-center shadow-editorial-sm transition-transform duration-300 group-hover:scale-110 ${
                  item.isCurrent ? 'bg-sage text-cream' : 'bg-terracotta text-cream'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Experience Card */}
              <div className="bg-cream-warm rounded-2xl border-2 border-charcoal shadow-editorial p-6 sm:p-8 transition-all duration-300 hover:shadow-editorial-lg">
                {/* Top Badge Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-charcoal/15 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    {item.isCurrent ? (
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-sage text-cream shadow-sm">
                        CURRENT INTERNSHIP
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-beige/80 border border-charcoal/20 text-charcoal">
                        PREVIOUS INTERNSHIP
                      </span>
                    )}

                    <span className="flex items-center space-x-1.5 text-xs font-mono text-secondary">
                      <Calendar className="w-3.5 h-3.5 text-terracotta" />
                      <span className="font-bold text-charcoal">{item.period}</span>
                    </span>
                  </div>

                  <span className="flex items-center space-x-1 text-xs font-mono text-secondary">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </span>
                </div>

                {/* Role & Organizations */}
                <div className="space-y-2 mb-4">
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal leading-tight">
                    {item.role}
                  </h3>

                  {/* Organization Badges (Accurately distinguishing separate organizations) */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {item.organizations.map((org, oIdx) => (
                      <div
                        key={oIdx}
                        className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-beige/60 border border-charcoal/20 text-xs font-mono"
                      >
                        <span className="font-bold text-charcoal">{org.name}</span>
                        <span className="text-secondary/70">✦ {org.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-base font-serif italic text-charcoal leading-relaxed mb-6">
                  “{item.summary}”
                </p>

                {/* Responsibilities & Specific Contributions */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-secondary">
                    CORE RESPONSIBILITIES & SCOPE
                  </h4>
                  <ul className="space-y-2.5">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start space-x-2.5 text-sm font-sans text-secondary leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-sage-dark flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Impact Ribbon */}
                <div className="mt-6 pt-4 border-t border-dashed border-charcoal/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex items-center space-x-2 text-terracotta font-bold">
                    <span>✦ KEY IMPACT:</span>
                    <span className="text-charcoal font-medium">{item.keyImpact[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

