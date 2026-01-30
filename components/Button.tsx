"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary: "bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50",
  secondary: "bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/30",
  outline: "border-2 border-slate-700 dark:border-slate-300 bg-transparent hover:border-slate-900 dark:hover:border-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800",
  ghost: "hover:bg-slate-100 dark:hover:bg-slate-800",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const getTextColor = () => {
    if (variant === "primary" || variant === "secondary") return '#0f172a';
    if (variant === "outline" || variant === "ghost") return '#0f172a';
    return undefined;
  };

  return (
    <motion.button
      className={`
        font-semibold rounded-lg transition-all
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      style={{ color: getTextColor() }}
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}
