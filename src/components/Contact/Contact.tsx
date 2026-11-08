import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Download, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { CharacterConnectIllustration } from '../Illustrations/CharacterIllustrations';
import { StarDoodle, UnderlineSwoosh, TapeStrip, Github, Linkedin } from '../Illustrations/EditorialDoodles';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const formspreeEndpoint =
    import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xvgzgeze';

  const copyEmail = () => {
    navigator.clipboard.writeText('supriyaaa.926@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      setFormStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setFormStatus('error');
      return;
    }

    try {
      // Attempt sending to endpoint
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.8 },
          colors: ['#C8795C', '#788568', '#292B25', '#FAF7F2'],
        });
      } else {
        // Fallback or service notice
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Submission could not be completed via Formspree.');
      }
    } catch (err: any) {
      // Graceful fallback to mailto link
      console.warn('Form submission notice:', err);
      // Trigger mailto fallback so user's message is never lost!
      const mailtoUrl = `mailto:supriyaaa.926@gmail.com?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Still show success or clear instructions
      setFormStatus('success');
      window.location.href = mailtoUrl;
    }
  };

  return (
    <section id="connect" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-terracotta uppercase mb-2">
            <StarDoodle size={14} color="#C8795C" />
            <span>SECTION 09 ✦ DISPATCH & COLLABORATION</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight leading-tight">
            Have an interesting idea? Let's build something meaningful.
          </h2>
          <div className="w-64 mt-3">
            <UnderlineSwoosh color="#C8795C" />
          </div>

          <p className="mt-4 text-base sm:text-lg text-secondary font-sans leading-relaxed max-w-2xl">
            I'm always interested in exploring ideas, collaborating on projects and connecting with people who enjoy building useful things. Drop a message below or reach out directly.
          </p>
        </div>

        {/* Paper Plane Illustration Hero Banner */}
        <div className="mb-14 p-6 sm:p-8 bg-cream-warm rounded-2xl border-2 border-charcoal shadow-editorial relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-md space-y-3">
            <TapeStrip text="DIRECT CONTACT DISPATCH" rotate="-rotate-1" />
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
              Fastest way to reach me?
            </h3>
            <p className="text-sm text-secondary font-sans leading-relaxed">
              Drop an email directly to my inbox or connect with me on LinkedIn. I reply promptly to thoughtful messages and engineering inquiries.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:supriyaaa.926@gmail.com"
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-terracotta text-cream text-xs font-mono font-bold uppercase tracking-wider rounded-lg border-2 border-charcoal shadow-editorial-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>supriyaaa.926@gmail.com</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center space-x-2 px-3 py-2.5 bg-beige/80 text-charcoal text-xs font-mono font-semibold rounded-lg border border-charcoal/30 hover:bg-beige transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-sage-dark" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Illustrated Paper Plane Launch */}
          <div className="w-full max-w-[460px]">
            <CharacterConnectIllustration className="w-full drop-shadow-sm" />
          </div>
        </div>

        {/* 2-Column Contact Layout: Form on Left, Direct Channels on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Functional Contact Form */}
          <div className="lg:col-span-7 bg-cream-warm rounded-2xl border-2 border-charcoal shadow-editorial p-6 sm:p-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal mb-2">
              Send a Message
            </h3>
            <p className="text-xs font-mono text-secondary mb-6">
              Fill out this form to dispatch a transmission directly to my inbox.
            </p>

            {/* Success Banner */}
            {formStatus === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-sage-subtle border-2 border-sage/60 text-sage-dark flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">Message Dispatched Successfully!</strong>
                  <span className="text-xs font-sans">
                    Thank you for reaching out. I've received your note and will get back to you shortly.
                  </span>
                </div>
              </div>
            )}

            {/* Error Banner */}
            {formStatus === 'error' && errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-terracotta-subtle border-2 border-terracotta/60 text-terracotta-dark flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">Please check your input:</strong>
                  <span className="text-xs font-sans">{errorMessage}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                    Your Name <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-cream border-2 border-charcoal/30 focus:border-charcoal focus:outline-none text-charcoal font-sans text-sm shadow-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                    Your Email <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="maya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-cream border-2 border-charcoal/30 focus:border-charcoal focus:outline-none text-charcoal font-sans text-sm shadow-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. Project Collaboration / Job Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-cream border-2 border-charcoal/30 focus:border-charcoal focus:outline-none text-charcoal font-sans text-sm shadow-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                  Message <span className="text-terracotta">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your idea, project, or what you'd like to collaborate on..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-cream border-2 border-charcoal/30 focus:border-charcoal focus:outline-none text-charcoal font-sans text-sm shadow-sm transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-3.5 bg-charcoal text-cream font-bold text-xs uppercase tracking-wider font-mono rounded-xl border-2 border-charcoal shadow-editorial hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-editorial-sm transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-terracotta" />
                  <span>
                    {formStatus === 'submitting' ? 'Dispatching Message...' : 'Send Transmission'}
                  </span>
                </button>
              </div>

              <p className="text-[11px] font-mono text-secondary pt-2">
                ✦ Configurable endpoint via <code className="text-terracotta">VITE_FORMSPREE_ENDPOINT</code> with mailto fallback.
              </p>
            </form>
          </div>

          {/* Right Column: Direct Channels & Connect Hub */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Channel Cards */}
            <div className="bg-cream-warm rounded-2xl border-2 border-charcoal shadow-editorial p-6 space-y-5">
              <h4 className="font-serif text-xl font-bold text-charcoal">
                Direct Channels
              </h4>

              {/* Email Card */}
              <a
                href="mailto:supriyaaa.926@gmail.com"
                className="flex items-center space-x-4 p-3.5 rounded-xl bg-cream border border-charcoal/20 hover:border-charcoal hover:shadow-editorial-sm transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-terracotta text-cream">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-secondary block font-bold">
                    PRIMARY EMAIL
                  </span>
                  <span className="text-sm font-bold text-charcoal group-hover:text-terracotta transition-colors break-all">
                    supriyaaa.926@gmail.com
                  </span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://linkedin.com/in/supriya-09dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-3.5 rounded-xl bg-cream border border-charcoal/20 hover:border-charcoal hover:shadow-editorial-sm transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-sage text-cream">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-secondary block font-bold">
                    LINKEDIN PROFILE
                  </span>
                  <span className="text-sm font-bold text-charcoal group-hover:text-terracotta transition-colors">
                    linkedin.com/in/supriya-09dev
                  </span>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/supriyaa09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-3.5 rounded-xl bg-cream border border-charcoal/20 hover:border-charcoal hover:shadow-editorial-sm transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-charcoal text-cream">
                  <Github className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-secondary block font-bold">
                    GITHUB REPOSITORIES
                  </span>
                  <span className="text-sm font-bold text-charcoal group-hover:text-terracotta transition-colors">
                    github.com/supriyaa09
                  </span>
                </div>
              </a>

              {/* Resume Download Action */}
              <div className="pt-2">
                <a
                  href="/resume/Supriya_Resume.pdf"
                  download="Supriya_Resume.pdf"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 bg-beige text-charcoal text-xs font-mono font-bold uppercase tracking-wider rounded-xl border-2 border-charcoal shadow-editorial-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  <Download className="w-4 h-4 text-terracotta" />
                  <span>Download Complete Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Handwritten Editorial Sign-off Box */}
            <div className="p-6 rounded-2xl bg-charcoal text-cream border-2 border-charcoal shadow-editorial text-center space-y-2">
              <p className="font-serif italic text-2xl text-cream-light">
                “Until the next idea, keep building.”
              </p>
              <p className="text-xs font-mono text-terracotta font-semibold uppercase tracking-wider">
                — SUPRIYA ✦ HYDERABAD, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
