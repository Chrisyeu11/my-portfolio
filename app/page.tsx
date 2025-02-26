"use client";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <h1 className="text-5xl font-extrabold text-center animate-fade-in">
        Welcome to <span className="text-blue-400">Chris&apos;s Portfolio</span>
      </h1>
      <p className="text-lg text-gray-300 mt-4 text-center max-w-2xl">
        Showcasing my journey in software development, data science, and cybersecurity.
      </p>

      {/* Animated Call-To-Actions */}
      <div className="flex flex-wrap gap-6 mt-8 justify-center">
        <Link href="/projects">
          <span className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
            View My Projects 🚀
          </span>
        </Link>
        <Link href="/experience">
          <span className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
            Experience & Resume 📄
          </span>
        </Link>
      </div>

      {/* Decorative Elements - GitHub & LinkedIn Bouncing Logos */}
      <div className="flex flex-wrap gap-12 mt-16 opacity-80">
        {/* GitHub */}
        <a href="https://github.com/chrisyeu11" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/github-logo.svg" 
            alt="GitHub Logo"
            width={80}
            height={80}
            className="animate-bounce transition-transform transform hover:scale-110"
          />
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/chrisyeu11" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/linkedin-logo.svg" 
            alt="LinkedIn Logo"
            width={80}
            height={80}
            className="animate-bounce transition-transform transform hover:scale-110"
          />
        </a>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-sm text-gray-400">
        Built with Next.js & Tailwind CSS 💙
      </footer>
    </div>
  );
}
