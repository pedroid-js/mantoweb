"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import Button from "./Button";
import BrandLogo from "./BrandLogo";
import { navLinks } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = navLinks[language];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-slate-900/95 backdrop-blur-xl shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <BrandLogo className={isScrolled || !isHomePage ? "" : "drop-shadow-lg"} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <motion.div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`font-medium relative inline-block ${
                    isScrolled || !isHomePage
                      ? "text-white/90"
                      : "text-white drop-shadow-md"
                  }`}
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.span>
                  
                  {/* Underline gradient effect */}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: '100%', opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  
                  {/* Glow effect on hover */}
                  <motion.span
                    className="absolute inset-0 rounded-md blur-sm bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle language={language} onLanguageChange={setLanguage} />
            <ThemeToggle />
            <Link href="/donate">
              <Button variant="primary" size="md">
                {language === "en" ? "Contribute $1" : language === "es" ? "Aportar $1" : language === "ko" ? "$1 기부하기" : language === "ja" ? "$1寄付する" : language === "zh" ? "捐赠$1" : language === "hi" ? "$1 दान करें" : language === "bn" ? "$1 দান করুন" : language === "pt" ? "Contribuir $1" : language === "ru" ? "Внести $1" : "Contribute $1"}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle language={language} onLanguageChange={setLanguage} />
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled || !isHomePage
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-black/20 hover:bg-black/30 text-white"
              }`}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-xl"
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-white/90 hover:text-white transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/donate" onClick={() => setIsOpen(false)} className="block pt-4">
            <Button variant="primary" size="md" className="w-full">
              {language === "en" ? "Contribute $1" : language === "es" ? "Aportar $1" : language === "ko" ? "$1 기부하기" : language === "ja" ? "$1寄付する" : language === "zh" ? "捐赠$1" : language === "hi" ? "$1 दान करें" : language === "bn" ? "$1 दान করুন" : language === "pt" ? "Contribuir $1" : language === "ru" ? "Внести $1" : "Contribute $1"}
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}
