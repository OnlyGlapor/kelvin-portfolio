import { createContext, useContext, useRef, useState, useEffect } from 'react';

interface AudioContextType {
  audio: HTMLAudioElement | null;
  isPlaying: boolean;
  toggleSound: () => void;
  initializeAudio: () => void;
}

const AudioContext = createContext<AudioContextType>({
  audio: null,
  isPlaying: false,
  toggleSound: () => {},
  initializeAudio: () => {}
});

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const initializeAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/sounds/startup-music.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.2;
    }
  };

  const toggleSound = () => {
    if (!audioRef.current) {
      initializeAudio();
    }

    if (audioRef.current?.paused) {
      audioRef.current?.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error('Failed to play audio:', error);
      });
    } else {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <AudioContext.Provider value={{
      audio: audioRef.current,
      isPlaying,
      toggleSound,
      initializeAudio
    }}>
      {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => useContext(AudioContext); 