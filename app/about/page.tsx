"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold text-blue-400 mb-4 animate-fade-in">
          About Me
        </h1>

        {/* ENTJ Overview Section */}
        <p className="text-lg text-gray-300 leading-relaxed animate-fade-in delay-200">
          An <strong>ENTJ</strong> is a natural leader, assertive, and driven. Known for strategic thinking and organizing people and resources to achieve long-term goals, ENTJs embody these key traits:
        </p>

        {/* Key Traits Section with Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[
            {
              title: "Extraverted (E)",
              desc: "Energized by interaction with others, they thrive in dynamic environments and enjoy group settings.",
            },
            {
              title: "Intuitive (N)",
              desc: "Focused on the big picture, they think abstractly and love solving complex problems creatively.",
            },
            {
              title: "Thinking (T)",
              desc: "Decisions are based on logic and efficiency, with a preference for rational, objective analysis.",
            },
            {
              title: "Judging (J)",
              desc: "Preferring structure and planning, they seek control and closure, often making decisive choices.",
            },
          ].map((trait, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition transform"
            >
              <h3 className="text-xl font-bold text-blue-300 mb-2">
                {trait.title}
              </h3>
              <p className="text-gray-400">{trait.desc}</p>
            </div>
          ))}
        </div>

        {/* Summary About ENTJs */}
        <p className="text-lg text-gray-300 leading-relaxed mt-8">
          ENTJs are ambitious, confident, and results-driven. They excel in
          leadership and value intellectual challenge, thriving in strategic
          discussions and problem-solving.
        </p>

        {/* Divider to Separate Sections */}
        <hr className="my-8 border-gray-600 w-3/4" />

        {/* Chris Introduction Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mt-8 hover:scale-105 transition transform">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            Meet Chris, The Engineer 🚀
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I&apos;m <strong>Chris</strong>, a results-driven software engineer
            with a strong foundation in
            <strong> full-stack development, data analytics, and system optimization.</strong>{" "}
            I don&apos;t just build things for the sake of it—I create
            <strong> efficient, scalable, and well-structured</strong> solutions
            that solve real problems.
          </p>
        </div>

        {/* Key Achievements Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "25% UX Improvement",
              desc: "Enhanced UX through user research and optimized interfaces.",
            },
            {
              title: "30% Error Reduction",
              desc: "Streamlined data pipelines to minimize processing errors.",
            },
            {
              title: "High-Performance Web Apps",
              desc: "Deployed scalable and high-performing applications.",
            },
            {
              title: "Bridging Tech & Business",
              desc: "Aligned technical solutions with business goals effectively.",
            },
          ].map((achievement, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition transform"
            >
              <h3 className="text-xl font-bold text-blue-300 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-400">{achievement.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative mt-12 animate-fade-in delay-400">
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
        <h2 className="text-3xl font-semibold text-center text-blue-400">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {[
            {
              title: "Software Engineering",
              desc: "Do&apos;t just write code—design scalable systems, streamline workflows, and develop data-driven solutions.",
            },
            {
              title: "Front End",
              desc: "Expertise in Next.js, React, and TypeScript.",
            },
            {
              title: "Back End",
              desc: "Java, Spring Ecosystem.",
            },
            {
              title: "Endure the Pain and Suffering",
              desc: "Feel the pain and suffering, but keep pushing forward to learn and apply.",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-110 transition transform"
            >
              <h3 className="text-xl font-bold text-blue-300 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-400">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Connect Section */}
      <div className="mt-12 text-center animate-fade-in delay-800">
        <h2 className="text-3xl font-semibold text-blue-400">Let&apos;s Connect</h2>
        <p className="text-gray-400 mt-2">
          Reach out for collaborations, opportunities, or a tech chat!
        </p>
        <div className="flex gap-6 mt-4 justify-center">
          <a
            href="https://github.com/chrisyeu11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github-logo.svg"
              alt="GitHub"
              width={50}
              height={50}
              className="hover:scale-110 transition transform"
            />
          </a>
          <a
            href="https://linkedin.com/in/chrisyeu11"
            target="_blank"
            rel="noopener noreferrer"
          >
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
