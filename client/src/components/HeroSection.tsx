"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  isDark: boolean;
  toggleDark: () => void;
}

export default function Header({ isDark, toggleDark }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navigationItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const item of navigationItems) {
        const sec = document.getElementById(item.id);
        if (sec && sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-500
        ${isDark
          ? "bg-gradient-to-r from-[#0a192f]/90 to-[#112240]/90 border-blue-800/40"
          : "bg-white/70 backdrop-blur-md border-blue-100"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("about")}
            className={`font-extrabold text-xl cursor-pointer transition-colors 
              ${isDark
                ? "bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text"
                : "text-blue-700"
              }`}
          >
            K.S. Pramudith
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                className={`relative transition-colors duration-300 ${
                  activeSection === item.id
                    ? isDark
                      ? "text-cyan-400 font-semibold"
                      : "text-blue-600 font-semibold"
                    : isDark
                    ? "text-slate-300 hover:text-cyan-300"
                    : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="underline"
                    className={`absolute left-0 -bottom-1 w-full h-0.5 rounded-full ${
                      isDark ? "bg-cyan-400" : "bg-blue-600"
                    }`}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Theme + Mobile buttons */}
          <div className="flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDark}
                className="hover:bg-blue-500/10"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Moon className="h-5 w-5 text-blue-600" />
                )}
              </Button>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.div whileTap={{ scale: 0.9 }} className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ maxHeight: 0, opacity: 0 }}
              animate={{ maxHeight: 500, opacity: 1 }}
              exit={{ maxHeight: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`md:hidden overflow-hidden absolute top-16 left-0 w-full py-4 bg-white dark:bg-[#0a192f] border-t z-40 transition-colors ${
                isDark ? "border-blue-800/50" : "border-blue-100"
              }`}
            >
              <div className="flex flex-col space-y-4 px-6">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-base transition-colors ${
                      activeSection === item.id
                        ? isDark
                          ? "text-cyan-400 font-semibold"
                          : "text-blue-600 font-semibold"
                        : isDark
                        ? "text-slate-300 hover:text-cyan-300"
                        : "text-slate-700 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
