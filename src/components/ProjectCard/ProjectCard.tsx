import React from 'react';
import { ArrowUpRight, BookOpen, Layers, CheckCircle } from 'lucide-react';
import { Project } from '../../data/projects';
import { Github } from '../Illustrations/EditorialDoodles';
import {
  RailwaySystemIllustration,
  AiControlPlaneIllustration,
  GamingArenaIllustration,
  MobileSafetyIllustration,
  MedicalImagingIllustration,
  EmpowerPlatformIllustration
} from '../Illustrations/ProjectIllustrations';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal, index }) => {
  const isEven = index % 2 === 0;

  const renderVisual = () => {
    switch (project.illustrationType) {
      case 'railway':
        return <RailwaySystemIllustration className="w-full h-auto max-h-[260px] drop-shadow-sm" />;
      case 'ai-control':
        return <AiControlPlaneIllustration className="w-full h-auto max-h-[260px] drop-shadow-sm" />;
      case 'gaming':
        return <GamingArenaIllustration className="w-full h-auto max-h-[260px] drop-shadow-sm" />;
      case 'safety':
        return <MobileSafetyIllustration className="w-full h-auto max-h-[260px] drop-shadow-sm" />;
      case 'medical':
        return <MedicalImagingIllustration className="w-full h-auto max-h-[260px] drop-shadow-sm" />;
      case 'empower':
        return <EmpowerPlatformIllustration className="w-full h-auto max-h-[260px] drop-shadow-sm" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-cream rounded-2xl border-2 border-charcoal shadow-editorial overflow-hidden transition-all duration-300 hover:shadow-editorial-lg group">
      {/* Top Editorial Index Bar */}
      <div className="px-5 py-3 bg-cream-warm border-b border-charcoal/15 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-terracotta" />
          <span className="font-bold text-charcoal tracking-wider">PROJECT NO. 0{index + 1}</span>
          <span className="text-secondary/60">/ 06</span>
        </div>

        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-beige/80 border border-charcoal/20 text-charcoal">
          {project.statusBadge.label}
        </span>
      </div>

      {/* Main 2-Column Asymmetric Card Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
        {/* Visual Column */}
        <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div
            onClick={() => onOpenModal(project)}
            className="cursor-pointer rounded-xl border-2 border-charcoal/80 bg-beige/30 p-4 transition-transform duration-300 group-hover:scale-[1.01] relative"
            title="Click to view complete case study"
          >
            {renderVisual()}
            {/* Quick action pill on hover */}
            <div className="absolute inset-0 bg-charcoal/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
              <span className="px-4 py-2 bg-charcoal text-cream text-xs font-mono font-bold uppercase tracking-wider rounded-lg shadow-editorial-sm">
                Open Case Study ➔
              </span>
            </div>
          </div>
        </div>

        {/* Info Column */}
        <div className={`lg:col-span-6 flex flex-col justify-center space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <div>
            <span className="text-xs font-mono font-bold text-terracotta uppercase tracking-wider block mb-1">
              {project.category}
            </span>
            <h3
              onClick={() => onOpenModal(project)}
              className="font-serif text-2xl sm:text-3xl text-charcoal leading-tight cursor-pointer hover:text-terracotta transition-colors"
            >
              {project.title}
            </h3>
          </div>

          <p className="text-secondary font-sans text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Key architecture highlight bullet */}
          <div className="p-3 rounded-lg bg-beige/50 border border-charcoal/15 text-xs text-charcoal font-sans flex items-start space-x-2">
            <span className="text-sage-dark font-bold">✦</span>
            <span>{project.architectureHighlights[0]}</span>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-cream-warm border border-charcoal/20 text-xs font-mono font-medium text-charcoal"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-1 rounded bg-beige/80 text-xs font-mono font-semibold text-secondary">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={() => onOpenModal(project)}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-charcoal text-cream text-xs font-mono font-bold uppercase tracking-wider rounded-lg border-2 border-charcoal shadow-editorial-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              <BookOpen className="w-3.5 h-3.5 text-terracotta" />
              <span>Read Case Study</span>
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-cream-warm text-charcoal text-xs font-mono font-bold uppercase tracking-wider rounded-lg border-2 border-charcoal shadow-editorial-sm hover:bg-beige/60 hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-secondary" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
