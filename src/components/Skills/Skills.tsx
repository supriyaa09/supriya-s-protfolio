import React, { useState } from 'react';
import { skillCategories, SkillCategoryGroup } from '../../data/skills';
import { CharacterSkillsIllustration } from '../Illustrations/CharacterIllustrations';
import { StarDoodle, UnderlineSwoosh, TapeStrip } from '../Illustrations/EditorialDoodles';
import { Sparkles, Code2, Database, Terminal, Palette, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ai':
        return <Sparkles className="w-5 h-5 text-sage-dark" />;
      case 'web':
        return <Code2 className="w-5 h-5 text-terracotta" />;
      case 'backend':
        return <Database className="w-5 h-5 text-sage-dark" />;
      case 'tools':
        return <Terminal className="w-5 h-5 text-charcoal" />;
      case 'creative':
        return <Palette className="w-5 h-5 text-terracotta" />;
      default:
        return <Sparkles className="w-5 h-5 text-charcoal" />;
    }
  };

  const displayedCategories =
    activeCategoryId === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategoryId);

  return (
    <section id="skills" className="py-24 bg-cream-warm border-t-2 border-b-2 border-charcoal/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Character Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-terracotta uppercase mb-2">
              <StarDoodle size={14} color="#C8795C" />
              <span>SECTION 04 ✦ TOOLBOX & CAPABILITIES</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight leading-tight">
              My toolbox.
            </h2>
            <div className="w-36 mt-2">
              <UnderlineSwoosh color="#788568" />
            </div>

            <p className="mt-4 text-base sm:text-lg text-secondary font-sans leading-relaxed max-w-xl">
              Curated technologies and methodologies verified through actual project builds, enterprise internships, and AI research prototypes. No arbitrary percentage bars — just practical engineering tools put into real use.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[360px]">
              <CharacterSkillsIllustration className="w-full drop-shadow-sm" />
            </div>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 pb-4 border-b border-charcoal/15">
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
              activeCategoryId === 'all'
                ? 'bg-charcoal text-cream shadow-editorial-sm'
                : 'bg-beige/70 text-charcoal hover:bg-beige'
            }`}
          >
            All Toolboxes ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center space-x-2 ${
                activeCategoryId === cat.id
                  ? 'bg-charcoal text-cream shadow-editorial-sm'
                  : 'bg-beige/70 text-charcoal hover:bg-beige'
              }`}
            >
              <span>{cat.title}</span>
              <span className="text-[10px] opacity-75">({cat.skills.length})</span>
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((group) => (
            <div
              key={group.id}
              className="bg-cream rounded-2xl border-2 border-charcoal shadow-editorial p-6 flex flex-col justify-between hover:shadow-editorial-lg transition-all duration-300"
            >
              <div>
                {/* Group Header */}
                <div className="flex items-start justify-between pb-4 border-b border-charcoal/15 mb-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-charcoal">
                      {group.title}
                    </h3>
                    <p className="text-xs text-secondary font-sans mt-0.5">
                      {group.subtitle}
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-beige/60 border border-charcoal/20 flex-shrink-0">
                    {getCategoryIcon(group.id)}
                  </div>
                </div>

                {/* Skills List in Category */}
                <div className="space-y-3">
                  {group.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-cream-warm border border-charcoal/10 hover:border-charcoal/30 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-charcoal font-sans flex items-center space-x-1.5">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                          )}
                          <span>{skill.name}</span>
                        </span>
                        {skill.highlight && (
                          <span className="text-[10px] font-mono uppercase tracking-wider text-terracotta font-bold">
                            Core
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-secondary font-sans leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group Footer Tag */}
              <div className="pt-4 mt-4 border-t border-dashed border-charcoal/20 flex items-center justify-between text-[11px] font-mono text-secondary">
                <span>Verified in project work</span>
                <span className="text-terracotta font-semibold">✦ {group.skills.length} skills</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

