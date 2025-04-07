
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ProjectImageCarouselProps {
  mainImage: string;
  title: string;
  additionalImages?: string[];
}

const ProjectImageCarousel = ({ mainImage, title, additionalImages = [] }: ProjectImageCarouselProps) => {
  const [currentImageLoaded, setCurrentImageLoaded] = useState(false);
  const allImages = [mainImage, ...(additionalImages || [])];
  
  return (
    <div className="relative rounded-xl overflow-hidden mb-8 animate-fade-in [animation-delay:0.2s]">
      <Carousel className="w-full">
        <CarouselContent>
          {allImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <div className={cn(
                  "absolute inset-0 bg-muted/30 backdrop-blur-sm transition-all duration-500",
                  currentImageLoaded ? "opacity-0" : "opacity-100"
                )} />
                <img
                  src={image}
                  alt={`${title} - image ${index + 1}`}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-700 ease-out",
                    currentImageLoaded ? "opacity-100" : "opacity-0"
                  )}
                  onLoad={() => setCurrentImageLoaded(true)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 lg:-left-4" />
        <CarouselNext className="right-4 lg:-right-4" />
      </Carousel>
    </div>
  );
};

export default ProjectImageCarousel;
