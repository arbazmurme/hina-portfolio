"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "ATM Management System",
      description: "Terminal-based banking app with login, deposit, withdrawal, and balance check.",
      tech: ["Python", "MySQL"],
      demo: "#",
      github: "https://github.com/hinamurme/ATM-Project.git",
    },
    {
      name: "IPL Data Analysis & Dashboard",
      description: "Analyzed IPL datasets and built Power BI dashboards for insights.",
      tech: ["MySQL", "Power BI"],
      demo: "#",
      github: "https://github.com/hinamurme/MYSQL-PROJECT.git",
    },
    {
      name: "Portfolio Website",
      description: "Responsive portfolio with modals, animations, and smooth scrolling.",
      tech: ["HTML", "CSS", "JavaScript", "Next.js"],
      demo: "https://hina-portfolio-eight.vercel.app/",
      github: "https://github.com/hinamurme/PORTFOLIO1.git",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px- bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-indigo-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and experience.
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              {/* Project Header with Gradient */}
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.name}
                </h3>
                
                {/* Project Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies Used */}
                <div className="mb-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="flex justify-between items-center">
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Code
                  </motion.a>
                  
                  <motion.a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      project.demo === "#" 
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed" 
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                    onClick={e => project.demo === "#" && e.preventDefault()}
                    whileHover={{ scale: project.demo !== "#" ? 1.05 : 1 }}
                    whileTap={{ scale: project.demo !== "#" ? 0.95 : 1 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}