"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MapPin, Phone, Mail, Linkedin } from "lucide-react";
import profileImage from "@assets/generated_images/Professional_portfolio_headshot_1d933dbc.png";

interface HeroSectionProps {
  onScrollToProjects: () => void;
}

export default function HeroSection({ onScrollToProjects }: HeroSectionProps) {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/files/KS_Pramudith_CV.pdf";
    link.download = "K.S._Pramudith_CV.pdf";
    link.click();
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const contacts = [
    { icon: MapPin, label: "Devinuwara, Sri Lanka", color: "text-red-500 dark:text-red-400" },
    { icon: Phone, label: "+94 781290968", color: "text-green-500 dark:text-green-400" },
    { icon: Mail, label: "sithnuwanpramudith2000@gmail.com", color: "text-blue-500 dark:text-blue-400" },
    { icon: Linkedin, label: "sithnuwan-pramudith", color: "text-indigo-500 dark:text-indigo-400" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gradient-to-b from-slate-100 to-slate-200 dark:from-[#0a192f] dark:to-[#0a2540] transition-colors"
    >
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-12"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div variants={item} className="flex justify-center lg:justify-start items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative w-72 h-72 lg:w-80 lg:h-80"
          >
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse
              bg-gradient-to-tr from-blue-500 via-cyan-400 to-transparent
              dark:from-blue-400 dark:via-cyan-300 dark:to-transparent"
            />
            <img
              src={profileImage}
              alt="K.S. Pramudith"
              className="relative w-full h-full rounded-full object-cover border-4 border-blue-500 dark:border-blue-400 shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div variants={item} className="flex-1 space-y-6">
          {/* Name & Role */}
          <div className="space-y-2">
            <motion.h1
              className="text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent 
                bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-500"
              variants={item}
            >
              K.S. Pramudith
            </motion.h1>
            <motion.p
              className="text-xl font-medium text-slate-700 dark:text-slate-300"
              variants={item}
            >
              Information Technology Undergraduate
            </motion.p>
          </div>

          {/* Description */}
          <motion.p
            className="text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl"
            variants={item}
          >
            Motivated IT student pursuing Higher National Diploma in IT (HNDIT) at SLIATE Labuduwa.
            Passionate about solving problems, building scalable software, and contributing to innovative digital solutions.
          </motion.p>

          {/* Contact Info Pills */}
          <motion.div className="flex flex-wrap gap-3 mt-4" variants={item}>
            {contacts.map((c, idx) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 px-5 py-2 bg-white dark:bg-[#0f1f3a] rounded-full text-slate-900 dark:text-white shadow-md hover:shadow-xl cursor-pointer transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Icon className={`h-5 w-5 ${c.color}`} />
                  <span className="text-sm font-medium">{c.label}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Action Buttons */}
          <motion.div className="flex flex-wrap gap-4 mt-6" variants={item}>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-700 flex items-center gap-2 transition-transform duration-300"
              onClick={onScrollToProjects}
            >
              View Projects <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border border-blue-400 text-blue-600 hover:bg-blue-200/20 dark:border-blue-500 dark:text-blue-300 dark:hover:bg-blue-600/20 flex items-center gap-2 transition-transform duration-300"
              onClick={handleDownloadCV}
            >
              <Download className="h-5 w-5" /> Download CV
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
