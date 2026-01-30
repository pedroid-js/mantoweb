"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Users, Target, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      backButton: "Back to Home",
      title: "Our Mission",
      subtitle: "A collective approach to scientific outreach",
      mission: {
        title: "The Vision",
        description: "We envision a world where collective action enables scientific knowledge sharing and education. Through small contributions at scale, we support open research, educational materials, and public projects related to Earth's mantle and planetary sciences.",
      },
      timeline: [
        { year: "2025", event: "Campaign conception and platform development" },
        { year: "2026", event: "Global launch across 50 countries" },
        { year: "2027", event: "Research partnerships with leading institutions" },
        { year: "2028", event: "1 billion participant milestone" },
      ],
      team: [
        { name: "Don. Pedro Fernandez Caffarena", role: "Founder & CEO", image: "/image_ceo.png" },
        { name: "Don Pedro Fernandez Roman", role: "Chief Scientific Officer", image: "/image_cientifico.png" },
        { name: "Don Jorge Fernandez Moreno", role: "Director of Operations", image: "/image_ope.png" },
      ],
      partners: {
        title: "Our Partners",
        subtitle: "Working with leading organizations worldwide",
      },
    },
    es: {
      backButton: "Volver al Inicio",
      title: "Nuestra Misión",
      subtitle: "Un enfoque colectivo para la divulgación científica",
      mission: {
        title: "La Visión",
        description: "Imaginamos un mundo donde la acción colectiva permite compartir conocimiento científico y educación. A través de pequeñas contribuciones a gran escala, apoyamos investigación abierta, materiales educativos y proyectos públicos relacionados con el manto terrestre y ciencias planetarias.",
      },
      timeline: [
        { year: "2025", event: "Concepción de la campaña y desarrollo de la plataforma" },
        { year: "2026", event: "Lanzamiento global en 50 países" },
        { year: "2027", event: "Asociaciones de investigación con instituciones líderes" },
        { year: "2028", event: "Hito de 1 mil millones de participantes" },
      ],
      team: [
        { name: "Don. Pedro Fernandez Caffarena", role: "Fundador y CEO", image: "/image_ceo.png" },
        { name: "Don Pedro Fernandez Roman", role: "Director Científico", image: "/image_cientifico.png" },
        { name: "Don Jorge Fernandez Moreno", role: "Director de Operaciones", image: "/image_ope.png" },
      ],
      partners: {
        title: "Nuestros Socios",
        subtitle: "Trabajando con organizaciones líderes mundialmente",
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
          className="text-center mb-20"
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

        {/* Mission Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-accent/20">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold">{t.mission.title}</h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.mission.description}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <section className="mb-24">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {language === "en" ? "Our Journey" : "Nuestro Camino"}
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            {t.timeline.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-12 border-l-2 border-accent/30 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-accent shadow-lg shadow-accent/50" />
                <div className="bg-muted/20 backdrop-blur-sm rounded-lg p-6 border border-muted/20">
                  <div className="text-2xl font-bold text-accent mb-2">{item.year}</div>
                  <p className="text-foreground/80">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-24">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {language === "en" ? "Our Team" : "Nuestro Equipo"}
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t.team.map((member, index) => (
              <motion.div
                key={index}
                className="group bg-muted/20 backdrop-blur-sm rounded-2xl p-6 border border-muted/20 hover:border-accent/50 transition-all text-center"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 group-hover:opacity-0 transition-opacity z-10" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    sizes="160px"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-foreground/60">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Partners Section */}
        <section>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.partners.title}
            </h2>
            <p className="text-foreground/60">{t.partners.subtitle}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="aspect-square bg-muted/10 backdrop-blur-sm rounded-xl border border-muted/20 hover:border-accent/30 transition-all flex items-center justify-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-12 h-12 text-muted/40" />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
