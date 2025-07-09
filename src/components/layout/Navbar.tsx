import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { HOMESTAY_INFO } from "@/lib/constants";

interface NavbarProps {
  onSectionChange: (section: string, scrollToElement?: string) => void;
}

export default function Navbar({ onSectionChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50
          ? "glass-effect shadow-soft"
          : "bg-gradient-to-r from-orange-50/90 to-orange-100/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => onSectionChange("home")}
          >
            <div className="relative">
              {/* Logo container with advanced styling */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 15 }}
                className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-glow group-hover:shadow-2xl transition-all duration-500"
              >
                {/* Background with gradient border */}
                <div className="absolute inset-0 gradient-primary rounded-2xl p-0.5">
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      src="logo.webp"
                      alt="BeTu Homestay Logo"
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Animated shine effect */}
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                />

                {/* Corner accent */}
                <div className="absolute top-1 right-1 w-2 h-2 bg-amber-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Floating particles */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-orange-300 rounded-full"
              />
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2,
                }}
                className="absolute -bottom-1 -left-1 w-1 h-1 bg-amber-400 rounded-full"
              />
            </div>

            <div className="flex flex-col">
              <motion.span
                className="text-2xl font-bold text-gradient relative"
                whileHover={{ letterSpacing: "0.05em" }}
                transition={{ duration: 0.3 }}
              >
                {HOMESTAY_INFO.name}
                {/* Underline animation */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 gradient-primary rounded-full"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </motion.span>
              <motion.span
                className="text-sm text-orange-600/80 font-semibold flex items-center space-x-1"
                whileHover={{ color: "rgb(194 65 12)" }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ✨
                </motion.span>
                <span>Luxury Experience</span>
              </motion.span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSectionChange("home", "rooms-section")}
            className="hidden lg:flex items-center space-x-2 gradient-primary text-white px-8 py-4 rounded-2xl font-bold shadow-glow hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
              style={{ skewX: "-20deg" }}
            />
            <Phone className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Đặt Phòng</span>
          </motion.button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl gradient-primary text-white shadow-glow"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
