import { motion } from 'framer-motion';
import { Terminal, Cpu, Code2, GraduationCap, Award } from 'lucide-react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-4 lg:py-8 max-w-6xl"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="mb-8 lg:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
          </span>
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl">
          A passionate software engineer with a focus on creating impactful solutions and continuous learning.
        </p>
      </motion.div>

      {/* Journey Section */}
      <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
        {/* Background Card */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-0.5">
          <div className="relative p-4 sm:p-6 rounded-[10px] bg-gray-900/90">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-200">Background</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              With over 3 years of experience in software development and IT support, I've developed a strong 
              foundation in both frontend and backend technologies. My journey began with a passion for problem-solving 
              and has evolved into creating robust, user-centric applications.
            </p>
          </div>
          </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: <Code2 className="text-blue-400" />,
              title: "Frontend Development",
              skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"]
            },
            {
              icon: <Cpu className="text-purple-400" />,
              title: "Backend Development",
              skills: ["Node.js", "Django", "PostgreSQL", "RESTful APIs", "GraphQL"]
            },
            {
              icon: <Terminal className="text-green-400" />,
              title: "Tools & Technologies",
              skills: ["Git", "Docker", "AWS", "Linux", "CI/CD"]
            }
          ].map((category) => (
              <motion.div
              key={category.title}
                variants={itemVariants}
              className="relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-800/30 to-gray-900/30 p-0.5"
            >
              <div className="relative p-4 sm:p-5 rounded-[10px] bg-gray-900/90 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8">{category.icon}</div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-200">{category.title}</h3>
                    </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm sm:text-base text-gray-400">
                      • {skill}
                    </li>
                  ))}
                </ul>
                </div>
              </motion.div>
            ))}
          </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <motion.div variants={itemVariants} className="relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-800/30 to-gray-900/30 p-0.5">
            <div className="relative p-4 sm:p-6 rounded-[10px] bg-gray-900/90">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            </div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-200">Education</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg text-gray-300">Computer Science</h3>
                  <p className="text-sm sm:text-base text-gray-400">Starz University of Science and Technology</p>
                  <p className="text-sm text-gray-500">2019 - 2023</p>
            </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-800/30 to-gray-900/30 p-0.5">
            <div className="relative p-4 sm:p-6 rounded-[10px] bg-gray-900/90">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-200">Certifications</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg text-gray-300">Google IT Support Professional</h3>
                  <p className="text-sm sm:text-base text-gray-400">Google</p>
                  <p className="text-sm text-gray-500">2023</p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg text-gray-300">Meta Frontend Developer</h3>
                  <p className="text-sm sm:text-base text-gray-400">Meta</p>
                  <p className="text-sm text-gray-500">2023</p>
            </div>
              </div>
            </div>
          </motion.div>
          </div>
        </motion.div>
    </motion.div>
  );
} 