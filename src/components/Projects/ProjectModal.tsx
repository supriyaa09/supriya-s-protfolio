import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldAlert, CheckCircle2, ArrowRight, Layers, Cpu, Code } from 'lucide-react';
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

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderIllustration = () => {
    switch (project.illustrationType) {
      case 'railway':
        return <RailwaySystemIllustration className="w-full h-auto max-h-[300px]" />;
      case 'ai-control':
        return <AiControlPlaneIllustration className="w-full h-auto max-h-[300px]" />;
      case 'gaming':
        return <GamingArenaIllustration className="w-full h-auto max-h-[300px]" />;
      case 'safety':
        return <MobileSafetyIllustration className="w-full h-auto max-h-[300px]" />;
      case 'medical':
        return <MedicalImagingIllustration className="w-full h-auto max-h-[300px]" />;
      case 'empower':
        return <EmpowerPlatformIllustration className="w-full h-auto max-h-[300px]" />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-cream rounded-2xl border-2 border-charcoal shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-cream-warm border-b-2 border-charcoal/15 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-charcoal text-cream">
              CASE STUDY
            </span>
            <span className="text-xs font-mono text-secondary font-medium hidden sm:inline">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-beige/60 hover:bg-charcoal hover:text-cream border border-charcoal/20 transition-colors shadow-editorial-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Header & Title */}
          <div>
            <div className="inline-block px-3 py-1 rounded-md text-xs font-mono font-bold border border-charcoal/20 mb-3 bg-terracotta-subtle text-terracotta-dark">
              STATUS: {project.statusBadge.label}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight">
              {project.title}
            </h2>
            <p className="mt-3 text-lg font-serif text-secondary italic">
              {project.tagline}
            </p>
          </div>

          {/* Bespoke Project Visual / Illustration */}
          <div className="rounded-xl border-2 border-charcoal bg-beige/30 p-4 sm:p-6 flex justify-center items-center shadow-editorial-sm">
            {renderIllustration()}
          </div>

          {/* Action Links (GitHub & Live Demo) */}
          <div className="flex flex-wrap items-center gap-4 pt-2 border-b border-charcoal/15 pb-6">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-charcoal text-cream text-xs font-mono font-bold uppercase tracking-wider rounded-lg border-2 border-charcoal shadow-editorial-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Repository on GitHub</span>
              </a>
            ) : (
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-beige/70 text-secondary text-xs font-mono font-medium rounded-lg border border-charcoal/20">
                <span>Repository: Documentation Reference (Internal/Restricted)</span>
              </div>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-terracotta text-cream text-xs font-mono font-bold uppercase tracking-wider rounded-lg border-2 border-charcoal shadow-editorial-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Explore Live Platform</span>
              </a>
            )}
          </div>

          {/* Overview & Problem Statement */}
          <div className="space-y-3">
            <h3 className="font-serif text-2xl text-charcoal flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-terracotta" />
              <span>Project Overview & Core Mission</span>
            </h3>
            <p className="text-secondary leading-relaxed font-sans text-base">
              {project.description}
            </p>
          </div>

          {/* System Architecture Highlights */}
          <div className="space-y-3">
            <h3 className="font-serif text-2xl text-charcoal flex items-center space-x-2">
              <Layers className="w-5 h-5 text-sage-dark" />
              <span>System Architecture & Capabilities</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {project.architectureHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-cream-warm border border-charcoal/15 shadow-sm text-sm text-secondary font-sans leading-relaxed"
                >
                  <span className="text-charcoal font-bold block mb-1">
                    ✦ Component {idx + 1}
                  </span>
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          {/* Workflow Stages */}
          <div className="space-y-3">
            <h3 className="font-serif text-2xl text-charcoal flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-terracotta" />
              <span>Operational Workflow & Pipeline</span>
            </h3>
            <div className="space-y-2.5">
              {project.workflowStages.map((stage, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-beige/40 border-l-4 border-l-terracotta border border-charcoal/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-full bg-charcoal text-cream text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    <strong className="text-charcoal text-sm">{stage.title}</strong>
                  </div>
                  <span className="text-xs text-secondary sm:text-right font-sans max-w-md">
                    {stage.details}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Contribution Highlight */}
          <div className="p-5 rounded-2xl bg-sage-subtle border-2 border-sage/40 space-y-3">
            <h3 className="font-serif text-xl text-sage-dark font-bold flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-sage-dark" />
              <span>Supriya's Individual Contribution</span>
            </h3>
            <ul className="space-y-2 text-sm text-charcoal font-sans leading-relaxed">
              {project.contributions.map((contribution, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-terracotta font-bold">➔</span>
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Design Decisions & Engineering Trade-offs */}
          <div className="space-y-3">
            <h3 className="font-serif text-2xl text-charcoal flex items-center space-x-2">
              <Code className="w-5 h-5 text-charcoal" />
              <span>Design Decisions & Engineering Rigor</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.designDecisions.map((decision, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-cream-warm border border-dashed border-charcoal/30 text-xs font-sans text-secondary leading-relaxed"
                >
                  <span className="font-mono font-bold text-charcoal block mb-0.5">Decision #{idx + 1}:</span>
                  {decision}
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Badges */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-secondary">
              TECHNOLOGIES DEPLOYED
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-cream-warm border border-charcoal/20 text-charcoal shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Verified Metrics & Disclaimers */}
          {project.metricsOrDisclaimers && project.metricsOrDisclaimers.length > 0 && (
            <div className="space-y-2 pt-2">
              {project.metricsOrDisclaimers.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border text-xs leading-relaxed flex items-start space-x-3 ${
                    item.type === 'disclaimer'
                      ? 'bg-terracotta-subtle border-terracotta/40 text-terracotta-dark'
                      : 'bg-beige/60 border-charcoal/20 text-secondary'
                  }`}
                >
                  <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5 text-terracotta" />
                  <div>
                    <strong className="block font-bold mb-0.5 uppercase tracking-wider font-mono">
                      {item.label}
                    </strong>
                    <span>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-cream-warm border-t border-charcoal/15 flex items-center justify-between flex-shrink-0">
          <span className="text-xs font-mono text-secondary">
            Project Archive ✦ Supriya Editorial Portfolio
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-charcoal text-cream text-xs font-mono font-bold uppercase tracking-wider rounded-lg border-2 border-charcoal shadow-editorial-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
