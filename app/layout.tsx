import "../styles/globals.css";
import Navbar from "../components/Navbar";
import MusicPlayer from "../components/MusicPlayer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mt-16">{children}</main>
        <MusicPlayer /> {/* ✅ Ensure MusicPlayer is mounted */}
      </body>
    </html>
  );
}