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
  const [supernova, setSupernova] = useState<{ x: number; y: number; active: boolean }>({
    x: 50,
    y: 50,
    active: false,
  });

  // Black holes system - multiple can exist at once
  const [blackHoles, setBlackHoles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    active: boolean;
    stage: 'growing' | 'consuming' | 'exploding';
  }>>([]);

  // Store last black hole position to avoid spawning too close
  const lastBlackHolePosition = useRef<{ x: number; y: number } | null>(null);
  
  // Black hole ID counter - persists across renders
  const blackHoleIdCounter = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Black hole spawner - creates black holes every 8-15 seconds
  useEffect(() => {
    // Function to generate a position with minimum distance from last position
    const generateSafePosition = (): { x: number; y: number } => {
      const minDistance = 30; // Minimum 30% distance from last black hole
      let newX: number;
      let newY: number;
      let attempts = 0;
      const maxAttempts = 50;

      do {
        newX = 25 + Math.random() * 50; // 25-75% of screen
        newY = 25 + Math.random() * 50;
        attempts++;

        // If no previous position or max attempts reached, accept this position
        if (!lastBlackHolePosition.current || attempts >= maxAttempts) {
          break;
        }

        // Calculate distance from last position
        const dx = newX - lastBlackHolePosition.current.x;
        const dy = newY - lastBlackHolePosition.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If distance is sufficient, accept this position
        if (distance >= minDistance) {
          break;
        }
      } while (true);

      return { x: newX, y: newY };
    };

    const spawnBlackHole = () => {
      const randomDelay = 8000 + Math.random() * 7000; // 8-15 seconds
      
      setTimeout(() => {
        const position = generateSafePosition();
        
        const newBlackHole = {
          id: blackHoleIdCounter.current++,
          x: position.x,
          y: position.y,
          active: true,
          stage: 'growing' as const,
        };

        // Update last position
        lastBlackHolePosition.current = { x: position.x, y: position.y };

        setBlackHoles(prev => [...prev, newBlackHole]);

        // Stage progression: growing -> consuming -> exploding -> remove
        setTimeout(() => {
          setBlackHoles(prev => prev.map(bh => 
            bh.id === newBlackHole.id ? { ...bh, stage: 'consuming' } : bh
          ));
        }, 1500); // Grow for 1.5s

        setTimeout(() => {
          setBlackHoles(prev => prev.map(bh => 
            bh.id === newBlackHole.id ? { ...bh, stage: 'exploding' } : bh
          ));
        }, 5500); // Consume for 4s

        setTimeout(() => {
          setBlackHoles(prev => prev.filter(bh => bh.id !== newBlackHole.id));
        }, 7000); // Explode for 1.5s then remove

        spawnBlackHole(); // Schedule next one
      }, randomDelay);
    };

    spawnBlackHole();
  }, []);

  // Supernova trigger - random every 30-50 seconds (less frequent, more discrete)
  useEffect(() => {
    const triggerSupernova = () => {
      const randomDelay = 30000 + Math.random() * 20000; // 30-50 seconds
      
      setTimeout(() => {
        setSupernova({
          x: 20 + Math.random() * 60, // 20-80% of screen
          y: 20 + Math.random() * 60,
          active: true,
        });

        // Deactivate after 5 seconds
        setTimeout(() => {
          setSupernova(prev => ({ ...prev, active: false }));
        }, 5000);

        triggerSupernova(); // Schedule next one
      }, randomDelay);
    };

    triggerSupernova();
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

      {/* SUPERNOVA EXPLOSION - TEMPORARILY DISABLED
      {mounted && supernova.active && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute"
            style={{
              left: `${supernova.x}%`,
              top: `${supernova.y}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0.7, 0.7, 0.5, 0] }}
            transition={{ duration: 5 }}
          >
            <motion.div
              className="absolute rounded-full"
              style={{
                width: '30px',
                height: '30px',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.7) 20%, rgba(255, 200, 100, 0.6) 40%, rgba(255, 150, 50, 0.5) 60%, rgba(34, 211, 238, 0.4) 80%, transparent 100%)',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 50px 20px rgba(255, 255, 255, 0.6), 0 0 100px 40px rgba(34, 211, 238, 0.5), 0 0 150px 60px rgba(147, 51, 234, 0.4)',
              }}
              animate={{
                scale: [0, 0.3, 0.8, 1.5, 2.5, 4, 6],
                opacity: [1, 1, 1, 0.8, 0.5, 0.2, 0],
              }}
              transition={{ duration: 4.5, ease: "easeOut" }}
            />

            <motion.div
              className="absolute rounded-full"
              style={{
                width: '40px',
                height: '40px',
                background: 'radial-gradient(circle, rgba(255, 200, 100, 0.5) 0%, rgba(255, 100, 150, 0.4) 40%, rgba(147, 51, 234, 0.3) 70%, transparent 100%)',
                transform: 'translate(-50%, -50%)',
                filter: 'blur(8px)',
              }}
              animate={{
                scale: [0, 0.5, 1.5, 3, 5],
                opacity: [0.6, 0.7, 0.5, 0.3, 0],
              }}
              transition={{ duration: 4, ease: "easeOut" }}
            />

            <motion.div
              className="absolute rounded-full"
              style={{
                width: '50px',
                height: '50px',
                border: '4px solid rgba(34, 211, 238, 0.6)',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 20px rgba(34, 211, 238, 0.7)',
              }}
              animate={{
                scale: [0, 1, 3, 6, 10, 15],
                opacity: [0.8, 0.8, 0.6, 0.4, 0.2, 0],
                borderWidth: ['4px', '3px', '2px', '1px', '0.5px', '0px'],
              }}
              transition={{ duration: 4.5, ease: "easeOut" }}
            />

            {Array.from({ length: 50 }).map((_, i) => {
              const angle = (i * 360) / 50;
              const speedVariation = 0.8 + Math.random() * 0.6;
              const distance = (80 + Math.random() * 70) * speedVariation;
              const x = Math.cos((angle * Math.PI) / 180) * distance;
              const y = Math.sin((angle * Math.PI) / 180) * distance;
              const hue = i % 3 === 0 ? 'rgba(34, 211, 238, 0.8)' : i % 3 === 1 ? 'rgba(147, 51, 234, 0.8)' : 'rgba(236, 72, 153, 0.8)';
              const size = 1.5 + Math.random() * 2;
              
              return (
                <motion.div
                  key={`main-burst-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    background: hue,
                    transform: 'translate(-50%, -50%)',
                    boxShadow: `0 0 ${size * 3}px ${hue}`,
                  }}
                  animate={{
                    x: [0, x * 0.3, x * 0.7, x * 1.2],
                    y: [0, y * 0.3, y * 0.7, y * 1.2],
                    opacity: [0.8, 0.8, 0.6, 0],
                    scale: [1, 1.2, 0.8, 0.3],
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 1.5, 
                    delay: i * 0.01,
                    ease: "easeOut" 
                  }}
                />
              );
            })}

            {Array.from({ length: 15 }).map((_, i) => {
              const angle = (i * 360) / 15;
              const distance = 90 + Math.random() * 100;
              const x = Math.cos((angle * Math.PI) / 180) * distance;
              const y = Math.sin((angle * Math.PI) / 180) * distance;
              const size = 3 + Math.random() * 4;
              const rotation = Math.random() * 360;
              
              return (
                <motion.div
                  key={`fragment-${i}`}
                  className="absolute rounded-sm"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(34, 211, 238, 0.6) 50%, rgba(147, 51, 234, 0.5) 100%)',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
                  }}
                  animate={{
                    x: [0, x * 0.5, x * 1.3],
                    y: [0, y * 0.5, y * 1.3],
                    opacity: [0.8, 0.8, 0],
                    scale: [1.2, 0.8, 0.2],
                    rotate: [rotation, rotation + 360],
                  }}
                  transition={{ 
                    duration: 3.5 + Math.random() * 1, 
                    delay: i * 0.02,
                    ease: "easeOut" 
                  }}
                />
              );
            })}
          </motion.div>
        </div>
      )}
      */}

      {/* BLACK HOLES SYSTEM - Gravitational monsters that consume particles */}
      {mounted && blackHoles.map((blackHole) => {
        // Calculate which nearby particles should be affected
        const affectedParticles = particles.filter((particle) => {
          const dx = particle.left - blackHole.x;
          const dy = particle.top - blackHole.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance < 25; // 25% of screen radius
        });

        return (
          <div key={blackHole.id} className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute"
              style={{
                left: `${blackHole.x}%`,
                top: `${blackHole.y}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: blackHole.stage === 'growing' ? [0, 1] : 
                         blackHole.stage === 'consuming' ? 1 : [1, 0]
              }}
              transition={{ duration: blackHole.stage === 'growing' ? 1.5 : blackHole.stage === 'exploding' ? 1.5 : 0 }}
            >
              {/* EVENT HORIZON - The absolutely black center */}
              <motion.div
                className="absolute rounded-full bg-black"
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#000000',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 1), 0 0 1px rgba(0, 0, 0, 1)',
                  zIndex: 10,
                }}
                animate={{
                  scale: blackHole.stage === 'growing' ? [0, 1] : 
                         blackHole.stage === 'consuming' ? [1, 1.05, 1] : [1, 0.3, 0],
                }}
                transition={{ 
                  duration: blackHole.stage === 'growing' ? 1.5 : 
                           blackHole.stage === 'consuming' ? 2.5 : 1.5,
                  repeat: blackHole.stage === 'consuming' ? Infinity : 0,
                  ease: "easeInOut"
                }}
              />

              {/* PHOTON SPHERE - Innermost ring of light bending */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: '50px',
                  height: '50px',
                  border: '1px solid rgba(100, 150, 255, 0.4)',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 0 8px rgba(100, 150, 255, 0.3), inset 0 0 8px rgba(100, 150, 255, 0.2)',
                  zIndex: 9,
                }}
                animate={{
                  scale: blackHole.stage === 'growing' ? [0, 1] : 
                         blackHole.stage === 'consuming' ? [1, 1.08, 1] : [1, 0.4, 0],
                  opacity: blackHole.stage === 'growing' ? [0, 0.6] : 
                           blackHole.stage === 'consuming' ? [0.6, 0.8, 0.6] : [0.6, 0],
                }}
                transition={{ 
                  duration: blackHole.stage === 'growing' ? 1.5 : 
                           blackHole.stage === 'consuming' ? 1.8 : 1.5,
                  repeat: blackHole.stage === 'consuming' ? Infinity : 0,
                  ease: "easeInOut"
                }}
              />

              {/* ACCRETION DISK - Glowing ring of captured matter (more separated) */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'conic-gradient(from 0deg, rgba(255, 150, 50, 0.5) 0deg, rgba(255, 100, 100, 0.6) 60deg, rgba(200, 50, 255, 0.5) 120deg, rgba(50, 150, 255, 0.6) 180deg, rgba(100, 255, 200, 0.5) 240deg, rgba(255, 200, 50, 0.6) 300deg, rgba(255, 150, 50, 0.5) 360deg)',
                  transform: 'translate(-50%, -50%)',
                  borderRadius: '50%',
                  filter: 'blur(4px)',
                  opacity: 0.6,
                  maskImage: 'radial-gradient(circle, transparent 0%, transparent 35%, black 45%, black 100%)',
                  WebkitMaskImage: 'radial-gradient(circle, transparent 0%, transparent 35%, black 45%, black 100%)',
                  zIndex: 5,
                }}
                animate={{
                  rotate: blackHole.stage === 'exploding' ? [0, 180] : [0, 360],
                  scale: blackHole.stage === 'growing' ? [0, 0.8, 1] : 
                         blackHole.stage === 'consuming' ? [1, 1.15, 1] : [1, 1.8],
                  opacity: blackHole.stage === 'growing' ? [0, 0.6] : 
                           blackHole.stage === 'consuming' ? [0.6, 0.85, 0.6] : [0.6, 0],
                }}
                transition={{ 
                  rotate: { duration: blackHole.stage === 'exploding' ? 1.5 : 4, repeat: blackHole.stage === 'exploding' ? 0 : Infinity, ease: "linear" },
                  scale: { duration: blackHole.stage === 'growing' ? 1.5 : blackHole.stage === 'consuming' ? 3 : 1.5, repeat: blackHole.stage === 'consuming' ? Infinity : 0, ease: "easeInOut" },
                  opacity: { duration: 1.5 }
                }}
              />

              {/* INNER ACCRETION DISK - Brighter inner ring */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: '70px',
                  height: '70px',
                  background: 'conic-gradient(from 180deg, rgba(255, 200, 100, 0.7) 0deg, rgba(255, 150, 200, 0.8) 90deg, rgba(150, 100, 255, 0.7) 180deg, rgba(100, 200, 255, 0.8) 270deg, rgba(255, 200, 100, 0.7) 360deg)',
                  transform: 'translate(-50%, -50%)',
                  borderRadius: '50%',
                  filter: 'blur(3px)',
                  maskImage: 'radial-gradient(circle, transparent 0%, transparent 30%, black 42%, black 100%)',
                  WebkitMaskImage: 'radial-gradient(circle, transparent 0%, transparent 30%, black 42%, black 100%)',
                  zIndex: 6,
                }}
                animate={{
                  rotate: blackHole.stage === 'exploding' ? [0, -180] : [0, -360],
                  scale: blackHole.stage === 'growing' ? [0, 0.9, 1] : 
                         blackHole.stage === 'consuming' ? [1, 1.2, 1] : [1, 2.5],
                  opacity: blackHole.stage === 'growing' ? [0, 0.8] : 
                           blackHole.stage === 'consuming' ? [0.8, 1, 0.8] : [0.8, 0],
                }}
                transition={{ 
                  rotate: { duration: blackHole.stage === 'exploding' ? 1.5 : 2.5, repeat: blackHole.stage === 'exploding' ? 0 : Infinity, ease: "linear" },
                  scale: { duration: blackHole.stage === 'growing' ? 1.5 : blackHole.stage === 'consuming' ? 2 : 1.5, repeat: blackHole.stage === 'consuming' ? Infinity : 0, ease: "easeInOut" },
                  opacity: { duration: 1.5 }
                }}
              />

              {/* GRAVITATIONAL LENSING - Distortion rings */}
              {[0, 1, 2].map((ringIdx) => (
                <motion.div
                  key={`lens-${ringIdx}`}
                  className="absolute rounded-full border"
                  style={{
                    width: `${100 + ringIdx * 40}px`,
                    height: `${100 + ringIdx * 40}px`,
                    borderColor: `rgba(100, 150, 255, ${0.3 - ringIdx * 0.08})`,
                    borderWidth: '2px',
                    transform: 'translate(-50%, -50%)',
                    filter: 'blur(1px)',
                  }}
                  animate={{
                    scale: blackHole.stage === 'growing' ? [0, 1] : 
                           blackHole.stage === 'consuming' ? [1, 1.05, 1] : [1, 1.5],
                    opacity: blackHole.stage === 'growing' ? [0, 0.4 - ringIdx * 0.1] : 
                             blackHole.stage === 'consuming' ? [0.4 - ringIdx * 0.1, 0.5 - ringIdx * 0.1, 0.4 - ringIdx * 0.1] : [0.4 - ringIdx * 0.1, 0],
                  }}
                  transition={{ 
                    duration: blackHole.stage === 'growing' ? 1.5 : blackHole.stage === 'consuming' ? 2.5 : 1.5,
                    delay: ringIdx * 0.1,
                    repeat: blackHole.stage === 'consuming' ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* HAWKING RADIATION - Subtle glow */}
              <motion.div
                className="absolute rounded-full blur-2xl"
                style={{
                  width: '120px',
                  height: '120px',
                  background: 'radial-gradient(circle, rgba(100, 150, 255, 0.3) 0%, rgba(150, 100, 255, 0.2) 50%, transparent 100%)',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  scale: blackHole.stage === 'growing' ? [0, 1] : 
                         blackHole.stage === 'consuming' ? [1, 1.2, 1] : [1, 2],
                  opacity: blackHole.stage === 'growing' ? [0, 0.5] : 
                           blackHole.stage === 'consuming' ? [0.5, 0.7, 0.5] : [0.5, 0],
                }}
                transition={{ 
                  duration: blackHole.stage === 'growing' ? 1.5 : blackHole.stage === 'consuming' ? 3 : 1.5,
                  repeat: blackHole.stage === 'consuming' ? Infinity : 0,
                  ease: "easeInOut"
                }}
              />

              {/* CONSUMING PARTICLES - Particles being sucked in */}
              {blackHole.stage === 'consuming' && affectedParticles.map((particle, idx) => {
                const dx = particle.left - blackHole.x;
                const dy = particle.top - blackHole.y;
                const startDistance = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx);
                const spiralRotations = 2 + Math.random() * 2;
                
                return (
                  <motion.div
                    key={`consumed-${idx}`}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      left: `${dx}%`,
                      top: `${dy}%`,
                      background: 'rgba(255, 200, 150, 1)',
                      boxShadow: '0 0 6px rgba(255, 200, 150, 1)',
                    }}
                    animate={{
                      x: [0, -dx * 0.3, -dx * 0.7, -dx],
                      y: [0, -dy * 0.3, -dy * 0.7, -dy],
                      opacity: [0, 0.8, 1, 0],
                      scale: [0.5, 1.2, 0.8, 0],
                      rotate: [0, spiralRotations * 360],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 1,
                      delay: idx * 0.05,
                      repeat: Infinity,
                      ease: "easeIn"
                    }}
                  />
                );
              })}

              {/* EXPLOSION PARTICLES - When black hole collapses */}
              {blackHole.stage === 'exploding' && (
                <>
                  {Array.from({ length: 25 }).map((_, i) => {
                    const angle = (i * 360) / 25;
                    const distance = 60 + Math.random() * 40;
                    const x = Math.cos((angle * Math.PI) / 180) * distance;
                    const y = Math.sin((angle * Math.PI) / 180) * distance;
                    const hue = i % 3 === 0 ? 'rgba(255, 200, 100, 1)' : i % 3 === 1 ? 'rgba(255, 150, 200, 1)' : 'rgba(150, 200, 255, 1)';
                    
                    return (
                      <motion.div
                        key={`explosion-${i}`}
                        className="absolute rounded-full"
                        style={{
                          width: '3px',
                          height: '3px',
                          background: hue,
                          transform: 'translate(-50%, -50%)',
                          boxShadow: `0 0 8px ${hue}`,
                        }}
                        animate={{
                          x: [0, x * 0.5, x],
                          y: [0, y * 0.5, y],
                          opacity: [1, 0.8, 0],
                          scale: [1.5, 1, 0.3],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.02,
                          ease: "easeOut"
                        }}
                      />
                    );
                  })}

                  {/* Explosion flash */}
                  <motion.div
                    className="absolute rounded-full"
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(150, 200, 255, 0.6) 40%, transparent 100%)',
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                      scale: [0, 2, 4],
                      opacity: [1, 0.5, 0],
                    }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </>
              )}
            </motion.div>
          </div>
        );
      })}

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
