"use client";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      title: "Building a Next.js Portfolio",
      date: "2025-04-25",
      tag: "Tech",
      link: "/blog/building-nextjs-portfolio",
    },
    {
      title: "Diary: Pushing Through Burnout",
      date: "2025-04-24",
      tag: "Diary",
      link: "/blog/diary-pushing-burnout",
    },
    {
      title: "Lessons Learned From My First Datathon",
      date: "2025-04-20",
      tag: "Tech",
      link: "/blog/first-datathon-lessons",
    },
    {
      title: "Diary: Late Night Coding Reflections",
      date: "2025-04-18",
      tag: "Diary",
      link: "/blog/diary-late-night-coding",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <h1 className="text-5xl font-bold text-blue-400 mb-10 text-center">Blog & Diary</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {posts.map((post, index) => (
          <Link key={index} href={post.link}>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform cursor-pointer">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">{post.date}</span>
                <span className={`text-xs px-2 py-1 rounded ${post.tag === "Diary" ? "bg-pink-500" : "bg-blue-500"}`}>
                  {post.tag}
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
