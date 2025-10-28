import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Layers, Brain, Users, Target, Lightbulb } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["C#", "PHP", "JavaScript"],
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Database Management",
      icon: Database,
      skills: ["MySQL"],
      color: "text-green-600 dark:text-green-400"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript"],
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      title: "Development Skills",
      icon: Layers,
      skills: ["Frontend Development", "Backend Development"],
      color: "text-orange-600 dark:text-orange-400"
    }
  ];

  const softSkills = [
    { name: "Attention to Detail", icon: Target },
    { name: "Logical Approach", icon: Brain },
    { name: "Creative Ability", icon: Lightbulb },
    { name: "Team Collaboration", icon: Users }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern technologies and programming languages with a focus on 
            full-stack web development and database management.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-skill-${index}`}>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <IconComponent className={`h-8 w-8 ${category.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
                <div
                  key={index}
                  className="flex flex-col items-center space-y-3 p-4 rounded-lg hover-elevate"
                  data-testid={`skill-soft-${index}`}
                >
                  <div className="p-3 rounded-full bg-accent/10">
                    <IconComponent className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Languages */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Languages</h3>
          <div className="flex justify-center gap-4">
            <Badge variant="outline" className="text-lg py-2 px-4">
              English (Fluent)
            </Badge>
            <Badge variant="outline" className="text-lg py-2 px-4">
              Sinhala (Fluent)
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}