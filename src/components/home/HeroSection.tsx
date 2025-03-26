
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "../ui-components/Container";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center text-center relative overflow-hidden section-padding pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full bg-gradient-to-b from-background/0 via-background/80 to-background" />
      </div>
      
      <Container className="flex flex-col items-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-secondary text-secondary-foreground animate-fade-in">
          Shopify Developer with 4 Years of Experience
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up [animation-delay:0.2s]">
          Creating <span className="text-primary">Exceptional</span> E-commerce Experiences
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-slide-up [animation-delay:0.3s]">
          I build high-converting Shopify stores that combine stunning design with powerful functionality to drive business growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-slide-up [animation-delay:0.4s]">
          <a
            href="#projects"
            className={cn(
              "bg-primary text-primary-foreground hover:opacity-90 transition-all",
              "px-8 py-3 rounded-lg font-medium flex items-center justify-center"
            )}
            onClick={(e) => {
              e.preventDefault();
              scrollToProjects();
            }}
          >
            View My Work
          </a>
          <a
            href="/contact"
            className={cn(
              "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all",
              "px-8 py-3 rounded-lg font-medium flex items-center justify-center"
            )}
          >
            Get in Touch
          </a>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToProjects}
            aria-label="Scroll down"
            className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
