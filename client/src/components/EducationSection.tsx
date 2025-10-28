"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function EducationSection() {
  const educationHistory = [
    {
      degree: "Higher National Diploma in Information Technology (HNDIT)",
      institution: "SLIATE",
      location: "Galle, Sri Lanka",
      period: "2023 - Present",
      status: "Current",
      description:
        "Comprehensive program covering software development, database management, web technologies, and information systems.",
      isActive: true,
    },
    {
      degree: "GCE Advanced Level - Physical Science Stream",
      institution: "Matara Central College",
      location: "Matara, Sri Lanka",
      period: "2020",
      status: "Completed",
      description:
        "Studied Mathematics, Physics, and Chemistry, building strong analytical and problem-solving foundations.",
      isActive: false,
    },
    {
      degree: "GCE Ordinary Level",
      institution: "Matara Central College",
      location: "Matara, Sri Lanka",
      period: "2016",
      status: "Completed",
      description:
        "Completed foundational education with focus on science and mathematics subjects.",
      isActive: false,
    },
  ];

  const reference = {
    name: "Mrs. D.N.P. Attanayaka",
    title: "Senior Lecturer",
    institution: "SLIATE, Galle",
    phone: "0718026983",
    email: "priyangika@sliate.ac.lk",
  };

  const lineRef = useRef(null);
  const inView = useInView(lineRef, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start({ height: "100%" });
  }, [inView, controls]);

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#0a192f] transition-colors duration-500" id="education">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">Education</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Academic journey focused on building strong foundations in Information Technology and analytical thinking.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Line */}
          <motion.div
            ref={lineRef}
            initial={{ height: 0 }}
            animate={controls}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 w-1 bg-blue-200 dark:bg-blue-600 origin-top"
          />

          <div className="space-y-12">
            {educationHistory.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div
                    className={`w-8 h-8 rounded-full border-4 flex items-center justify-center ${
                      edu.isActive ? "bg-blue-500 border-blue-400" : "bg-slate-300 dark:bg-slate-700 border-slate-400"
                    }`}
                  >
                    <GraduationCap
                      className={`h-4 w-4 ${edu.isActive ? "text-white" : "text-slate-700 dark:text-slate-200"}`}
                    />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <Card className="hover-elevate transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2 text-slate-900 dark:text-slate-100">{edu.degree}</CardTitle>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                              <GraduationCap className="h-4 w-4" /> {edu.institution}
                            </div>
                            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                              <MapPin className="h-4 w-4" /> {edu.location}
                            </div>
                            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                              <Calendar className="h-4 w-4" /> {edu.period}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            edu.isActive
                              ? "bg-blue-500 text-white"
                              : "bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                          }`}
                        >
                          {edu.status}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700 dark:text-slate-300">{edu.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reference */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">Academic Reference</h3>
            <p className="text-slate-600 dark:text-slate-300">Professional reference available upon request</p>
          </div>

          <Card className="max-w-2xl mx-auto hover-elevate transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">{reference.name}</CardTitle>
              <p className="text-slate-700 dark:text-slate-300">{reference.title}</p>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-slate-700 dark:text-slate-300">{reference.institution}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 justify-center text-slate-700 dark:text-slate-300">
                  <span className="font-medium">Phone:</span> {reference.phone}
                </div>
                <div className="flex items-center gap-2 justify-center text-slate-700 dark:text-slate-300">
                  <span className="font-medium">Email:</span> {reference.email}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
