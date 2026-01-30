"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { LucideIcon } from "lucide-react";

interface Card {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface CardGridProps {
  cards: Card[];
  columns?: 2 | 3 | 4;
}

export default function CardGrid({ cards, columns = 3 }: CardGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <motion.div
      className={`grid grid-cols-1 ${gridCols[columns]} gap-6 md:gap-8`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="group relative p-6 md:p-8 rounded-2xl bg-muted/30 backdrop-blur-sm border border-muted/20 hover:border-accent/50 transition-all duration-300"
          variants={fadeInUp}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300" />
          
          <div className="relative z-10">
            {card.icon && (
              <div className="mb-4 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <card.icon className="w-6 h-6 text-accent" />
              </div>
            )}
            
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
              {card.title}
            </h3>
            
            <p className="text-foreground/70 leading-relaxed">
              {card.description}
            </p>
          </div>

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      ))}
    </motion.div>
  );
}
