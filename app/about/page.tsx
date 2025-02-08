import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">Welcome to My Portfolio</h1>
      <p className="text-center text-gray-500">Now Playing 🎵</p>
      <MusicPlayer /> {/* Your YouTube Music Player */}
    </main>
  );
}
