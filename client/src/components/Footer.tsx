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
    <footer className="relative bg-gradient-to-t from-slate-100 to-slate-50 dark:from-[#0a192f] dark:to-[#081a2a] border-t border-slate-200 dark:border-slate-700 py-16 transition-colors duration-500 overflow-hidden">
      {/* Decorative Glowing Circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-400/20 rounded-full filter blur-3xl animate-pulse opacity-50"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-400/20 rounded-full filter blur-3xl animate-pulse opacity-50"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-10">
        
        {/* Back to Top Button */}
        <motion.div whileHover={{ scale: 1.1 }} className="relative">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 opacity-30 blur-xl animate-pulse"></div>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToTop}
            className="relative flex items-center gap-3 px-6 py-3 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-600 hover:bg-blue-500/10 dark:hover:bg-blue-400/20 font-semibold shadow-lg backdrop-blur-md transition-all duration-300"
          >
            <ArrowUp className="h-5 w-5 animate-bounce" />
            Back to Top
          </Button>
        </motion.div>

        {/* Social / Heart Section */}
        <div className="text-center flex flex-col items-center space-y-2">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            © {currentYear} K.S. Pramudith. All rights reserved.
          </p>
          <p className="text-sm flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300">
            Made with{" "}
            <Heart className="h-5 w-5 text-red-500 animate-pulse" /> for showcasing IT talents
          </p>
        </div>

        {/* Quote Section */}
        <div className="text-center max-w-3xl bg-white/10 dark:bg-[#112240]/20 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-blue-800 shadow-xl">
          <blockquote className="text-lg italic text-slate-800 dark:text-slate-200 tracking-wide leading-relaxed">
            "Eager to gain hands-on experience through an internship, where I can apply my 
            academic knowledge to real-world challenges and contribute to innovative digital solutions."
          </blockquote>
          <cite className="text-sm text-slate-600 dark:text-slate-400 mt-3 block font-medium">- K.S. Pramudith</cite>
        </div>

      </div>
    </footer>
  );
}
