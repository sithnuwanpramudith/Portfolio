import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function EducationSection() {
  const educationHistory = [
    {
      degree: "Higher National Diploma in Information Technology (HNDIT)",
      institution: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
      location: "Galle, Sri Lanka",
      period: "2023 - Present",
      status: "Current",
      description: "Comprehensive program covering software development, database management, web technologies, and information systems.",
      isActive: true
    },
    {
      degree: "GCE Advanced Level - Physical Science Stream",
      institution: "Matara Central College",
      location: "Matara, Sri Lanka", 
      period: "2020",
      status: "Completed",
      description: "Studied Mathematics, Physics, and Chemistry, building strong analytical and problem-solving foundations.",
      isActive: false
    },
    {
      degree: "GCE Ordinary Level",
      institution: "Matara Central College",
      location: "Matara, Sri Lanka",
      period: "2016", 
      status: "Completed",
      description: "Completed foundational education with focus on science and mathematics subjects.",
      isActive: false
    }
  ];

  const reference = {
    name: "Mrs. D.N.P. Attanayaka",
    title: "Senior Lecturer",
    institution: "Sri Lanka Institute of Advanced Technological Education (SLIATE), Galle",
    phone: "0718026983",
    email: "priyangika@sliate.ac.lk"
  };

  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic journey focused on building strong foundations in Information Technology 
            and analytical thinking.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {educationHistory.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                data-testid={`education-item-${index}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className={`w-8 h-8 rounded-full border-4 border-background flex items-center justify-center ${
                    edu.isActive ? 'bg-primary' : 'bg-muted'
                  }`}>
                    <GraduationCap className={`h-4 w-4 ${
                      edu.isActive ? 'text-primary-foreground' : 'text-muted-foreground'
                    }`} />
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className="hover-elevate">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <GraduationCap className="h-4 w-4" />
                              <span className="text-sm font-medium">{edu.institution}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span className="text-sm">{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span className="text-sm">{edu.period}</span>
                            </div>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.isActive 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {edu.status}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">{edu.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reference Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Academic Reference</h3>
            <p className="text-muted-foreground">Professional reference available upon request</p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{reference.name}</CardTitle>
              <p className="text-muted-foreground">{reference.title}</p>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-foreground/80">{reference.institution}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-sm font-medium">Phone:</span>
                  <span className="text-sm">{reference.phone}</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-sm font-medium">Email:</span>
                  <span className="text-sm">{reference.email}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}