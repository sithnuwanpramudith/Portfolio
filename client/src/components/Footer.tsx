import { Button } from "@/components/ui/button";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/20 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Back to Top Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="group"
            data-testid="button-back-to-top"
          >
            <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © {currentYear} K.S. Pramudith. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500" /> for showcasing IT talents
            </p>
          </div>

          {/* Quote */}
          <div className="text-center max-w-2xl">
            <blockquote className="text-lg italic text-foreground/80">
              "Eager to gain hands-on experience through an internship, where I can apply my 
              academic knowledge to real-world challenges and contribute to innovative digital solutions."
            </blockquote>
            <cite className="text-sm text-muted-foreground mt-2 block">- K.S. Pramudith</cite>
          </div>
        </div>
      </div>
    </footer>
  );
}