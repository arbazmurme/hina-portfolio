"use client";

import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "Python", "Django", "SQL", "MySQL", "MongoDB", 
    "JavaScript", "React", "Next.js", "Docker", "AWS",
    "HTML5", "CSS3", "Git", "REST API", "Power BI"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-indigo-50/30">
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
            About <span className="text-indigo-600">Me</span>
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed">
              Motivated and detail-oriented Computer Science graduate with expertise in
              Python, SQL, Django, and frontend technologies. Skilled in building scalable
              applications, optimizing database performance, and creating responsive UIs.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed">
              Passionate about problem-solving, data-driven insights, and delivering impactful
              business solutions in collaborative environments. Continuously learning and
              adapting to new technologies to stay at the forefront of development practices.
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6 pt-4"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-white p-5 rounded-xl shadow-md border border-indigo-100 hover:shadow-lg transition-shadow duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors">30%</div>
                <div className="text-sm text-gray-600 mt-1">Query Optimization</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3 overflow-hidden">
                  <motion.div 
                    className="bg-indigo-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "30%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </motion.div>
              <motion.div 
                className="bg-white p-5 rounded-xl shadow-md border border-purple-100 hover:shadow-lg transition-shadow duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors">45%</div>
                <div className="text-sm text-gray-600 mt-1">UX Improvement</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3 overflow-hidden">
                  <motion.div 
                    className="bg-purple-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "45%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-gray-800 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Technical Skills
            </motion.h3>
            <motion.div 
              className="flex flex-wrap gap-3 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skills.map((skill, index) => (
                <motion.span 
                  key={index}
                  className="px-4 py-2 bg-white border border-indigo-100 rounded-full text-indigo-700 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:bg-indigo-50 hover:-translate-y-0.5"
                  variants={skillVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
            
            {/* Experience Highlights */}
            <motion.div 
              className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <motion.h4 
                className="text-lg font-semibold text-indigo-800 mb-4 flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.span 
                  className="bg-indigo-600 text-white p-1 rounded mr-2"
                  initial={{ rotate: -180, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </motion.span>
                What I Bring
              </motion.h4>
              <motion.ul 
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li className="flex items-start" variants={itemVariants}>
                  <span className="text-green-500 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Backend development with Python & Django</span>
                </motion.li>
                <motion.li className="flex items-start" variants={itemVariants}>
                  <span className="text-green-500 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Database design & optimization</span>
                </motion.li>
                <motion.li className="flex items-start" variants={itemVariants}>
                  <span className="text-green-500 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Responsive frontend development</span>
                </motion.li>
                <motion.li className="flex items-start" variants={itemVariants}>
                  <span className="text-green-500 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Data analysis & visualization</span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}