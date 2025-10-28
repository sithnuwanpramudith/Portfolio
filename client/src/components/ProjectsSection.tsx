"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, Smartphone, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import ecommerceImage from "@assets/generated_images/E-commerce_spice_website_mockup_59d47c76.png";
import studentAppImage from "@assets/generated_images/Student_management_app_mockup_73338921.png";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A responsive and user-friendly website to showcase and sell spice products. Developed with HTML, CSS, PHP, JavaScript, and MySQL.",
      image: ecommerceImage,
      technologies: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
      icon: ShoppingCart,
      features: ["Product Display", "Shopping Cart", "Customer Orders", "Admin Dashboard"]
    },
    {
      title: "Student Management System",
      description: "Cross-platform Student Management System using Flutter & Firebase for real-time data, attendance tracking, grades management, and reports.",
      image: studentAppImage,
      technologies: ["Flutter", "Firebase", "Dart"],
      icon: Smartphone,
      features: ["Real-time Data", "Attendance Tracking", "Grade Management", "Reports"]
    }
  ];

  const handleViewProject = (title: string) => console.log(`View project: ${title}`);
  const handleViewCode = (title: string) => console.log(`View code for: ${title}`);

  return (
    <section id="projects" className="py-16 bg-slate-50 dark:bg-[#0a192f] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Featured Projects
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Practical applications of web development and database management through real-world projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-200 bg-white dark:bg-[#112240]">
                  <div className="relative h-60 w-full flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 p-2 rounded-lg bg-white/80 dark:bg-[#0a192f]/80 backdrop-blur-sm">
                      <IconComponent className="h-5 w-5 text-blue-500 dark:text-cyan-400" />
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-4">
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0 flex flex-col gap-3 flex-1">
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs py-1 px-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <ul className="flex flex-col gap-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-2 h-2 bg-blue-500 dark:bg-cyan-400 rounded-full mt-1"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="flex gap-2 pt-3">
                        <Button
                          onClick={() => handleViewProject(project.title)}
                          className="flex-1 text-sm py-2 bg-blue-500 text-white hover:bg-blue-600 dark:bg-cyan-500 dark:hover:bg-cyan-600 transition-all"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" /> View Project
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => handleViewCode(project.title)}
                          className="flex-1 text-sm py-2 border-blue-500 text-blue-500 hover:bg-blue-100 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-700/20 transition-all"
                        >
                          <Code className="h-4 w-4 mr-1" /> View Code
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
