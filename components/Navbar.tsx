import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white fixed w-full top-0">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Chris&apos; Portfolio</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;

