import React, { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function LoadingScreen3D({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    // Fast loading progress - complete in 2.5 seconds
    const loadingSteps = [
      { progress: 33, text: "Initializing..." },
      { progress: 66, text: "Loading..." },
      { progress: 100, text: "Ready!" },
    ];

    let currentStep = 0;
    const loadingInterval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setProgress(loadingSteps[currentStep].progress);
        setLoadingText(loadingSteps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(loadingInterval);
        setTimeout(() => {
          if (onLoadingComplete) onLoadingComplete();
        }, 300);
      }
    }, 400);

    return () => {
      clearInterval(loadingInterval);
    };
  }, [onLoadingComplete]);

  function onLoad(spline) {
    setSplineLoaded(true);
  }

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Spline 3D Scene - Animated Space Scene */}
      <div className="absolute inset-0">
        <Suspense
          fallback={
            <div className="w-full h-full bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30 flex items-center justify-center">
              <div className="text-white text-xl">Loading 3D Scene...</div>
            </div>
          }
        >
          <Spline
            scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
            onLoad={onLoad}
            className="w-full h-full"
          />
        </Suspense>
      </div>

      {/* Animated Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10 pointer-events-none" />

      {/* Loading UI Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          {/* Glowing orb behind title */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-purple-500/30 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Logo/Title */}
          <motion.h1
            className="text-6xl md:text-8xl font-display font-bold mb-8 gradient-text relative z-10"
            animate={{
              textShadow: [
                "0 0 20px rgba(236, 72, 153, 0.5)",
                "0 0 40px rgba(79, 70, 229, 0.8)",
                "0 0 60px rgba(6, 182, 212, 0.6)",
                "0 0 40px rgba(79, 70, 229, 0.8)",
                "0 0 20px rgba(236, 72, 153, 0.5)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Beyond Earth
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-base text-cyan-300/70 mb-8 tracking-widest uppercase"
          >
            Journey Through Space
          </motion.p>

          {/* Progress Container */}
          <div className="relative">
            {/* Progress Bar */}
            <div className="w-80 md:w-96 mx-auto mb-6 relative">
              {/* Glow effect behind progress bar */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-md"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className="relative h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
                <motion.div
                  className="h-full bg-gradient-to-r from-cosmic-purple via-cosmic-pink to-cosmic-blue relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Shimmer effect on progress bar */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Loading Text */}
            <motion.p
              key={loadingText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-lg md:text-xl text-white/80 font-light tracking-wide"
            >
              {loadingText}
            </motion.p>

            {/* Progress Percentage */}
            <motion.p
              className="text-5xl md:text-6xl font-bold mt-6 gradient-text"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              {progress}%
            </motion.p>
          </div>

          {/* Spinning loading indicator */}
          <motion.div
            className="mt-8 w-16 h-16 mx-auto border-4 border-purple-500/30 border-t-pink-500 rounded-full"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-4 right-4 text-cyan-400/50 text-6xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute bottom-4 left-4 text-purple-400/50 text-6xl"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        ✦
      </motion.div>
    </div>
  );
}
