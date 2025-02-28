import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Code, User, Briefcase, Award, FileText, MessageSquare, Volume2, VolumeX, Menu, X } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';

interface SidebarProps {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export function Sidebar({ 
  activeSection, 
  setActiveSection,
  isMobileMenuOpen,
  toggleMobileMenu
}: SidebarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isPlaying, toggleSound } = useAudio();
  
  // Motion values for drag with initial position
  const x = useMotionValue(window.innerWidth - 80); // Initial x position (right side)
  const y = useMotionValue(window.innerHeight - 80); // Initial y position (bottom)

  // Update constraints on window resize
  useEffect(() => {
    const handleResize = () => {
      x.set(window.innerWidth - 80);
      y.set(window.innerHeight - 80);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [x, y]);
  
  // Update scroll progress for visual indicator
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / windowHeight;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map sections to icons
  const sectionIcons = {
    home: <Code size={18} />,
    about: <User size={18} />,
    projects: <Briefcase size={18} />,
    certifications: <Award size={18} />,
    resume: <FileText size={18} />,
    contact: <MessageSquare size={18} />
  };

  // Navigation items with proper casing
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  // Handle double click for sound toggle
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSound();
  };

  // Fix the transform type issue
  const scale = useTransform(
    [x, y],
    (latest: number[]) => Math.abs(latest[0] + latest[1]) > 0 ? 1.1 : 1
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 right-4 z-[60] p-3 rounded-lg bg-gray-900/90 text-gray-400 hover:text-white"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar - hidden on mobile unless menu is open */}
      <aside className={`
        fixed left-0 top-0 h-screen w-72 
        bg-slate-900 lg:bg-slate-900/50 lg:backdrop-blur-xl 
        border-r border-slate-800
        transition-transform duration-300 ease-in-out z-[51]
        lg:translate-x-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full overflow-y-auto">
      {/* Progress indicator (vertical line) */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gray-800/50">
        <motion.div 
          className="w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>
      
      <div className="flex flex-col p-4 relative">
        {/* Profile Section with glow effect */}
        <div className="flex flex-col items-center space-y-3">
          <div className="relative group">
            {/* Ambient glow behind profile image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Profile image with ring */}
            <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-white/20 shadow-xl group-hover:ring-white/40 group-hover:scale-105 transition-all duration-500">
              <img 
                src="/images/profile-image.jpg" 
                alt="Kelvin Nimely" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                      target.src = "/images/profile-image.jpg";
                }}
              />
            </div>
            
            {/* Subtle rotating border effect */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/30 animate-spin-slow" 
                 style={{ animationDuration: '15s' }} />
          </div>
          
          {/* Name and Title with gradient text */}
          <div className="text-center mt-1 space-y-0.5">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Kelvin Nimely
            </h1>
            <p className="text-xs font-medium text-gray-400">
              Software Engineer
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent my-4" />
        
        {/* Hire Me button */}
        <div className="px-4 mb-6">
          <button
            onClick={() => setActiveSection('contact')}
            className="w-full flex items-center gap-3 text-left py-2.5 px-4 rounded-lg 
                     bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                     border border-blue-500/20 hover:border-blue-500/40
                     transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Hire Me</span>
            </div>
            <div className="ml-auto flex items-center">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
            </div>
          </button>
        </div>

        {/* Navigation */}
        <nav className="w-full mt-1 flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveSection(item.id);
                    if (toggleMobileMenu && isMobileMenuOpen) toggleMobileMenu();
                  }}
                  className={`w-full flex items-center text-left py-2 px-3 rounded-lg transition-all duration-300 ease-out text-sm ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-l-4 border-blue-500 text-white font-medium translate-x-1 shadow-[0_0_15px_rgba(59,130,246,0.15)]' 
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/5 hover:border-l-4 hover:border-blue-500/50 hover:translate-x-1'
                  }`}
                >
                  <span className="mr-2.5 text-blue-400">
                    {sectionIcons[item.id as keyof typeof sectionIcons]}
                  </span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Certification Badges */}
        <div className="my-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Certifications</h3>
          <div className="flex gap-2">
            <div className="group relative">
              <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/60 p-1.5 rounded-lg text-xs font-medium flex items-center space-x-1 border border-blue-700/30 hover:border-blue-500/50 transition-colors">
                <img src="/google-icon.svg" alt="Google" className="w-3 h-3" />
                <span>IT Support</span>
              </div>
              {/* Tooltip */}
              <div className="absolute bottom-full left-0 mb-2 w-48 bg-gray-800 text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Google IT Support Professional Certificate
              </div>
            </div>
            
            <div className="group relative">
              <div className="bg-gradient-to-br from-blue-900/50 to-indigo-800/60 p-1.5 rounded-lg text-xs font-medium flex items-center space-x-1 border border-indigo-700/30 hover:border-indigo-500/50 transition-colors">
                <img src="/meta-icon.svg" alt="Meta" className="w-3 h-3" />
                <span>Frontend Dev</span>
              </div>
              {/* Tooltip */}
              <div className="absolute bottom-full left-0 mb-2 w-48 bg-gray-800 text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Meta Frontend Developer Professional Certificate
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Links with hover effects */}
        <div className="mt-auto pt-3 border-t border-white/5">
          <div className="flex justify-center space-x-2">
            <a 
                  href="https://github.com/OnlyGlapor" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800/50 p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 relative"
              aria-label="GitHub"
            >
              <Github size={18} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                GitHub
              </span>
            </a>
            
            <a 
                  href="https://lr.linkedin.com/in/kelvin-nimely-a790b8319" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800/50 p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 relative"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                LinkedIn
              </span>
            </a>
            
            <a 
              href="https://twitter.com/kelvin-nimely" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800/50 p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 relative"
              aria-label="Twitter"
            >
              <Twitter size={18} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Twitter
              </span>
            </a>
            
            <a 
                  href="mailto:nimely.solutions@gmail.com"
              className="group bg-gray-800/50 p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 relative"
              aria-label="Email"
            >
              <Mail size={18} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Email
              </span>
            </a>
          </div>
          
          <div className="text-center mt-3 text-[10px] text-gray-500">
            &copy; {new Date().getFullYear()} • Kelvin Nimely
              </div>
          </div>
        </div>
      </div>
    </aside>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[50]"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Draggable Audio Control - adjust position for mobile */}
      <motion.button
        drag
        dragMomentum={false}
        dragElastic={0.1}
        dragConstraints={{
          top: 0,
          left: 0,
          right: window.innerWidth - 48,
          bottom: window.innerHeight - 48
        }}
        whileDrag={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          x: window.innerWidth - 80,
          y: window.innerHeight - 80
        }}
        transition={{ delay: 1 }}
        style={{
          position: 'fixed',
          x,
          y,
          scale,
        }}
        onDoubleClick={handleDoubleClick}
        className={`hidden lg:block p-3 rounded-full backdrop-blur-sm 
                 border border-gray-800/50 
                 group z-50 shadow-lg cursor-grab active:cursor-grabbing
                 touch-none select-none
                 transition-all duration-500 ease-in-out
                 ${isPlaying 
                   ? 'bg-gray-900/90 hover:shadow-blue-500/20 hover:bg-gray-800/90 opacity-100 animate-pulse' 
                   : 'bg-gray-900/10 hover:shadow-blue-500/10 hover:bg-gray-800/30 opacity-10 hover:opacity-50'
                 }`}
      >
        <div className={`pointer-events-none ${isPlaying ? 'animate-pulse' : ''}`}>
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-blue-400" />
          ) : (
            <VolumeX className="w-4 h-4 text-gray-300/50 group-hover:text-blue-400 transition-colors duration-300" />
          )}
        </div>
        
        {/* Updated Tooltip */}
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 
                     rounded bg-gray-900/90 text-xs text-gray-400 opacity-0 
                     group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap
                     pointer-events-none backdrop-blur-sm">
          Double-click to {isPlaying ? 'mute' : 'play'} music
          <br />
          <span className="text-[10px] opacity-75">Drag to move</span>
        </span>
      </motion.button>

      {/* Fixed Audio Control for Mobile */}
      <button
        onClick={toggleSound}
        className={`lg:hidden fixed bottom-4 right-4 p-3 rounded-full backdrop-blur-sm 
                   border border-gray-800/50 z-50 ${
                     isPlaying 
                       ? 'bg-gray-900/90 opacity-90' 
                       : 'bg-gray-900/20 opacity-30'
                   }`}
      >
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-blue-400" />
        ) : (
          <VolumeX className="w-4 h-4 text-gray-400" />
        )}
      </button>
    </>
  );
}