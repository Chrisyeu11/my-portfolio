import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white fixed w-full top-0">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Chris' Portfolio</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
