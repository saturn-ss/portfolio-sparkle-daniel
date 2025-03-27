
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const AutoPlayAudio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("https://cdn.pixabay.com/download/audio/2021/11/13/audio_cb31ab1a4c.mp3?filename=ambient-piano-amp-strings-10711.mp3");
    
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.2;

      // Try to play audio on first page load
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            // Auto-play was prevented, we'll need user interaction
            console.log("Audio playback prevented:", error);
            setIsPlaying(false);
          });
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Play error:", err));
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleAudio}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-primary/30"
      aria-label={isPlaying ? "Mute audio" : "Play audio"}
    >
      {isPlaying ? (
        <Volume2 size={18} className="text-primary" />
      ) : (
        <VolumeX size={18} className="text-primary" />
      )}
    </button>
  );
};

export default AutoPlayAudio;
