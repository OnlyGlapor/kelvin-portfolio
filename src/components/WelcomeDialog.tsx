import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, Cpu, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAudio } from '../contexts/AudioContext';

interface WelcomeDialogProps {
  onClose: () => void;
}

export function WelcomeDialog({ onClose }: WelcomeDialogProps) {
  const { isPlaying, toggleSound, initializeAudio } = useAudio();
  const [isTyping, setIsTyping] = useState(true);
  const [text, setText] = useState('');
  const fullText = "Welcome to my digital realm! I'm Kelvin, a software engineer passionate about creating innovative solutions.";

  // Initialize audio when dialog mounts
  useEffect(() => {
    initializeAudio();
  }, [initializeAudio]);

  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [text, isTyping]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleEnterPortfolio = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] p-4 flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-lg bg-gradient-to-br from-gray-900 to-slate-900 rounded-lg p-4 lg:p-6"
        >
          {/* Sound control button */}
          <button
            onClick={toggleSound}
            className="absolute top-4 right-4 p-2 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 z-[101]"
          >
            {!isPlaying ? '🔇' : '🔊'}
          </button>

          {/* Animated border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 animate-pulse" />
          
          <div className="relative bg-gray-900/90 rounded-lg p-6 backdrop-blur-xl">
            {/* Tech decoration elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20"
              >
                <Terminal className="text-blue-400" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  System Online
                </h2>
                <p className="text-gray-400 text-sm">Initializing interface...</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {/* Typing effect */}
              <div className="min-h-[60px] text-gray-300 font-mono">
                {text}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-blue-400 ml-1"
                  />
                )}
              </div>

              {/* Tech stack preview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: <Code2 size={16} />, text: "Frontend Development" },
                  { icon: <Cpu size={16} />, text: "Backend Systems" },
                  { icon: <Terminal size={16} />, text: "Clean Code" },
                  { icon: <Sparkles size={16} />, text: "Modern UI/UX" },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 + index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-gray-400 bg-gray-800/50 rounded-lg p-3 border border-gray-700/50"
                  >
                    {item.icon}
                    {item.text}
                  </motion.div>
                ))}
              </div>

              {/* Action button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                onClick={handleEnterPortfolio}
                className="w-full mt-6 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Enter Portfolio
              </motion.button>

              {isTyping && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                  onClick={() => {
                    setText(fullText);
                    setIsTyping(false);
                  }}
                >
                  Skip
                </motion.button>
              )}

              <label className="flex items-center gap-2 text-sm text-gray-400 mt-4">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      localStorage.setItem('neverShowWelcome', 'true');
                    }
                  }}
                  className="rounded border-gray-700 bg-gray-800"
                />
                Don't show this again
              </label>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2 }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
              style={{ transformOrigin: '0%' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 