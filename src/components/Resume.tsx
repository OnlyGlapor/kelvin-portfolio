/** @jsx React.createElement */
import React from 'react';

export const Resume: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white mb-8">Resume</h1>
      
      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">Experience</h2>
        <div className="space-y-4">
          <div className="bg-slate-800 p-4 rounded-lg">
            <h3 className="text-xl font-medium text-white">Freelance Developer</h3>
            <p className="text-slate-400">Self-Employed • 2023 - Present</p>
            <ul className="list-disc list-inside mt-2 text-slate-300">
              <li>Developed personal projects and web applications</li>
              <li>Created responsive and user-friendly interfaces using React</li>
              <li>Built and maintained portfolio projects to showcase skills</li>
              <li>Self-taught various programming languages and frameworks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">Education</h2>
        <div className="space-y-4">
          <div className="bg-slate-800 p-4 rounded-lg">
            <h3 className="text-xl font-medium text-white">Bachelor of Information Technology</h3>
            <p className="text-slate-400">Starz College of Science & Technology • 2024 - Present</p>
            <p className="text-slate-300 mt-2">Relevant coursework: Network Administration, Systems Analysis, Database Management, IT Security</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">Skills</h2>
        <div className="bg-slate-800 p-4 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <h4 className="text-white font-medium mb-2">Languages</h4>
              <ul className="text-slate-300">
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
                <li>Java</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Frameworks</h4>
              <ul className="text-slate-300">
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Tools</h4>
              <ul className="text-slate-300">
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 