"use client";
import { useState, useRef } from "react";
import YouTube from "react-youtube";

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(50);
  const playerRef = useRef<any>(null);

  // Function to handle player ready
  const onReady = (event: any) => {
    playerRef.current = event.target;
    playerRef.current.setVolume(volume);
    playerRef.current.playVideo();
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

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 p-4 rounded-lg shadow-lg text-white flex items-center gap-4">
      {/* Hidden YouTube Player */}
      <YouTube
        videoId="4_yWMOPfSNo" // Your YouTube Video ID
        opts={{
          height: "0",
          width: "0",
          playerVars: {
            autoplay: 1,
            loop: 1,
            start: 3146, // Start at 52m 26s
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
