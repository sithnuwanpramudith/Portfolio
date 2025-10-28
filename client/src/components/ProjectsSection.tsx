import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, Smartphone, ShoppingCart } from "lucide-react";
import ecommerceImage from "@assets/generated_images/E-commerce_spice_website_mockup_59d47c76.png";
import studentAppImage from "@assets/generated_images/Student_management_app_mockup_73338921.png";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Website new",
      description: "A responsive and user-friendly website designed to showcase and sell spice products. Developed using HTML, CSS, PHP, JavaScript, and MySQL. The system includes features such as product display, shopping cart functionality, customer order form, and admin dashboard for managing products and orders. Focused on clean UI design, smooth navigation, and real-time interactivity using JavaScript.",
      image: ecommerceImage,
      technologies: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
      icon: ShoppingCart,
      features: [
        "Product Display System",
        "Shopping Cart Functionality", 
        "Customer Order Management",
        "Admin Dashboard",
        "Real-time Interactivity"
      ]
    },
    {
      title: "E-Commerce Website",
      description: "A responsive and user-friendly website designed to showcase and sell spice products. Developed using HTML, CSS, PHP, JavaScript, and MySQL. The system includes features such as product display, shopping cart functionality, customer order form, and admin dashboard for managing products and orders. Focused on clean UI design, smooth navigation, and real-time interactivity using JavaScript.",
      image: ecommerceImage,
      technologies: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
      icon: ShoppingCart,
      features: [
        "Product Display System",
        "Shopping Cart Functionality", 
        "Customer Order Management",
        "Admin Dashboard",
        "Real-time Interactivity"
      ]
    },
    {
      title: "Student Management System",
      description: "Cross-platform Student Management System using Flutter & Firebase for real-time data, attendance tracking, grades management, and comprehensive reports generation. This group project demonstrates collaborative development skills and modern mobile app architecture.",
      image: studentAppImage,
      technologies: ["Flutter", "Firebase", "Dart"],
      icon: Smartphone,
      features: [
        "Real-time Data Sync",
        "Attendance Tracking",
        "Grade Management",
        "Report Generation",
        "Cross-platform Support"
      ]
    }
  ];

  const handleViewProject = (projectTitle: string) => {
    console.log(`View project: ${projectTitle}`);
    // TODO: Implement project viewing functionality
  };

  const handleViewCode = (projectTitle: string) => {
    console.log(`View code for: ${projectTitle}`);
    // TODO: Implement code viewing functionality
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing practical applications of web development skills and database management 
            through real-world projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="overflow-hidden hover-elevate" data-testid={`card-project-${index}`}>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="p-2 rounded-lg bg-background/80 backdrop-blur-sm">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={() => handleViewProject(project.title)}
                      className="flex-1"
                      data-testid={`button-view-project-${index}`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleViewCode(project.title)}
                      data-testid={`button-view-code-${index}`}
                    >
                      <Code className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}