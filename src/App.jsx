import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, Linkedin, Mail, MessageCircle, ExternalLink, 
  ChevronRight, Download, Menu, X, ArrowUpRight, MapPin
} from 'lucide-react';
import { 
  NAVIGATION, PERSONAL_INFO, COMPANIES, 
  CLIENT_PROJECTS, SKILLS, CONTACT_LINKS 
} from './data';

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12">
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-indigo-500 font-bold tracking-widest uppercase text-sm mb-2 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-extrabold text-white"
    >
      {children}
    </motion.h2>
  </div>
);

const GlassCard = ({ children, className = "" }) => (
  <motion.div 
    layout
    whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
    className={`bg-white/5 overflow-hidden backdrop-blur-md border border-white/10 rounded-3xl hover:border-indigo-500/30 hover:bg-white/10 transition-colors duration-500 ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY <= bottom) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#030712] text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-white">
      
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#030712]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black text-white"
          >
            MZK<span className="text-indigo-500">.</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <a 
                key={item.href} 
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-white ${activeSection === item.href.slice(1) ? 'text-indigo-500' : 'text-slate-400'}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#030712] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {NAVIGATION.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-indigo-500 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] -z-10" />
          
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 max-w-2xl order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold mb-6">
                    Available for new opportunities
                  </span>
                  <div className="mb-8 text-left">
                    <h2 className="text-2xl font-bold text-white mb-2">{PERSONAL_INFO.name}</h2>
                    <div className="h-1 w-20 bg-indigo-500 rounded-full mb-4" />
                    <p className="text-indigo-500 font-bold tracking-widest uppercase text-sm mb-4">
                      {PERSONAL_INFO.role} • {PERSONAL_INFO.title}
                    </p>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                      Building the <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">future</span> of web apps.
                    </h1>
                  </div>
                  <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
                    {PERSONAL_INFO.about}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="#projects" 
                      className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-2"
                    >
                      View My Work <ChevronRight size={20} />
                    </a>
                    <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all flex items-center gap-2">
                      Download CV <Download size={20} />
                    </button>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 flex justify-center order-1 lg:order-2"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-white/10 ring-8 ring-[#030712]">
                    <img 
                      src={PERSONAL_INFO.profileImage} 
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section id="companies" className="py-24 bg-white/[0.02]">
          <div className="container mx-auto px-6 md:px-12">
            <SectionHeading subtitle="Professional Journey">Companies where I worked</SectionHeading>
            
            <div className="grid gap-8">
              {COMPANIES.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    delay: index * 0.1,
                  }}
                >
                  <GlassCard className="p-8 group">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{job.company}</h3>
                            {job.link && (
                              <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                                <ExternalLink size={16} />
                              </a>
                            )}
                          </div>
                          <div className="flex items-center gap-4">
                            <p className="text-indigo-500 font-semibold">{job.role}</p>
                            <span className="flex items-center gap-1 text-slate-500 text-xs">
                              <MapPin size={12} /> {job.location}
                            </span>
                          </div>
                        </div>
                        <div className="text-slate-500 font-medium text-sm md:text-right bg-white/5 px-4 py-2 rounded-full">
                          {job.duration}
                        </div>
                      </div>
                    <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="container mx-auto px-6 md:px-12">
            <SectionHeading subtitle="Portfolio">Client Based Projects</SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CLIENT_PROJECTS.map((project, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    delay: index * 0.1,
                  }}
                >
                  <GlassCard className="h-full group">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent opacity-60" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                        <a href={project.link} className="text-slate-400 hover:text-white transition-colors">
                          <ArrowUpRight size={20} />
                        </a>
                      </div>
                      <p className="text-slate-400 mb-6 text-sm line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-white/[0.02]">
          <div className="container mx-auto px-6 md:px-12">
            <SectionHeading subtitle="Expertise">Technical Skills</SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILLS.map((skillGroup, index) => (
                <motion.div 
                  key={index}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: index * 0.05 
                  }}
                >
                  <GlassCard className="p-6 h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-indigo-500/10 text-indigo-500 rounded-lg">
                        <skillGroup.icon size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-white">{skillGroup.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item) => (
                        <span key={item} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs text-slate-400">
                          {item}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeading subtitle="Contact Me">Get in touch</SectionHeading>
              <p className="text-xl text-slate-400 mb-12">
                Have a project in mind or just want to say hi? Feel free to reach out through any of these platforms.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {CONTACT_LINKS.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GlassCard className={`p-8 hover:border-indigo-500/50 transition-all ${link.color}`}>
                      <div className="flex flex-col items-center gap-4">
                        <link.icon size={32} />
                        <div>
                          <p className="text-sm font-bold uppercase tracking-wider mb-1 opacity-80">{link.name}</p>
                          <p className="text-lg font-bold text-white">{link.value}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="text-2xl font-black text-white mb-2">MZK<span className="text-indigo-500">.</span></div>
              <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
            </div>
            
            <div className="flex gap-6">
              <a href={PERSONAL_INFO.github} className="text-slate-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href={PERSONAL_INFO.linkedin} className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={PERSONAL_INFO.whatsapp} className="text-slate-400 hover:text-white transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
