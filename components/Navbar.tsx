import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
      {/* Logo / Site Name */}
      <h1 className="text-xl font-bold">
        Chris&apos;s Portfolio
      </h1>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-blue-400 transition duration-300">Home</Link>
        <Link href="/about" className="hover:text-blue-400 transition duration-300">About</Link>
        <Link href="/projects" className="hover:text-blue-400 transition duration-300">Projects</Link>
        <Link href="/experience" className="hover:text-blue-400 transition duration-300">Experience</Link>
      </div>

      {/* Mobile Menu Placeholder (Optional for Future) */}
    </nav>
  );
}
