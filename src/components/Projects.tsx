import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, Star } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  inProgress?: boolean;
  phase?: string;
}

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const projects: Project[] = [
    {
      title: "🍉 Cinemelon",
      description: "Cinemelon is your personal movie companion that helps you discover the perfect film based on your current mood. Built with Next.js, tailwind css and powered by the TMDB API, it offers an intuitive and visually appealing interface to explore movies through emotional resonance.",
      image: "/images/cinemelon-project-image.png",
      techStack: ["Next.js", "Tailwind CSS", "TMDB API", "TypeScript"],
      githubUrl: "https://github.com/OnlyGlapor/Cinemelon",
      liveUrl: "https://cinemelon.vercel.app",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations and a modern design.",
      image: "/images/portfolio-project-image.png",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/kelvin-nimely/portfolio",
      liveUrl: "https://kelvin-nimely.vercel.app",
      featured: true
    },
    {
      title: "🚧 EdCarry (In Development)",
      description: "A comprehensive SaaS school management system that streamlines educational operations. Built with a modern Next.js frontend and powerful Django backend, this full-stack solution offers robust features for student management, attendance tracking, grade management, and administrative tools. Designed with scalability and user experience in mind.",
      image: "/images/edcarry-preview-blur.png",
      techStack: [
        "Next.js",
        "TypeScript",
        "Django",
        "Tailwind CSS",
        "DaisyUI",
        "REST API",
        "PostgreSQL"
      ],
      githubUrl: "https://github.com/OnlyGlapor/edcarry",
      featured: false,
      inProgress: true,
      phase: "Alpha Development"
    },
    {
      title: "🚧 E-commerce Platform (In Development)",
      description: "Full-stack e-commerce application with user authentication, product management, and payment integration.",
      image: "/projects/ecommerce.png",
      techStack: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/kelvin-nimely/ecommerce",
      featured: false,
      inProgress: true,
      phase: "Alpha Development"
    },
    {
      title: "Livestream Network Compatibility Check",
      description: "A Python application that helps streamers optimize their livestream settings based on internet speed and hardware capabilities. Features include speed testing, hardware analysis, and automated recommendations for platforms like YouTube and Facebook.",
      image: "/images/livestream-checker.png",
      techStack: [
        "Python",
        "speedtest-cli",
        "psutil",
        "GPUtil",
        "Tkinter GUI"
      ],
      githubUrl: "https://github.com/OnlyGlapor/Livestream-Network-Compatibility-Check",
      featured: false
    },
    {
      title: "Facebook Feed Clone",
      description: "A responsive Facebook news feed clone focusing on the user interface. Features include post creation, story carousel, and interactive elements like reactions and comments.",
      image: "/projects/facebook-clone.png",
      techStack: ["React", "Tailwind CSS", "React Icons", "Responsive Design"],
      githubUrl: "https://github.com/kelvin-nimely/facebook-feed-clone",
      liveUrl: "https://facebook-feed-clone-demo.vercel.app",
      featured: false
    },
  ];

  return (
    <motion.div
      id="projects"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-8 max-w-6xl"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      {/* Header */}
      <motion.div variants={itemVariants} className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
          Projects
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          A collection of projects that showcase my skills and experience in web development and software engineering.
        </p>
      </motion.div>

      {/* Featured Projects */}
      <motion.div variants={itemVariants} className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-200 flex items-center gap-2">
          <Star className="text-yellow-400" size={24} />
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.filter(project => project.featured).map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-0.5"
            >
              <div className="relative rounded-[10px] bg-gray-900/90 h-full">
                {/* Project Image with stronger blur for in-progress projects */}
                <div className="relative h-48 overflow-hidden rounded-t-[10px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      project.inProgress ? 'blur-lg' : ''
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 ${
                    project.inProgress ? 'to-gray-900/90' : 'to-transparent'
                  } opacity-70`} />
                </div>

                {/* Project Content for in-progress projects */}
                {project.inProgress ? (
                  <div className="p-6 relative">
                    {/* Confidential Content */}
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="animate-pulse w-2 h-2 rounded-full bg-yellow-400" />
                        <span className="px-3 py-1.5 text-sm rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                          In Development
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-200">{project.title}</h3>
                      <p className="text-gray-400">
                        Project details are currently confidential.
                        <br />
                        Coming soon...
                      </p>

                      {/* Placeholder Tech Stack */}
                      <div className="flex flex-wrap gap-2 justify-center mt-4">
                        <span className="px-3 py-1 text-xs rounded-full bg-gray-500/10 text-gray-400 border border-gray-500/20">
                          Coming Soon
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={16} />
                        Source
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Other Projects */}
      <motion.div variants={itemVariants} className="mt-16 space-y-8">
        <h2 className="text-2xl font-semibold text-gray-200 flex items-center gap-2">
          <Folder className="text-purple-400" size={24} />
          Other Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.filter(project => !project.featured).map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-0.5"
            >
              <div className="relative rounded-[10px] bg-gray-900/90 p-6 h-full">
                {/* In Development Badge */}
                {project.inProgress && (
                  <div className="flex gap-2 items-center absolute top-4 right-4 z-20">
                    <span className="animate-pulse w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                      In Development
                    </span>
                  </div>
                )}

                {/* Project Content with Blur for In-Progress */}
                <div className={`relative z-10 ${project.inProgress ? 'blur-md' : ''}`}>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Source
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
} 