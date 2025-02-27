"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold text-blue-400 mb-4 animate-fade-in">
          About Me
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed animate-fade-in delay-200">
          I'm <strong>Chris</strong>, a results-driven software developer and data analyst with a strong foundation in 
          full-stack development, data analytics, and system optimization. I don&apos;t just build things for the sake of it—
          I create <strong>efficient, scalable, and well-structured</strong> solutions that solve real problems.
          <br />
          <br />
          Whether it&apos;s <strong>improving UX by 25%</strong> through user research, optimizing data pipelines to reduce 
          processing errors by <strong>30%</strong>, or deploying high-performance web applications, I approach every project 
          with a critical eye and a focus on impact. I thrive in fast-paced environments and enjoy bridging the gap between 
          <strong>technical solutions</strong> and <strong>business goals</strong>.
        </p>
      </div>

      {/* Profile Image */}
      <div className="relative mt-8 animate-fade-in delay-400">
        <Image 
          src="/profile-pic.jpg" 
          alt="Chris Yeu" 
          width={200} 
          height={200} 
          className="rounded-full shadow-lg border-4 border-blue-500"
        />
      </div>

      {/* Skills & Interests */}
      <div className="mt-12 max-w-4xl animate-fade-in delay-600">
        <h2 className="text-3xl font-semibold text-center text-blue-400">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-110 transition transform">
            <h3 className="text-xl font-bold text-blue-300">Software Development</h3>
            <p className="text-gray-400 mt-2">
              Specializing in <strong>Next.js, React, and TypeScript</strong>, I build clean, efficient, and scalable applications.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-110 transition transform">
            <h3 className="text-xl font-bold text-blue-300">Data Science & Analytics</h3>
            <p className="text-gray-400 mt-2">
              Using <strong>Python, Pandas, and SQL</strong>, I extract insights from data to drive intelligent decision-making.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-110 transition transform">
            <h3 className="text-xl font-bold text-blue-300">Cybersecurity</h3>
            <p className="text-gray-400 mt-2">
              Experience in <strong>penetration testing</strong> and <strong>vulnerability assessment</strong> to ensure system security.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-110 transition transform">
            <h3 className="text-xl font-bold text-blue-300">Finance & Investing</h3>
            <p className="text-gray-400 mt-2">
              Actively investing in <strong>stocks, ETFs (VOO, QQQM), and personal finance</strong> for long-term financial growth.
            </p>
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className="mt-12 text-center animate-fade-in delay-800">
        <h2 className="text-3xl font-semibold text-blue-400">Let's Connect</h2>
        <p className="text-gray-400 mt-2">
          Reach out for collaborations, opportunities, or a tech chat!
        </p>
        <div className="flex gap-6 mt-4 justify-center">
          <a href="https://github.com/chrisyeu11" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/github-logo.svg" 
              alt="GitHub" 
              width={50} 
              height={50} 
              className="hover:scale-110 transition transform"
            />
          </a>
          <a href="https://linkedin.com/in/chrisyeu11" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/linkedin-logo.svg" 
              alt="LinkedIn" 
              width={50} 
              height={50} 
              className="hover:scale-110 transition transform"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
