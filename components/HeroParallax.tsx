"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

interface HeroParallaxProps {
  headline: string;
  subheadline: string;
  primaryCTA: string;
  secondaryCTA: string;
  onPrimaryCTA: () => void;
  onSecondaryCTA: () => void;
}

export default function HeroParallax({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  onPrimaryCTA,
  onSecondaryCTA,
}: HeroParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax layers
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Only render particles on client to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate particle positions once on mount
  const particles = useMemo(() => 
    Array.from({ length: 50 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
    })),
    []
  );

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-black"
        style={{ y: y1 }}
      />
      
      {/* Animated gradient mesh */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y: y2 }}
      >
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </motion.div>

      {/* Particle field (CSS-based) */}
      {mounted && (
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{ y: y3 }}
        >
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationName: "twinkle",
                animationDuration: "3s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ opacity }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
            {headline}
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          {subheadline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <motion.button
            onClick={onPrimaryCTA}
            className="px-8 py-4 bg-cyan-500 text-white rounded-lg font-semibold text-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:bg-cyan-600 transition-all min-w-[200px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {primaryCTA}
          </motion.button>

          <motion.button
            onClick={onSecondaryCTA}
            className="px-8 py-4 border-2 border-white/40 text-white rounded-lg font-semibold text-lg hover:border-white/60 hover:bg-white/10 transition-all min-w-[200px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {secondaryCTA}
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full p-1">
            <motion.div
              className="w-1.5 h-1.5 bg-foreground/50 rounded-full mx-auto"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
