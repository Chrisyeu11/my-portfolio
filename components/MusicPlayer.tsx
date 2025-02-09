"use client";
import { useState, useRef, useEffect } from "react";
import YouTube from "react-youtube";

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const playerRef = useRef<any>(null);

  // Debug: Check if the component is mounting
  console.log("🎵 MusicPlayer component loaded!");

  // Function to handle player ready
  const onReady = (event: any) => {
    playerRef.current = event.target;
    playerRef.current.setVolume(volume);
    console.log("🎥 YouTube Player is ready!");
  };

  // Play / Pause Toggle
  const togglePlay = () => {
    if (playing) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setPlaying(!playing);
  };

  // Handle Volume Change
  const handleVolumeChange = (event: any) => {
    const newVolume = parseInt(event.target.value);
    setVolume(newVolume);
    if (playerRef.current) {
      playerRef.current.setVolume(newVolume);
    }
  };

  // Force Play on First User Interaction
useEffect(() => {
  console.log("🔄 useEffect triggered!");
  const startMusic = () => {
    if (playerRef.current && !playing) {
      playerRef.current.playVideo();
      setPlaying(true);
      console.log("▶ Auto-playing Music!");
    }
  };
  document.addEventListener("click", startMusic);
  return () => document.removeEventListener("click", startMusic);
}, [playing]); // ✅ Added `playing`

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 p-4 rounded-lg shadow-lg text-white flex items-center gap-4">
      {/* Debug: Show UI is rendered */}
      <p>🎶 Now Playing</p>

      {/* Hidden YouTube Player */}
      <YouTube
        videoId="4_yWMOPfSNo" // Your YouTube Video ID
        opts={{
          height: "0",
          width: "0",
          playerVars: {
            autoplay: 0, // Autoplay blocked, will start manually
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
        className="bg-blue-500 px-3 py-2 rounded hover:bg-blue-600"
      >
        {playing ? "Pause ⏸" : "Play ▶"}
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
