import { motion } from "motion/react";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 relative overflow-hidden group";

  const variants = {
    primary:
      "gradient-primary text-white shadow-glow hover:shadow-2xl hover:scale-105",
    secondary:
      "bg-orange-100 text-orange-800 hover:bg-orange-200 shadow-soft hover:shadow-glow",
    outline:
      "border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-glow",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed hover:scale-100",
        className,
      )}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
        style={{ skewX: "-20deg" }}
      />
      <div className="relative z-10 flex items-center gap-2">{children}</div>
    </motion.button>
  );
}
