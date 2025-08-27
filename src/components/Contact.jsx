"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          className="text-xl mb-12 text-purple-100 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          I'd love to connect! Whether you have a project in mind, want to collaborate, or just say hello - feel free to reach out.
        </motion.p>
        
        <motion.div 
          className="flex justify-center space-x-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://github.com/hinamurme" 
            target="_blank"
            className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-4xl md:text-5xl group-hover:text-purple-300 transition-colors duration-300" />
          </motion.a>
          
          <motion.a 
            href="http://www.linkedin.com/in/hina-murme" 
            target="_blank"
            className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="text-4xl md:text-5xl group-hover:text-blue-400 transition-colors duration-300" />
          </motion.a>
          
          <motion.a 
            href="mailto:contact@example.com"
            className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="text-4xl md:text-5xl group-hover:text-red-400 transition-colors duration-300" />
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="border-t border-white/20 pt-12 text-purple-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>Let's create something amazing together!</p>
        </motion.div>
      </div>
    </section>
  );
}