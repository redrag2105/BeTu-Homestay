import { motion } from "motion/react";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200";

  const variants = {
    default: "gradient-primary text-white shadow-soft",
    secondary: "bg-orange-100 text-orange-800",
    outline: "border border-orange-500 text-orange-600 bg-white/80",
    destructive: "bg-red-500 text-white",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
    >
      {children}
    </motion.span>
  );
}

export { Badge };
