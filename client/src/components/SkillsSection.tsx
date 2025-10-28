"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Layers, Brain, Users, Target, Lightbulb } from "lucide-react";
import { motion as m } from "framer-motion";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "C#", percentage: 80 },
        { name: "PHP", percentage: 75 },
        { name: "JavaScript", percentage: 90 },
      ],
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-400"
    },
    {
      title: "Database Management",
      icon: Database,
      skills: [
        { name: "MySQL", percentage: 85 },
      ],
      gradient: "bg-gradient-to-r from-green-400 to-teal-300"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "HTML", percentage: 95 },
        { name: "CSS", percentage: 90 },
        { name: "JavaScript", percentage: 90 },
      ],
      gradient: "bg-gradient-to-r from-purple-400 to-pink-400"
    },
    {
      title: "Development Skills",
      icon: Layers,
      skills: [
        { name: "Frontend Development", percentage: 90 },
        { name: "Backend Development", percentage: 80 },
      ],
      gradient: "bg-gradient-to-r from-orange-400 to-yellow-300"
    },
  ];

  const softSkills = [
    { name: "Attention to Detail", icon: Target },
    { name: "Logical Approach", icon: Brain },
    { name: "Creative Ability", icon: Lightbulb },
    { name: "Team Collaboration", icon: Users },
  ];

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-[#0a192f] transition-colors">
      <motion.div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" variants={container} initial="hidden" animate="visible">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Proficient in modern technologies and programming languages with a focus on full-stack web development and database management.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div key={index} variants={item} whileHover={{ scale: 1.05 }} className="cursor-pointer">
                <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-200 dark:bg-[#0f1f3a]">
                      <IconComponent className="h-8 w-8 text-slate-800 dark:text-white" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{skill.name}</span>
                          <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{skill.percentage}%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-[#0f1f3a] rounded-full h-3">
                          <m.div
                            className={`${category.gradient} h-3 rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-slate-100 dark:bg-[#0f1f3a] shadow hover:shadow-lg cursor-pointer transition-all duration-300"
                  variants={item}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="p-3 rounded-full bg-slate-200 dark:bg-[#0a192f]">
                    <IconComponent className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <span className="text-sm font-medium text-center text-slate-900 dark:text-white">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Languages */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Languages</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="outline" className="text-lg py-2 px-4">English (Fluent)</Badge>
            <Badge variant="outline" className="text-lg py-2 px-4">Sinhala (Fluent)</Badge>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
