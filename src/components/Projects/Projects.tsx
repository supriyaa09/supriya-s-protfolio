import React, { useState } from 'react';
import { projectsData, Project } from '../../data/projects';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { ProjectModal } from './ProjectModal';
import { CharacterProjectIllustration } from '../Illustrations/CharacterIllustrations';
import { StarDoodle, UnderlineSwoosh } from '../Illustrations/EditorialDoodles';
import { Filter, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'ai' | 'systems' | 'mobile'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects (06)' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'systems', label: 'Systems & Enterprise' },
    { id: 'mobile', label: 'Edge & Mobile' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'ai') {
      return project.id === 'vave' || project.id === 'curalight' || project.id === 'railassist';
    }
    if (selectedFilter === 'systems') {
      return project.id === 'railassist' || project.id === 'aethelgard' || project.id === 'empower-her-path';
    }
    if (selectedFilter === 'mobile') {
      return project.id === 'nyra' || project.id === 'curalight';
    }
    return true;
  });

  return (
    <section id="work" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Top Header & Character Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-terracotta uppercase mb-2">
              <StarDoodle size={14} color="#C8795C" />
              <span>SECTION 03 ✦ SELECTED WORK & CONTRIBUTIONS</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight leading-tight">
              Things I've built, explored and contributed to.
            </h2>
            <div className="w-56 mt-3">
              <UnderlineSwoosh color="#C8795C" />
            </div>

            <p className="mt-4 text-base sm:text-lg text-secondary font-sans leading-relaxed max-w-xl">
              An editorial archive of enterprise railway software, multi-agent control planes, real-time multiplayer arenas, mobile safety telemetry, and medical edge ML. Each project represents documented engineering decisions and verified contributions.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[380px]">
              <CharacterProjectIllustration className="w-full drop-shadow-sm" />
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-charcoal/15">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-secondary mr-2 flex items-center space-x-1">
              <Filter className="w-3.5 h-3.5" />
              <span>FILTER:</span>
            </span>
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                  selectedFilter === tab.id
                    ? 'bg-charcoal text-cream shadow-editorial-sm'
                    : 'bg-beige/60 text-charcoal/80 hover:bg-beige hover:text-charcoal'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-secondary">
            Showing {filteredProjects.length} of {projectsData.length} Projects
          </span>
        </div>

        {/* Project Cards List */}
        <div className="space-y-10">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpenModal={setActiveProject}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};

