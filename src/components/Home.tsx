import { motion } from 'framer-motion';
import { ArrowRight, Github, Terminal, ExternalLink, Cpu, Code2, Mail } from 'lucide-react';

interface HomeProps {
  setActiveSection: (section: string) => void;
}

export function Home({ setActiveSection }: HomeProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Text reveal animation variants
  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Highlight animation variants
  const highlightVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveSection('projects');
  };

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveSection('resume');
  };

  const floatingIcons = [
    { icon: <Code2 size={20} />, color: "text-blue-400", delay: 0 },
    { icon: <Terminal size={20} />, color: "text-purple-400", delay: 0.2 },
    { icon: <Cpu size={20} />, color: "text-pink-400", delay: 0.4 },
    // Add more icons
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-4 lg:py-8 max-w-6xl relative"
    >
      {/* Decorative Elements - adjusted for mobile */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-500/10 rounded-full blur-3xl opacity-70" />

      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="relative w-96 h-96"
        >
          {/* You can add a 3D illustration, code animation, or geometric patterns here */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full animate-pulse" />
          <div className="absolute inset-4 bg-gradient-to-bl from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full animate-pulse delay-300" />
        </motion.div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: [0.4, 0.8, 0.4],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute ${item.color}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="space-y-6 lg:space-y-12 relative">
        {/* Hero Section with Mixed Animations */}
        <motion.div variants={itemVariants}>
          {/* Available for Hire Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-green-400">Available for Hire</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block"
            >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Software Engineer
            </span>
              <motion.div
                variants={highlightVariants}
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
              />
            </motion.div>
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="text-gray-200 inline-block"
            >
              &
            </motion.span>
            <br />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="relative inline-block"
            >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              IT Professional
            </span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
              />
            </motion.div>
          </h1>
          <motion.p
            variants={textRevealVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
            className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl leading-relaxed"
          >
            Building robust web applications and solving complex IT challenges with modern technologies and best practices.
          </motion.p>
        </motion.div>

        {/* CTA Buttons - made responsive */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              setActiveSection('contact');
            }}
            className="group relative overflow-hidden rounded-lg 
                     bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                     border border-blue-500/20 hover:border-blue-500/40
                     transition-all duration-300 w-full sm:w-auto"
          >
            <div className="relative flex items-center justify-center gap-3 px-4 sm:px-6 py-2.5 sm:py-3">
              <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-medium">Hire Me</span>
              </div>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
            </div>
          </a>

          <a 
            href="#projects" 
            onClick={handleProjectsClick}
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-0.5 w-full sm:w-auto"
          >
            <div className="relative flex items-center justify-center gap-2 rounded-[6px] bg-gray-900 px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 group-hover:bg-opacity-90">
              <span className="text-white text-sm sm:text-base">View Projects</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </a>

          <a 
            href="https://github.com/OnlyGlapor" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 p-0.5 w-full sm:w-auto"
          >
            <div className="relative flex items-center justify-center gap-2 rounded-[6px] bg-gray-900 px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 group-hover:bg-opacity-90">
              <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" />
              <span className="text-gray-400 group-hover:text-white transition-colors text-sm sm:text-base">GitHub Profile</span>
            </div>
          </a>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-12 lg:mt-20 space-y-4 sm:space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-200">Tech Stack</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { name: 'JavaScript', color: 'from-yellow-400/20 to-yellow-400/10', text: 'text-yellow-400', delay: 0 },
              { name: 'TypeScript', color: 'from-blue-400/20 to-blue-400/10', text: 'text-blue-400', delay: 0.1 },
              { name: 'React', color: 'from-cyan-400/20 to-cyan-400/10', text: 'text-cyan-400', delay: 0.2 },
              { name: 'Next.js', color: 'from-white/20 to-white/10', text: 'text-white', delay: 0.3 },
              { name: 'Django', color: 'from-green-500/20 to-green-500/10', text: 'text-green-500', delay: 0.4 },
              { name: 'AWS', color: 'from-orange-400/20 to-orange-400/10', text: 'text-orange-400', delay: 0.5 },
              { name: 'Node.js', color: 'from-green-400/20 to-green-400/10', text: 'text-green-400', delay: 0.6 },
              { name: 'Tailwind CSS', color: 'from-cyan-300/20 to-cyan-300/10', text: 'text-cyan-300', delay: 0.7 },
            ].map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: tech.delay,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={`group relative overflow-hidden rounded-lg bg-gradient-to-b ${tech.color} p-0.5 cursor-pointer`}
              >
                <div className="relative flex items-center gap-2 p-2 sm:p-4 rounded-[6px] bg-gray-900/90 transition-all duration-300 group-hover:bg-gray-900/70">
                  <span className={`text-xs sm:text-sm font-medium ${tech.text} transition-all duration-300 group-hover:translate-x-1`}>
                    {tech.name}
                  </span>
                  <motion.div
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className={`absolute bottom-0 left-0 h-[1px] ${tech.text} opacity-50`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Brief Introduction */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-12 lg:mt-20"
        >
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-0.5">
            <div className="relative p-4 sm:p-6 rounded-[10px] bg-gray-900/90">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-200">About Me</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                I'm a passionate software engineer with a strong foundation in IT support and web development. 
                Currently pursuing professional certifications from Google and Meta, I combine technical expertise 
                with problem-solving skills to create efficient and user-friendly applications. My focus is on 
                modern web technologies and cloud solutions, always staying current with industry best practices.
              </p>
              <div className="mt-4 sm:mt-6 flex gap-4">
                <a 
                  href="#resume"
                  onClick={handleResumeClick}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 