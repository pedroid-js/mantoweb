"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import DonationWidget from "@/components/DonationWidget";
import { fadeInUp } from "@/lib/motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function DonatePage() {
  const { language } = useLanguage();

  const content = {
    en: {
      backButton: "Back to Home",
      title: "Support the Initiative",
      subtitle: "Every contribution supports scientific outreach and education",
      whyDonate: "Why Your Support Matters",
      reasons: [
        "Fund scientific outreach programs",
        "Support open educational materials",
        "Enable public research projects",
        "Join a collective movement",
      ],
      security: {
        title: "Your Security Matters",
        points: [
          "Industry-standard encryption",
          "Secure payment processing",
          "No data sold to third parties",
          "Quarterly transparency reports",
        ],
      },
    },
    es: {
      backButton: "Volver al Inicio",
      title: "Apoya la Iniciativa",
      subtitle: "Cada contribución apoya divulgación científica y educación",
      whyDonate: "Por Qué Tu Apoyo Importa",
      reasons: [
        "Financiar programas de divulgación científica",
        "Apoyar materiales educativos abiertos",
        "Habilitar proyectos de investigación pública",
        "Unirse a un movimiento colectivo",
      ],
      security: {
        title: "Tu Seguridad Importa",
        points: [
          "Encriptación estándar de la industria",
          "Procesamiento de pagos seguro",
          "No vendemos datos a terceros",
          "Informes de transparencia trimestrales",
        ],
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/">
          <motion.button
            className="flex items-center space-x-2 text-foreground/60 hover:text-foreground mb-8 transition-colors"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t.backButton}</span>
          </motion.button>
        </Link>

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Donation Widget */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <DonationWidget language={language} />
          </motion.div>

          {/* Why Donate */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">{t.whyDonate}</h2>
              <div className="space-y-4">
                {t.reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-foreground/80">{reason}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-muted/20 backdrop-blur-sm rounded-2xl p-6 border border-muted/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-4">{t.security.title}</h3>
              <ul className="space-y-3">
                {t.security.points.map((point, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-foreground/70">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
