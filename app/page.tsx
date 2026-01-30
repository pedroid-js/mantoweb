"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { Layers, Globe, TrendingUp, Users, Target, Shield } from "lucide-react";
import HeroParallax from "@/components/HeroParallax";
import StatCounter from "@/components/StatCounter";
import CardGrid from "@/components/CardGrid";
import AccordionFAQ from "@/components/AccordionFAQ";
import Button from "@/components/Button";
import { content, INITIAL_STATS, STATS_INCREMENT } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const router = useRouter();
  const { language } = useLanguage();
  
  const t = content[language];
  const problemRef = useRef<HTMLElement>(null);
  const problemInView = useInView(problemRef, { once: true, margin: "-100px" });

  const handlePrimaryCTA = () => {
    router.push("/donate");
  };

  const handleSecondaryCTA = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  const solutionCards = t.solution.steps.map((step, i) => ({
    title: step.title,
    description: step.description,
    icon: [Target, Users, Shield][i],
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroParallax
        headline={t.hero.headline}
        subheadline={t.hero.subheadline}
        primaryCTA={t.hero.primaryCTA}
        secondaryCTA={t.hero.secondaryCTA}
        onPrimaryCTA={handlePrimaryCTA}
        onSecondaryCTA={handleSecondaryCTA}
      />

      {/* Intro Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            className="text-lg md:text-xl text-foreground/80 text-center leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.intro.text}
          </motion.p>
          <motion.div
            className="mt-8 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg text-sm text-foreground/70 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t.disclaimer.text}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-muted/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <StatCounter
              target={INITIAL_STATS.participants}
              label={t.stats.participants}
              incrementPerMinute={STATS_INCREMENT.participants}
              storageKey="mantossalvo_participants"
            />
            <StatCounter
              target={INITIAL_STATS.countries}
              label={t.stats.countries}
              incrementPerMinute={STATS_INCREMENT.countries}
              storageKey="mantossalvo_countries"
            />
            <StatCounter
              target={INITIAL_STATS.raised}
              label={t.stats.raised}
              prefix="$"
              incrementPerMinute={STATS_INCREMENT.raised}
              storageKey="mantossalvo_raised"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <motion.section
        ref={problemRef}
        className="py-20 relative overflow-hidden"
        initial="hidden"
        animate={problemInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Background parallax element */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.problem.title}
            </h2>
            <p className="text-xl text-accent font-semibold mb-6">
              {t.problem.subtitle}
            </p>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              {t.problem.description}
            </p>
          </motion.div>

          {/* Abstract Earth Layers Visualization */}
          <motion.div
            className="max-w-2xl mx-auto relative h-80"
            variants={fadeInUp}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {[0, 1, 2, 3, 4].map((layer) => (
                <motion.div
                  key={layer}
                  className="absolute rounded-full border-2"
                  style={{
                    width: `${(5 - layer) * 80}px`,
                    height: `${(5 - layer) * 80}px`,
                    borderColor: `rgba(34, 211, 238, ${0.2 + layer * 0.15})`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={problemInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: layer * 0.15, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(circle, rgba(34, 211, 238, ${0.05 + layer * 0.02}) 0%, transparent 70%)`,
                    }}
                  />
                </motion.div>
              ))}
              <motion.div
                className="absolute"
                initial={{ opacity: 0 }}
                animate={problemInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Layers className="w-16 h-16 text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Solution Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-muted/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.solution.title}
            </h2>
            <p className="text-xl text-accent font-semibold">
              {t.solution.subtitle}
            </p>
          </motion.div>

          <CardGrid cards={solutionCards} columns={3} />
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.impact.title}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {t.impact.description}
            </p>
          </motion.div>

          <motion.div
            className="bg-muted/20 backdrop-blur-sm rounded-2xl p-8 border border-muted/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold">{t.impact.progressLabel}</span>
              <span className="text-accent font-bold">73%</span>
            </div>
            <div className="w-full h-4 bg-muted/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "73%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.transparency.title}
            </h2>
            <p className="text-xl text-accent font-semibold">
              {t.transparency.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Breakdown bars */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {t.transparency.breakdown.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-accent font-bold">{item.value}%</span>
                  </div>
                  <div className="w-full h-3 bg-muted/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Visual donut representation */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  {t.transparency.breakdown.reduce((acc, item, index) => {
                    const prevTotal = t.transparency.breakdown
                      .slice(0, index)
                      .reduce((sum, i) => sum + i.value, 0);
                    const circumference = 2 * Math.PI * 40;
                    const offset = (prevTotal / 100) * circumference;
                    const strokeDasharray = `${(item.value / 100) * circumference} ${circumference}`;

                    acc.push(
                      <motion.circle
                        key={index}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={item.color}
                        strokeWidth="12"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={-offset}
                        initial={{ strokeDashoffset: 0 }}
                        whileInView={{ strokeDashoffset: -offset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    );
                    return acc;
                  }, [] as JSX.Element[])}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="w-12 h-12 text-accent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.faq.title}
            </h2>
            <p className="text-xl text-foreground/60">
              {t.faq.subtitle}
            </p>
          </motion.div>

          <AccordionFAQ items={t.faq.items} />

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-foreground/70 mb-4">{t.faq.ctaText}</p>
            <Button variant="outline" size="md">
              {t.faq.ctaButton}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              {t.finalCTA.title}
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 mb-12">
              {t.finalCTA.subtitle}
            </p>
            <Button
              onClick={handlePrimaryCTA}
              variant="primary"
              size="lg"
              className="px-12 py-5 text-xl shadow-2xl shadow-accent/50"
            >
              {t.finalCTA.button}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
