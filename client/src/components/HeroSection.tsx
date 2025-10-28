import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MapPin, Phone, Mail, Linkedin } from "lucide-react";
import profileImage from "@assets/generated_images/Professional_portfolio_headshot_1d933dbc.png";

interface HeroSectionProps {
  onScrollToProjects: () => void;
}

export default function HeroSection({ onScrollToProjects }: HeroSectionProps) {
  const handleDownloadCV = () => {
    console.log('Download CV triggered');
    // TODO: Implement CV download functionality
  };

  const handleContactClick = (type: string) => {
    console.log(`Contact ${type} clicked`);
    // TODO: Implement contact actions
  };

  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src={profileImage}
                alt="K.S. Pramudith"
                className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
                data-testid="img-profile"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                K.S. Pramudith
              </h1>
              <p className="text-2xl text-muted-foreground">
                Information Technology Undergraduate
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Motivated and enthusiastic IT student pursuing Higher National Diploma in IT (HNDIT) at SLIATE Labuduwa. 
                A fast learner with passion for solving problems, collaborating in teams, and contributing to innovative 
                digital solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-foreground">Devinuwara, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-foreground">+94 781290968</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-foreground">sithnuwanpramudith2000@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <span className="text-foreground">sithnuwan-pramudith</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={onScrollToProjects}
                className="group"
                data-testid="button-view-projects"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadCV}
                data-testid="button-download-cv"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}