"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import { BRAND, SOCIAL_LINKS } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  
  const footerContent = language === "en" 
    ? {
        tagline: "Protecting Earth, one dollar at a time.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "Contact",
      }
    : {
        tagline: "Protegiendo la Tierra, un dólar a la vez.",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
        contact: "Contacto",
      };

  const iconMap: Record<string, React.ElementType> = {
    twitter: Twitter,
    instagram: Instagram,
    linkedin: Linkedin,
  };

  return (
    <footer className="bg-background border-t border-muted/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
              {BRAND.name}
            </h3>
            <p className="text-foreground/60 text-sm mb-4">{footerContent.tagline}</p>
            <p className="text-foreground/40 text-xs">{BRAND.domain}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{language === "en" ? "Legal" : "Legal"}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  {footerContent.privacy}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  {footerContent.terms}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  {footerContent.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">{language === "en" ? "Connect" : "Conectar"}</h4>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 rounded-full bg-muted/30 hover:bg-accent hover:text-white flex items-center justify-center transition-all"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-muted/20 text-center text-sm text-foreground/40">
          <p>© {new Date().getFullYear()} {BRAND.name}. {language === "en" ? "All rights reserved." : "Todos los derechos reservados."}</p>
        </div>
      </div>
    </footer>
  );
}
