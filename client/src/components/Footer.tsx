"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-[#0a192f] border-t border-slate-200 dark:border-slate-700 py-12 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-8">
        
        {/* Back to Top Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 opacity-20 blur-xl animate-pulse"></div>
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="relative flex items-center gap-2 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-600 hover:bg-blue-500/10 dark:hover:bg-blue-400/20 transition"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </Button>
        </motion.div>

        {/* Copyright & Heart */}
        <div className="text-center space-y-2">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            © {currentYear} K.S. Pramudith. All rights reserved.
          </p>
          <p className="text-sm flex items-center justify-center gap-1 text-slate-700 dark:text-slate-300">
            Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> for showcasing IT talents
          </p>
        </div>

        {/* Quote */}
        <div className="text-center max-w-2xl">
          <blockquote className="text-lg italic text-slate-800 dark:text-slate-200">
            "Eager to gain hands-on experience through an internship, where I can apply my 
            academic knowledge to real-world challenges and contribute to innovative digital solutions."
          </blockquote>
          <cite className="text-sm text-slate-600 dark:text-slate-400 mt-2 block">- K.S. Pramudith</cite>
        </div>
      </div>
    </footer>
  );
}
