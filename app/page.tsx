"use client";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <h1 className="text-5xl font-extrabold text-center animate-fade-in">
        <span className="text-blue-400">Chris</span>
      </h1>

      {/* Icon Buttons Section */}
      <div className="flex gap-12 mt-16 opacity-90 justify-center items-center flex-wrap md:flex-nowrap">
        {/* GitHub */}
        <a href="https://github.com/chrisyeu11" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/github-logo.svg" 
            alt="GitHub Logo"
            width={80}
            height={80}
            className="animate-bounce transition-transform hover:scale-110"
          />
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/chrisyeu11" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/linkedin-logo.svg" 
            alt="LinkedIn Logo"
            width={80}
            height={80}
            className="animate-bounce transition-transform hover:scale-110"
          />
        </a>

        {/* Projects */}
        <Link href="/projects">
          <div className="flex flex-col items-center gap-2 cursor-pointer animate-bounce hover:scale-110 transition-transform">
            <Image 
              src="/project.png"
              alt="Projects"
              width={64}
              height={64}
            />
            <span className="text-sm font-semibold text-white">Projects</span>
          </div>
        </Link>

        {/* Experience */}
        <Link href="/experience">
          <div className="flex flex-col items-center gap-2 cursor-pointer animate-bounce hover:scale-110 transition-transform">
            <Image 
              src="/experience.png"
              alt="Experience"
              width={64}
              height={64}
            />
            <span className="text-sm font-semibold text-white">Experience</span>
          </div>
        </Link>

        {/* Resume */}
        <a href="/Chris_Yeu_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col items-center gap-2 animate-bounce hover:scale-110 transition-transform">
            <Image 
              src="/resume.png" 
              alt="Resume"
              width={64}
              height={64}
            />
            <span className="text-sm font-semibold text-white">Resume</span>
          </div>
        </a>

        {/* Blog */}
        <Link href="/blog">
          <div className="flex flex-col items-center gap-2 cursor-pointer animate-bounce hover:scale-110 transition-transform">
            <Image 
              src="/blog.png"
              alt="Blog"
              width={64}
              height={64}
            />
            <span className="text-sm font-semibold text-white">Blog</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
