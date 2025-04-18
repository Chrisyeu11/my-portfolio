import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
      {/* Logo / Site Name */}
      <h1 className="text-xl font-bold">
        
      </h1>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-blue-400 transition duration-300">Back to Main</Link>
      </div>

      {/* Mobile Menu Placeholder (Optional for Future) */}
    </nav>
  );
}
