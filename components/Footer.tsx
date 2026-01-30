"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import { BRAND, SOCIAL_LINKS } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  
  const footerContent = {
    en: {
      tagline: "Protecting Earth, one dollar at a time.",
      legalTitle: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact",
      connectTitle: "Connect",
      rightsReserved: "All rights reserved.",
    },
    es: {
      tagline: "Protegiendo la Tierra, un dólar a la vez.",
      legalTitle: "Legal",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      contact: "Contacto",
      connectTitle: "Conectar",
      rightsReserved: "Todos los derechos reservados.",
    },
    ko: {
      tagline: "한 번에 한 달러씩 지구를 보호합니다.",
      legalTitle: "법적 정보",
      privacy: "개인정보 보호정책",
      terms: "서비스 약관",
      contact: "문의하기",
      connectTitle: "연결",
      rightsReserved: "모든 권리 보유.",
    },
    ja: {
      tagline: "一度に1ドルずつ地球を守る。",
      legalTitle: "法的情報",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      contact: "お問い合わせ",
      connectTitle: "つながる",
      rightsReserved: "全著作権所有。",
    },
    zh: {
      tagline: "保护地球，每次一美元。",
      legalTitle: "法律",
      privacy: "隐私政策",
      terms: "服务条款",
      contact: "联系我们",
      connectTitle: "连接",
      rightsReserved: "保留所有权利。",
    },
    hi: {
      tagline: "पृथ्वी की रक्षा करना, एक बार में एक डॉलर।",
      legalTitle: "कानूनी",
      privacy: "गोपनीयता नीति",
      terms: "सेवा की शर्तें",
      contact: "संपर्क करें",
      connectTitle: "जुड़ें",
      rightsReserved: "सर्वाधिकार सुरक्षित।",
    },
    bn: {
      tagline: "পৃথিবী রক্ষা করা, এক সময়ে একটি ডলার।",
      legalTitle: "আইনি",
      privacy: "গোপনীয়তা নীতি",
      terms: "সেবার শর্তাবলী",
      contact: "যোগাযোগ",
      connectTitle: "সংযুক্ত হন",
      rightsReserved: "সমস্ত অধিকার সংরক্ষিত।",
    },
    pt: {
      tagline: "Protegendo a Terra, um dólar por vez.",
      legalTitle: "Legal",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      contact: "Contato",
      connectTitle: "Conectar",
      rightsReserved: "Todos os direitos reservados.",
    },
    ru: {
      tagline: "Защищая Землю, по одному доллару за раз.",
      legalTitle: "Юридическая информация",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      contact: "Контакты",
      connectTitle: "Связаться",
      rightsReserved: "Все права защищены.",
    },
  };

  const t = footerContent[language];

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
            <p className="text-foreground/60 text-sm mb-4">{t.tagline}</p>
            <p className="text-foreground/40 text-xs">{BRAND.domain}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.legalTitle}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t.terms}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">{t.connectTitle}</h4>
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
          <p>© {new Date().getFullYear()} {BRAND.name}. {t.rightsReserved}</p>
        </div>
      </div>
    </footer>
  );
}
