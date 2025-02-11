import "../styles/globals.css";
import Navbar from "../components/Navbar";
import MusicPlayer from "../components/MusicPlayer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar />
        <main className="mt-16">{children}</main>
        <MusicPlayer /> {/* ✅ Ensures MusicPlayer persists across navigation */}
      </body>
    </html>
  );
}
