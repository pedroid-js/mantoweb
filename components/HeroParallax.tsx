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

  // Parallax layers with more depth
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  // Only render particles on client to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate more particles with varied sizes - INCREASED
  const particles = useMemo(() => 
    Array.from({ length: 200 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
      size: Math.random() > 0.5 ? (Math.random() > 0.8 ? 3 : 2) : 1.5,
    })),
    []
  );

  // Floating orbs - MORE
  const floatingOrbs = useMemo(() => 
    Array.from({ length: 15 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 100 + Math.random() * 250,
      delay: Math.random() * 3,
      duration: 8 + Math.random() * 12,
    })),
    []
  );

  // Shooting stars
  const shootingStars = useMemo(() =>
    Array.from({ length: 5 }).map(() => ({
      startX: -10,
      startY: Math.random() * 50,
      delay: Math.random() * 10 + 2,
      duration: 2 + Math.random() * 1,
    })),
    []
  );

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep space background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-black"
        style={{ y: y1, scale }}
      />
      
      {/* Animated floating orbs - background layer */}
      {mounted && (
        <motion.div className="absolute inset-0" style={{ y: y2 }}>
          {floatingOrbs.map((orb, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full blur-3xl"
              style={{
                left: `${orb.x}%`,
                top: `${orb.y}%`,
                width: `${orb.size}px`,
                height: `${orb.size}px`,
                background: i % 3 === 0 
                  ? 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)'
                  : i % 3 === 1
                  ? 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, transparent 70%)',
              }}
              animate={{
                x: [0, 50, -30, 0],
                y: [0, -50, 30, 0],
                scale: [1, 1.2, 0.9, 1],
                opacity: [0.3, 0.6, 0.4, 0.3],
              }}
              transition={{
                delay: orb.delay,
                duration: orb.duration,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Geometric grid */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: y3, rotate }}
      >
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(34, 211, 238, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </motion.div>

      {/* Radial light beams - SUBTLE */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: y2 }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`beam-${i}`}
            className="absolute top-1/2 left-1/2 origin-left"
            style={{
              width: '100%',
              height: '1px',
              background: 'linear-gradient(to right, rgba(34, 211, 238, 0.4), transparent)',
              transform: `rotate(${i * 30}deg)`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{
              delay: i * 0.1,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced particle field - MORE VISIBLE */}
      {mounted && (
        <motion.div
          className="absolute inset-0 opacity-70"
          style={{ y: y4 }}
        >
          {particles.map((particle, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                boxShadow: `0 0 ${particle.size * 2}px rgba(255, 255, 255, 0.8)`,
              }}
              animate={{
                opacity: [0, 0.8, 1, 0.6, 0],
                scale: [0.5, 1.2, 1, 0.8, 0.5],
                y: [0, -30, -60, -90, -120],
              }}
              transition={{
                delay: particle.delay,
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Shooting stars */}
      {mounted && (
        <div className="absolute inset-0">
          {shootingStars.map((star, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${star.startX}%`,
                top: `${star.startY}%`,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(34, 211, 238, 0.6)',
              }}
              animate={{
                x: ['0vw', '120vw'],
                y: ['0vh', '60vh'],
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0],
              }}
              transition={{
                delay: star.delay,
                duration: star.duration,
                repeat: Infinity,
                repeatDelay: 8,
                ease: "easeIn"
              }}
            />
          ))}
        </div>
      )}

      {/* Nebula clouds - additional layer */}
      <motion.div className="absolute inset-0 opacity-20" style={{ y: y2 }}>
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -30, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Cosmic dust clouds */}
      <motion.div className="absolute inset-0 opacity-30" style={{ y: y3 }}>
        <motion.div
          className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.25) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ opacity }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            className="inline-block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            {headline}
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-blue-100/90 mb-12 max-w-3xl mx-auto drop-shadow-lg"
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
            className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-lg shadow-2xl overflow-hidden min-w-[200px] group"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(34, 211, 238, 0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
              style={{ opacity: 0.3 }}
            />
            <span className="relative z-10">{primaryCTA}</span>
          </motion.button>

          <motion.button
            onClick={onSecondaryCTA}
            className="relative px-8 py-4 border-2 border-cyan-400/50 text-white rounded-lg font-semibold text-lg backdrop-blur-sm hover:border-cyan-400 transition-all min-w-[200px] overflow-hidden group"
            whileHover={{ scale: 1.05, borderColor: 'rgba(34, 211, 238, 0.8)' }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-cyan-500/10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">{secondaryCTA}</span>
          </motion.button>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative w-8 h-12 border-2 border-cyan-400/50 rounded-full p-2 backdrop-blur-sm">
              <motion.div
                className="w-2 h-2 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mx-auto"
                animate={{ 
                  y: [0, 24, 0],
                  opacity: [1, 0.3, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 rounded-full bg-cyan-400/10 animate-ping" style={{ animationDuration: '3s' }} />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
