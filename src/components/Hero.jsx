"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        {/* Text Content */}
        <div className="text-center lg:text-left flex flex-col justify-center h-full">
          {/* Animated greeting text */}
          <div className="mb-6">
            <span className="text-2xl md:text-3xl font-light text-indigo-800 animate-pulse">
              👋 Hello, I'm
            </span>
          </div>

          {/* Name with gradient effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Hina Murme
          </h1>

          {/* Title with animated typing effect */}
          <div className="mb-8">
            <div className="inline-flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-xl text-gray-700 font-medium">
              <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-indigo-100">
                Frontend Developer
              </span>
              <span className="hidden sm:inline text-indigo-400">|</span>
              <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-indigo-100">
                Python Backend Developer
              </span>
              {/* <span className="hidden sm:inline text-indigo-400">|</span>
              <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-indigo-100">
                Data Analyst
              </span> */}
            </div>
          </div>

          {/* Short description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            Crafting efficient backend solutions, transforming data into
            insights, and building engaging user interfaces with modern
            technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex  gap-4 mb-12">
            <Link
              href="#projects"
              className="px-8 py-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <span>View My Work</span>
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
            </Link>

            <Link
              href="#contact"
              className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Let's Connect
            </Link>
          </div>
        </div>

        {/* Profile Photo */}
        <div className="relative order-first lg:order-last flex items-center justify-center h-full">
          <div className="relative mx-auto lg:mx-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full shadow-lg"></div>

            {/* Profile image container */}
            <div className="relative rounded-full overflow-hidden border-8 border-white shadow-2xl w-full h-full">
              {/* Uncomment and use this if you have an actual image */}
              <Image
                src="/pic.jpg"
                alt="Hina Murme"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🚀</span>
            </div>

            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl">💻</span>
            </div>

            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">📊</span>
            </div>
          </div>

          {/* Status indicator */}
          <div className="absolute bottom-4 right-4 lg:right-8 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Available for work</span>
          </div>
        </div>
      </div>
    </section>
  );
}
