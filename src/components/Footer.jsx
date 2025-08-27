"use client";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-purple-900 text-white py-8 px-4 border-t border-purple-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="flex items-center text-sm md:text-base">
              © {new Date().getFullYear()} Hina Murme. All Rights Reserved.
              <span className="hidden md:inline-flex mx-2">|</span>
              <span className="hidden md:flex items-center">
                Made with <FaHeart className="text-red-500 mx-1" /> and Next.js
              </span>
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <a href="#" className="hover:text-purple-300 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-purple-800 text-center text-xs text-purple-300">
          <p className="flex items-center justify-center md:hidden">
            Made with <FaHeart className="text-red-500 mx-1" /> and Next.js
          </p>
          <p className="mt-2">Designed and developed with passion.</p>
        </div>
      </div>
    </footer>
  );
}