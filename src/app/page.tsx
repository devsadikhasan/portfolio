'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLenis } from '../hooks/useLenis';
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Download,
  Mail,
  Globe,
  Monitor,
  Server,
  Cloud,
  Clock,
  Timer,
  MessageCircle,
  Star,
  MapPin,
  ChevronRight,
} from 'lucide-react';

export default function Home() {
  useLenis();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Project', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const filters = ['All', 'Web Development', 'Wordpress'];

  const projects = [
    {
      title: 'sickfits',
      url: 'https://sickfits-sadik.vercel.app/',
      description: 'A full-stack e-commerce platform featuring dynamic product management, cart functionality, and a secure checkout process.',
      tech: ['HTML', 'Javascript', 'TailwindCSS', 'PostgreSQL', 'Nodejs'],
      category: 'Web Development',
      icon: Globe,
    },
    {
      title: 'Pepper Tree Wellness',
      url: 'https://peppertreewellness.com/',
      description: 'A serene, professional web platform for a holistic wellness and hypnotherapy practice, featuring service showcases for EFT tapping and coaching, client testimonials, booking options, and built-in accessibility features.',
      tech: ['Elementor', 'PHP', 'JavaScript', 'CSS'],
      category: 'Wordpress',
      icon: Globe,
    },
    {
      title: 'WhatsApp Pulse Button',
      url: 'https://whatsapp-button-pulse.vercel.app/',
      description: 'A responsive, interactive UI component featuring a floating WhatsApp chat widget with a continuous CSS pulse animation to increase user conversion rates.',
      tech: ['HTML', 'CSS'],
      category: 'Web Development',
      icon: Globe,
    },
   
  ];

  const filteredProjects = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  const skillCategories = [
    {
      category: 'BackEnd Development',
      description: 'Building scalable, secure, high-performance backend systems.',
      skills: ['Node.js', 'Express.js', 'NestJS', 'GraphQL'],
      icon: Globe,
    },
    {
      category: 'FrontEnd Development',
      description: 'Building modern, responsive, and user-friendly interfaces with a strong focus..',
      skills: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS'],
      icon: Monitor,
    },
    {
      category: 'Databases',
      description: 'Designing scalable, secure, high-performance databases.',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
      icon: Server,
    },
    {
      category: 'Cloud & Deployment',
      description: 'Deploying and managing scalable, reliable applications and infrastructure.',
      skills: ['Vercel'],
      icon: Cloud,
    },
  ];

  const whyItems = [
    {
      title: 'Fast Delivery',
      desc: 'Quick turnaround times without compromising on quality. Your project will be delivered on schedule.',
      tag: 'On-time, always',
      icon: Clock,
      chipIcon: Timer,
    },
    {
      title: 'Great Communication',
      desc: 'Regular updates, clear documentation, and responsive communication throughout the project lifecycle.',
      tag: 'Always reachable',
      icon: MessageCircle,
      chipIcon: MessageCircle,
    },
    {
      title: 'Quality Assured',
      desc: 'Rigorous testing and code review processes ensure robust, scalable, and maintainable solutions.',
      tag: 'Test & review',
      icon: Star,
      chipIcon: Star,
    },
  ];

  return (
    <div className="min-h-screen bg-[#021031] text-white relative overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#home"
            className="text-[28px] sm:text-[40px] font-medium text-white tracking-tight"
            style={{ fontFamily: 'var(--font-spectral), ui-serif, Georgia, serif', fontVariant: 'small-caps' }}
          >
            Sadik
          </a>

          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-11 px-8 py-4 bg-[#155dfc]/20 rounded-full backdrop-blur-sm">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-white text-base lg:text-xl font-medium hover:text-[#cad5e2] transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3.5 bg-[#155dfc] hover:bg-[#1050e0] text-white rounded-full text-base font-medium transition-colors"
          >
            Hire Me
            <ArrowRight size={18} />
          </a>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#021031]/95 backdrop-blur-md border-t border-white/5 px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-[#cad5e2] hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#155dfc] hover:bg-[#1050e0] text-white rounded-full text-base font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hire Me
              <ArrowRight size={18} />
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        {/* Hero Background Ellipses */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[400px] rounded-full bg-[#155dfc] opacity-30 blur-[400px] pointer-events-none" />
        <div className="absolute top-[300px] left-1/2 -translate-x-1/2 w-[1200px] h-[300px] rounded-full bg-[#155dfc] opacity-30 blur-[400px] pointer-events-none" />

        {/* Glassmorphic Vertical Bars */}
        <div className="absolute right-0 top-0 bottom-0 w-[200px] hidden xl:flex flex-row opacity-20 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-b from-white/20 via-transparent to-black/20 backdrop-blur-[100px]"
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left */}
            <div className="order-2 lg:order-1 lg:col-span-5">
              <p className="text-3xl sm:text-4xl lg:text-[56px] font-bold bg-gradient-to-r from-[#155dfc] to-white bg-clip-text text-transparent leading-tight">
                I&apos;m Sadik Hasan
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-[56px] font-bold text-white leading-tight mt-2">
                Start building websites people remember
              </h1>
              <p className="text-[#cad5e2] text-base sm:text-lg lg:text-xl mt-6 max-w-lg leading-relaxed">
                Full-Stack Web Developer with experience crafting scalable solutions using Node.js, React.js,
                and modern web technologies.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#155dfc] hover:bg-[#1050e0] text-white rounded-full text-base font-medium transition-all"
                >
                  <Phone size={18} />
                  Contact Me
                </a>
                <a
                  href="/CV.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent hover:bg-white/5 text-white rounded-full text-base font-medium transition-all border border-[#155dfc]/30 hover:border-[#155dfc]/60"
                >
                  <Download size={18} className="text-[#155dfc]" />
                  Download CV
                  <ArrowRight size={16} className="text-[#155dfc]" />
                </a>
              </div>
            </div>

            {/* Right - Image + Card */}
            <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col items-center">
              <div className="relative flex justify-center items-center min-h-[400px] sm:min-h-[500px] w-full">
                {/* Gradient ellipses behind image */}
                <div className="absolute bottom-0 left-[10%] w-[250px] h-[250px] rounded-full bg-gradient-to-br from-[#300a96] to-[#6842f7] opacity-50 blur-[80px] pointer-events-none" />
                <div className="absolute bottom-[10%] right-[20%] w-[250px] h-[250px] rounded-full bg-gradient-to-br from-[#300a96] to-[#6842f7] opacity-50 blur-[80px] pointer-events-none" />

                <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden z-10">
                  <Image src="/sadik.png" alt="Md Sadik hasan" width={500} height={500} className="w-full h-full object-cover" priority />
                </div>

                {/* Floating Info Card — desktop only */}
                <div className="hidden md:block absolute top-[5%] right-0 bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-5 w-[280px] shadow-2xl z-20">
                  <ul className="space-y-2 text-xs text-[#cad5e2]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#155dfc] mt-0.5">•</span>
                      <span>Full-Stack Development Internship</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#155dfc] mt-0.5">•</span>
                      <span>Scalable & High-Performance Web Solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#155dfc] mt-0.5">•</span>
                      <span>Expertise in Node.js & React.js</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#155dfc] mt-0.5">•</span>
                      <span>Modern Web Technologies & Clean Architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#155dfc] mt-0.5">•</span>
                      <span>Responsive, Fast & User-Centric Applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#155dfc] mt-0.5">•</span>
                      <span>Building Reliable Frontend & Backend Systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#155dfc] mt-0.5">•</span>
                      <span>Available for Projects & Collaboration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#155dfc] mt-0.5">•</span>
                      <span>Let&apos;s Connect & Build Something Great</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Expertise Card — mobile only, directly under image */}
              <div className="md:hidden mt-6 bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-5 w-full max-w-md mx-auto">
                <ul className="space-y-2 text-xs text-[#cad5e2]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#155dfc] mt-0.5">•</span>
                    <span>Full-Stack Development Internship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#155dfc] mt-0.5">•</span>
                    <span>Scalable & High-Performance Web Solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#155dfc] mt-0.5">•</span>
                    <span>Expertise in Node.js & React.js</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#155dfc] mt-0.5">•</span>
                    <span>Modern Web Technologies & Clean Architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#155dfc] mt-0.5">•</span>
                    <span>Responsive, Fast & User-Centric Applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#155dfc] mt-0.5">•</span>
                    <span>Building Reliable Frontend & Backend Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#155dfc] mt-0.5">•</span>
                    <span>Available for Projects & Collaboration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#155dfc] mt-0.5">•</span>
                    <span>Let&apos;s Connect & Build Something Great</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="relative py-20 z-10">
        {/* Subtle side glow */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-60 h-[400px] bg-[#155dfc] opacity-10 blur-[300px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-semibold text-white mb-3">About Me</h2>
            <p className="text-[#cad5e2] text-base sm:text-lg lg:text-xl max-w-lg mx-auto">
              Full-Stack Web Developer with experience building scalable, web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skillCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div key={i} className="relative bg-[#0b1522] rounded-3xl p-6 overflow-hidden">
                  {/* Subtle decorative accent lines */}
                  <div className="absolute top-0 right-8 w-px h-24 bg-gradient-to-b from-transparent via-[#155dfc]/20 to-transparent" />
                  <div className="absolute bottom-0 left-8 w-px h-24 bg-gradient-to-t from-transparent via-[#155dfc]/20 to-transparent" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#155dfc]/10 flex items-center justify-center">
                        <Icon size={22} className="text-[#155dfc]" />
                      </div>
                      <h3 className="text-white text-sm font-semibold">{cat.category}</h3>
                    </div>
                    <div className="w-full h-px bg-[#153746] mb-4" />
                    <p className="text-[#cad5e2] text-xs sm:text-sm mb-4 leading-relaxed">{cat.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((s) => (
                        <span key={s} className="px-3 py-1.5 bg-[#112a36] text-white text-xs rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Projects */}
      <section id="projects" className="relative py-20 z-10">
        {/* Subtle side glow */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-60 h-[400px] bg-[#155dfc] opacity-10 blur-[300px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-semibold text-white mb-3">Feature Projects</h2>
            <p className="text-[#cad5e2] text-base sm:text-lg max-w-lg mx-auto mb-8">
              A showcase of my recent work spanning various industries and technologies
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter
                      ? 'bg-[#155dfc] text-white'
                      : 'bg-transparent text-white hover:bg-white/5 border border-white/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => {
              const Icon = project.icon;
              return (
                <div
                  key={i}
                  className="bg-[#0b1522] rounded-3xl p-6 hover:border-white/10 transition-all border border-transparent"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <div className="absolute inset-0 rounded-full bg-[#155dfc]/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon size={24} className="text-[#155dfc]" />
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-[#cad5e2] block">{project.category}</span>
                      <h3 className="text-lg sm:text-xl font-medium text-white">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-[#cad5e2] text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="w-full h-px bg-[#153746] mb-4" />
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-[#112a36] text-white text-xs rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#155dfc] hover:text-white text-sm font-medium transition-colors"
                  >
                    View Projects <ChevronRight size={14} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="relative py-20 z-10 overflow-hidden bg-[#12172f]">
        {/* Decorative ellipses */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[300px] rounded-full bg-[#155dfc] opacity-15 blur-[400px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[300px] rounded-full bg-[#155dfc] opacity-15 blur-[400px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-52 h-52 rounded-full bg-[#155dfc] opacity-20 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-[#155dfc] opacity-10 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-semibold text-white mb-3">Why work with me</h2>
            <p className="text-[#cad5e2] text-base sm:text-lg max-w-lg mx-auto">
              Every project I take on is backed by the same commitment: speed, quality, and open communication.
            </p>
          </div>

          {/* Staggered layout matching Figma */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5">
            {/* Left card — vertically centered on desktop */}
            <div className="lg:row-span-2 lg:flex lg:items-center">
              {(() => {
                const item = whyItems[2];
                const Icon = item.icon;
                const ChipIcon = item.chipIcon;
                return (
                  <div className="flex items-start gap-4 bg-[#0b1522] rounded-3xl p-6 border border-white/5 w-full">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#155dfc]/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={28} className="text-[#155dfc]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-[#cad5e2] text-sm mb-3 leading-relaxed">{item.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs text-white bg-[#155dfc]/20 px-3 py-1.5 rounded-full">
                        <ChipIcon size={12} />
                        {item.tag}
                      </span>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Right top card */}
            <div>
              {(() => {
                const item = whyItems[0];
                const Icon = item.icon;
                const ChipIcon = item.chipIcon;
                return (
                  <div className="flex items-start gap-4 bg-[#0b1522] rounded-3xl p-6 border border-white/5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#155dfc]/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={28} className="text-[#155dfc]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-[#cad5e2] text-sm mb-3 leading-relaxed">{item.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs text-white bg-[#155dfc]/20 px-3 py-1.5 rounded-full">
                        <ChipIcon size={12} />
                        {item.tag}
                      </span>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Right bottom card */}
            <div>
              {(() => {
                const item = whyItems[1];
                const Icon = item.icon;
                const ChipIcon = item.chipIcon;
                return (
                  <div className="flex items-start gap-4 bg-[#0b1522] rounded-3xl p-6 border border-white/5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#155dfc]/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={28} className="text-[#155dfc]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-[#cad5e2] text-sm mb-3 leading-relaxed">{item.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs text-white bg-[#155dfc]/20 px-3 py-1.5 rounded-full">
                        <ChipIcon size={12} />
                        {item.tag}
                      </span>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-20 z-10 overflow-hidden">
        {/* Background Glow */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-5xl h-32 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center bottom, rgba(21,93,252,0.5) 0%, rgba(21,93,252,0.15) 40%, transparent 75%)',
          }}
        />

        {/* Decorative code brackets */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[12rem] sm:text-[18rem] font-mono font-bold text-white/[0.03] select-none pointer-events-none leading-none tracking-tighter">
          &lt;/&gt;
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-[#cad5e2] text-base sm:text-lg mb-10 max-w-md mx-auto">
            Let&apos;s discuss how I can help bring your ideas to life with cutting-edge technology and exceptional user
            experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:devsadikbd@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#155dfc] hover:bg-[#1050e0] text-white rounded-full text-sm font-medium transition-all"
            >
              <Mail size={16} />
              Get in touch
            </a>
            <a
              href="https://github.com/devmdsadikhasan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0b1522] hover:bg-[#112a36] text-white rounded-full text-sm font-medium transition-all border border-white/10"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/devmdsadikhasan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0b1522] hover:bg-[#112a36] text-white rounded-full text-sm font-medium transition-all border border-white/10"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="tel:+8801333099467"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0b1522] hover:bg-[#112a36] text-white rounded-full text-sm font-medium transition-all border border-white/10"
            >
              <Phone size={16} />
              Call me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 bg-[#021031] border-t border-white/5 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <h4 className="text-white text-lg font-normal mb-4">Contact Me</h4>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#b5b5b5]">
              <span className="flex items-center gap-2">
                <Phone size={16} className="text-[#155dfc]" />
                +880 1333099467
              </span>
              <span className="flex items-center gap-2">
                <Mail size={16} className="text-[#155dfc]" />
                devsadikbd@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-[#155dfc]" />
                Dhaka, Bangladesh
              </span>
            </div>
          </div>
          <div className="w-full h-px bg-white/10 mb-4" />
          <p className="text-center text-[#b5b5b5] text-xs">© {new Date().getFullYear()} Md Sadik Hasan.</p>
        </div>
      </footer>
    </div>
  );
}
