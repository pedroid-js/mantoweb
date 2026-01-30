import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

/**
 * Hook for creating parallax effects on scroll
 * @param offset - How much to offset the parallax (0-1 range)
 * @returns Transform values for parallax motion
 */
export function useParallax(offset: number = 0.5) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * offset]);
  return y;
}

/**
 * Hook for element-specific parallax
 * @param ref - Reference to the element
 * @param offset - Parallax intensity
 */
export function useElementParallax(
  ref: RefObject<HTMLElement>,
  offset: number = 0.5
) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-100 * offset, 100 * offset]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  
  return { y, opacity };
}

/**
 * Hook for scroll-based scale effects
 */
export function useScrollScale(
  ref: RefObject<HTMLElement>,
  scaleRange: [number, number] = [0.8, 1]
) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleRange[0], scaleRange[1], scaleRange[0]]);
  
  return scale;
}

/**
 * Creates layered parallax values for complex backgrounds
 */
export function useLayeredParallax(layerCount: number = 3): MotionValue<number>[] {
  const { scrollY } = useScroll();
  
  return Array.from({ length: layerCount }, (_, i) => {
    const speed = (i + 1) * 0.2; // Each layer moves faster
    return useTransform(scrollY, [0, 1000], [0, -1000 * speed]);
  });
}

/**
 * Scroll-triggered rotation for decorative elements
 */
export function useScrollRotation(
  maxRotation: number = 180
): MotionValue<number> {
  const { scrollY } = useScroll();
  return useTransform(scrollY, [0, 1000], [0, maxRotation]);
}
