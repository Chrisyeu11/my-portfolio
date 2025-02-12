"use client";
import { useState, useRef, useEffect } from "react";
import YouTube, { YouTubePlayer } from "react-youtube";

const MusicPlayer = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(() => {
    return typeof window !== "undefined" ? Number(localStorage.getItem("musicVolume")) || 50 : 50;
  });

  const playerRef = useRef<YouTubePlayer | null>(null);

  console.log("🎵 MusicPlayer component loaded!");

  // Handle YouTube Player Ready
  const onReady = (event: { target: YouTubePlayer }) => {
    playerRef.current = event.target;
    playerRef.current.setVolume(volume);
    console.log("🎥 YouTube Player is ready!");
  };

  // Play/Pause Toggle
  const togglePlay = () => {
    if (!playerRef.current) return;

    if (playing) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setPlaying(!playing);
  };

  // Handle Volume Change & Store in Local Storage
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(event.target.value, 10);
    setVolume(newVolume);
    localStorage.setItem("musicVolume", String(newVolume));
    if (playerRef.current) {
      playerRef.current.setVolume(newVolume);
    }
  };

  // Auto-play on First User Interaction (Persistent)
  useEffect(() => {
    console.log("🔄 useEffect triggered!");

    const startMusic = () => {
      if (playerRef.current && !playing) {
        playerRef.current.playVideo();
        setPlaying(true);
        console.log("▶ Auto-playing Music!");
      }
    };

    document.addEventListener("click", startMusic, { once: true });
    return () => document.removeEventListener("click", startMusic);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 p-4 rounded-lg shadow-lg text-white flex items-center gap-4 border border-gray-600">
      <p className="text-sm">🎶 Now Playing</p>

      {/* Hidden YouTube Player */}
      <YouTube
        videoId="4_yWMOPfSNo"
        opts={{
          height: "0",
          width: "0",
          playerVars: {
            autoplay: 0,
            loop: 1,
            start: 3146,
            mute: 0,
          },
        }}
        onReady={onReady}
      />

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="bg-blue-500 px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        {playing ? "⏸ Pause" : "▶ Play"}
      </button>

      {/* Volume Control */}
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className="cursor-pointer"
      />
    </div>
  );
};

export default MusicPlayer;
