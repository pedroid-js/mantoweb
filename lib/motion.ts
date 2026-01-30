import { Variants } from "framer-motion";

// Shared animation variants for consistent motion across the app
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // circOut easing
    }
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    }
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    }
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Button hover animations
export const buttonHover = {
  scale: 1.02,
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

export const buttonTap = {
  scale: 0.98,
  transition: {
    duration: 0.1,
  },
};

// Glow effect for primary buttons
export const glowEffect = {
  boxShadow: [
    "0 0 20px var(--accent)",
    "0 0 30px var(--accent)",
    "0 0 20px var(--accent)",
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Motion configuration for reduced motion preference
export const getMotionConfig = (prefersReducedMotion: boolean) => ({
  initial: prefersReducedMotion ? "visible" : "hidden",
  animate: "visible",
  transition: prefersReducedMotion ? { duration: 0 } : undefined,
});
