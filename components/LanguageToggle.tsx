"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  language: "en" | "es";
  onLanguageChange: (lang: "en" | "es") => void;
}

export default function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  return (
    <motion.button
      onClick={() => onLanguageChange(language === "en" ? "es" : "en")}
      className="relative px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center gap-2 transition-colors text-sm font-medium text-white"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase">{language}</span>
    </motion.button>
  );
}
