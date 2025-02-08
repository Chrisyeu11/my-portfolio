import Navbar from '../components/Navbar';
import MusicPlayer from '../components/MusicPlayer';
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mt-16">{children}</main>
        <MusicPlayer /> {/* 🎵 Background Music Player */}
      </body>
    </html>
  );
}
