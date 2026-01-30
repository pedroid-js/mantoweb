"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValue, animate } from "framer-motion";

interface StatCounterProps {
  target: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  incrementPerMinute?: number;
  storageKey?: string;
}

export default function StatCounter({
  target,
  label,
  suffix = "",
  prefix = "",
  duration = 2,
  incrementPerMinute = 0,
  storageKey,
}: StatCounterProps) {
  const [currentValue, setCurrentValue] = useState(target);
  const [isIncrementing, setIsIncrementing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  // Usar motion value para animaciones fluidas
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 30,
    mass: 1,
  });

  const [displayValue, setDisplayValue] = useState(0);

  // Actualizar displayValue cuando springValue cambia
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return unsubscribe;
  }, [springValue]);

  // Cargar valor guardado de localStorage al iniciar
  useEffect(() => {
    if (storageKey) {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const savedData = JSON.parse(saved);
        // Usar el mayor entre el valor guardado y el target inicial
        const initialValue = Math.max(savedData.value, target);
        setCurrentValue(initialValue);
        motionValue.set(0); // Empezar desde 0 para la animación inicial
      } else {
        localStorage.setItem(storageKey, JSON.stringify({ value: target, lastUpdate: Date.now() }));
      }
    }
  }, [storageKey, target, motionValue]);

  // Animación inicial cuando entra en vista
  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    // Animar desde 0 hasta currentValue con easing suave
    animate(motionValue, Math.floor(currentValue), {
      duration: duration,
      ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
    });
  }, [isInView, currentValue, duration, motionValue]);

  // Incremento automático continuo con animación suave
  useEffect(() => {
    if (!storageKey || incrementPerMinute <= 0 || !hasAnimated.current) return;

    const interval = setInterval(() => {
      setIsIncrementing(true);
      
      setCurrentValue(prev => {
        const increment = incrementPerMinute / 20; // Dividido entre 20 porque actualiza cada 3 segundos
        const newValue = prev + increment;
        
        // Animar hacia el nuevo valor
        animate(motionValue, Math.floor(newValue), {
          duration: 2.5, // Animación más rápida
          ease: [0.34, 1.56, 0.64, 1], // easeOutBack para efecto de rebote
        });
        
        localStorage.setItem(storageKey, JSON.stringify({ 
          value: newValue, 
          lastUpdate: Date.now() 
        }));
        
        return newValue;
      });

      // Efecto de pulso cuando incrementa - más largo
      setTimeout(() => setIsIncrementing(false), 1200);
    }, 3000); // Cada 3 segundos

    return () => clearInterval(interval);
  }, [storageKey, incrementPerMinute, motionValue]);

  const formattedCount = displayValue.toLocaleString();

  return (
    <motion.div
      ref={ref}
      className="text-center relative"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
        animate={isIncrementing ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        <span 
          className="inline-block font-bold"
          style={{
            background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(147, 51, 234), rgb(219, 39, 119))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {prefix}{formattedCount}{suffix}
        </span>
        
        {/* Efecto de incremento flotante */}
        {isIncrementing && (
          <motion.span
            className="absolute -top-10 left-1/2 -translate-x-1/2 text-2xl font-bold z-50 inline-block"
            style={{
              background: 'linear-gradient(to right, rgb(74, 222, 128), rgb(16, 185, 129))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            initial={{ opacity: 0, y: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 1, 0], y: [0, -10, -20, -30], scale: [0.8, 1, 1, 0.9] }}
            transition={{ duration: 1.2 }}
          >
            +{Math.ceil(incrementPerMinute / 20)}
          </motion.span>
        )}
      </motion.div>
      
      <div className="text-sm md:text-base text-foreground/60 font-medium uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}
