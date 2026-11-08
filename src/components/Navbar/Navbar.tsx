import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { label: 'HOME', href: '#home', id: 'home' },
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'WORK', href: '#work', id: 'work' },
  { label: 'SKILLS', href: '#skills', id: 'skills' },
  { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
  { label: 'BEYOND CODE', href: '#beyond-code', id: 'beyond-code' },
  { label: 'ACHIEVEMENTS', href: '#achievements', id: 'achievements' },
  { label: 'CONNECT', href: '#connect', id: 'connect' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md border-b-2 border-charcoal/15 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Editorial Monogram */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="group flex items-center space-x-2 text-charcoal hover:opacity-90 transition-opacity"
          >
            <div className="w-10 h-10 rounded-lg bg-terracotta flex items-center justify-center text-cream font-serif text-2xl font-bold shadow-editorial-sm border-2 border-charcoal group-hover:-rotate-3 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-charcoal leading-none">
                SUPRIYA
              </span>
              <span className="text-[10px] font-mono tracking-widest text-secondary uppercase font-semibold">
                EDITORIAL PORTFOLIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2 bg-beige/60 px-4 py-2 rounded-full border border-charcoal/20 shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3 py-1.5 text-xs font-bold tracking-wider font-sans transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-cream bg-charcoal shadow-sm'
                      : 'text-charcoal/80 hover:text-charcoal hover:bg-cream/80'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-terracotta rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Resume Download Action */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="/resume/Supriya_Resume.pdf"
              download="Supriya_Resume.pdf"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-cream text-charcoal text-xs font-bold font-sans uppercase tracking-wider rounded-lg border-2 border-charcoal shadow-editorial-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              <Download className="w-4 h-4 text-terracotta" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center space-x-2">
            <a
              href="/resume/Supriya_Resume.pdf"
              download="Supriya_Resume.pdf"
              className="inline-flex md:hidden items-center justify-center p-2 bg-cream text-charcoal rounded-lg border-2 border-charcoal shadow-editorial-sm"
              title="Download Resume"
            >
              <Download className="w-4 h-4 text-terracotta" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-cream text-charcoal rounded-lg border-2 border-charcoal shadow-editorial-sm hover:bg-beige transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-cream-light border-b-2 border-charcoal shadow-lg px-6 pt-4 pb-6 mt-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-bold tracking-wider font-sans transition-all ${
                    isActive
                      ? 'bg-charcoal text-cream shadow-editorial-sm'
                      : 'text-charcoal hover:bg-beige/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-terracotta" />}
                </a>
              );
            })}

            <div className="pt-4 border-t border-charcoal/20">
              <a
                href="/resume/Supriya_Resume.pdf"
                download="Supriya_Resume.pdf"
                className="flex items-center justify-center space-x-2 w-full py-3 bg-terracotta text-cream font-bold text-xs uppercase tracking-wider rounded-lg border-2 border-charcoal shadow-editorial"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

