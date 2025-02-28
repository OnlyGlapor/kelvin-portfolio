import { motion } from 'framer-motion';
import { Award, CheckCircle, Calendar, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  issuerLogo: string;
  date: string;
  credentialUrl: string;
  skills: string[];
  description: string;
  inProgress?: boolean;
}

export function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const certifications: Certification[] = [
    {
      title: "Google IT Support Professional Certificate",
      issuer: "Google",
      issuerLogo: "/images/google-certificate-badge.png",
      date: "2023",
      credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/...",
      skills: [
        "Technical Support",
        "System Administration",
        "Network Security",
        "Cloud Computing",
        "Infrastructure Management"
      ],
      description: "Comprehensive training in technical support fundamentals, system administration, operating systems, and IT security."
    },
    {
      title: "Meta Frontend Developer Professional Certificate",
      issuer: "Meta",
      issuerLogo: "/images/meta-certificate-badge.webp",
      date: "2023 - Present",
      credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/...",
      skills: [
        "React.js",
        "JavaScript",
        "Web Development",
        "UI/UX Design",
        "Version Control"
      ],
      description: "Advanced training in frontend development, focusing on React.js, modern JavaScript, and responsive design principles.",
      inProgress: true
    }
  ];

  return (
    <motion.div
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
          Professional Certifications
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          Continuous learning and professional development through industry-recognized certifications.
        </p>
      </motion.div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 gap-8">
        {certifications.map((cert) => (
          <motion.div
            key={cert.title}
            variants={itemVariants}
            className="relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-0.5"
          >
            <div className="relative rounded-[10px] bg-gray-900/90 p-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo and Title Section */}
                <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                  <div className="w-16 h-16 rounded-xl bg-white/5 p-3 mb-4">
                    <img
                      src={cert.issuerLogo}
                      alt={cert.issuer}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Calendar size={14} />
                    {cert.date}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-grow space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-200 flex items-center gap-3">
                        {cert.title}
                        {cert.inProgress ? (
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            In Progress
                          </span>
                        ) : (
                          <CheckCircle size={20} className="text-green-400" />
                        )}
                      </h2>
                      <p className="text-gray-400 mt-2">{cert.description}</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-300">Skills & Competencies</h3>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credential Link */}
                  <div className="pt-4">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Award size={16} />
                      View Credential
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        variants={itemVariants}
        className="mt-12 p-6 rounded-xl bg-gradient-to-b from-gray-800/30 to-gray-900/30 border border-gray-700/50"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 rounded-lg bg-blue-500/10">
            <Award className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-200 mb-2">Commitment to Growth</h3>
            <p className="text-gray-400">
              These certifications represent my dedication to continuous learning and professional development. 
              Each program has enhanced my technical expertise and practical skills in software development 
              and IT support.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
} 