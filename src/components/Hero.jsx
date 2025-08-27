"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <div className="text-center lg:text-left flex flex-col justify-center h-full">
          {/* Animated greeting text */}
          <motion.div className="mb-6" variants={itemVariants}>
            <span className="text-2xl md:text-3xl font-light text-indigo-800 animate-pulse">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name with gradient effect */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
            variants={itemVariants}
          >
            Hina Murme
          </motion.h1>

          {/* Title with animated typing effect */}
          <motion.div className="mb-8" variants={itemVariants}>
            <div className="inline-flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-xl text-gray-700 font-medium">
              <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-indigo-100">
                Frontend Developer
              </span>
              <span className="hidden sm:inline text-indigo-400">|</span>
              <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-indigo-100">
                Python Backend Developer
              </span>
            </div>
          </motion.div>

          {/* Short description */}
          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
            variants={itemVariants}
          >
            Crafting efficient backend solutions, transforming data into
            insights, and building engaging user interfaces with modern
            technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex gap-4 mb-12"
            variants={itemVariants}
          >
            <motion.a
              href="/Hina_Murme_Resume1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#contact"
                className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-1 block"
              >
                Let's Connect
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Profile Photo */}
        <motion.div 
          className="relative order-first lg:order-last flex items-center justify-center h-full"
          variants={imageVariants}
        >
          <div className="relative mx-auto lg:mx-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full shadow-lg"></div>

            {/* Profile image container */}
            <div className="relative rounded-full overflow-hidden border-8 border-white shadow-2xl w-full h-full">
              <Image
                src="/pic.jpg"
                alt="Hina Murme"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              variants={floatingVariants}
              animate="animate"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>

            <motion.div 
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 0.5 }}
            >
              <span className="text-3xl">💻</span>
            </motion.div>

            <motion.div 
              className="absolute top-1/2 -right-8 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center shadow-lg"
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 1 }}
            >
              <span className="text-xl">📊</span>
            </motion.div>
          </div>

          {/* Status indicator */}
          <motion.div 
            className="absolute bottom-4 right-4 lg:right-8 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Available for work</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}