import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const imagesToPreload = [
  '/images/image1.png',
  '/images/image2.png',
  '/images/image3.png',
  '/images/image4.png',
  '/images/image5.png',
  '/images/image6.png'
];

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const total = imagesToPreload.length;

    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.round((loadedCount / total) * 100);
      setProgress(newProgress);

      if (loadedCount === total) {
        setTimeout(() => {
            onComplete();
        }, 800); // Small buffer after loading
      }
    };

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = updateProgress;
      img.onerror = updateProgress; // Proceed even if error
    });
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
    >
      <div className="w-64 h-[1px] bg-white/20 mb-4 overflow-hidden">
        <motion.div 
          className="h-full bg-gold-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-white/50">
        Loading Assets {progress}%
      </p>
    </motion.div>
  );
};

export default Preloader;
