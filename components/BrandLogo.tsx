"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-1.5 group ${className}`}
      aria-label="Mantossalvo home"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ duration: 0.2 }}
        className="flex-shrink-0 flex items-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icon.png"
          alt="Mantossalvo icon"
          className="rounded-md"
          style={{ height: '0px', width: 'auto', display: 'block' }}
        />
      </motion.div>
      
      <motion.svg
        viewBox="0 0 180 28"
        className="h-7 w-auto"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        role="img"
        aria-label="Mantossalvo"
      >
        <text
          x="0"
          y="20"
          fill="currentColor"
          fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
          fontSize="18"
          fontWeight="600"
          letterSpacing="-0.3"
          className="text-white transition-opacity group-hover:opacity-85 group-active:opacity-92"
        >
          Mantossalvo
        </text>
      </motion.svg>
    </Link>
  );
}
