"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useState } from "react";

interface LanguageToggleProps {
  language: "en" | "es" | "ko" | "ja";
  onLanguageChange: (lang: "en" | "es" | "ko" | "ja") => void;
}

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
  { code: "ko", label: "KO", name: "한국어" },
  { code: "ja", label: "JA", name: "日本語" },
] as const;

export default function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = languages.find(l => l.code === language);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center gap-2 transition-colors text-sm font-medium text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase">{currentLang?.label}</span>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full right-0 mt-2 bg-slate-800/95 backdrop-blur-xl rounded-lg shadow-xl border border-white/10 overflow-hidden z-50"
          onMouseLeave={() => setIsOpen(false)}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code as any);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm transition-colors flex items-center justify-between gap-3 ${
                language === lang.code
                  ? "bg-accent/20 text-accent"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>{lang.name}</span>
              <span className="text-xs opacity-60 uppercase">{lang.label}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
