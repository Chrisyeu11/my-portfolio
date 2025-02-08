import "../styles/globals.css"; // ✅ Ensure CSS is imported
import Navbar from "../components/Navbar";
import MusicPlayer from "../components/MusicPlayer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white"> {/* ✅ Ensure background color */}
        <Navbar />
        <main className="mt-16">{children}</main>
        <MusicPlayer />
      </body>
    </html>
  );
}
