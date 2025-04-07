
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
  const [imagesLoaded, setImagesLoaded] = useState<{[key: number]: boolean}>({});
  const allImages = [mainImage, ...(additionalImages || [])];
  
  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => ({
      ...prev,
      [index]: true
    }));
  };
  
  return (
    <div className="relative rounded-xl overflow-hidden mb-8 animate-fade-in [animation-delay:0.2s]">
      <Carousel className="w-full">
        <CarouselContent>
          {allImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <div className={cn(
                  "absolute inset-0 bg-muted/30 backdrop-blur-sm transition-all duration-500",
                  imagesLoaded[index] ? "opacity-0" : "opacity-100"
                )} />
                <img
                  src={image}
                  alt={`${title} - image ${index + 1}`}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-700 ease-out",
                    imagesLoaded[index] ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  )}
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 lg:-left-4" />
        <CarouselNext className="right-4 lg:-right-4" />
      </Carousel>
      
      {allImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
          {allImages.map((_, idx) => (
            <span 
              key={idx} 
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300", 
                "bg-white/50"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectImageCarousel;
