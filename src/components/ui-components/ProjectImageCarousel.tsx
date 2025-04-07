
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useCarousel } from "@/components/ui/carousel";

interface ProjectImageCarouselProps {
  mainImage: string;
  title: string;
  additionalImages?: string[];
}

const ProjectImageCarousel = ({ mainImage, title, additionalImages = [] }: ProjectImageCarouselProps) => {
  const [imagesLoaded, setImagesLoaded] = useState<{[key: number]: boolean}>({});
  const allImages = [mainImage, ...(additionalImages || [])];
  const [api, setApi] = useState<ReturnType<typeof useCarousel>["api"]>();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => ({
      ...prev,
      [index]: true
    }));
  };

  // Fix image paths if they start with "public/"
  const getImagePath = (path: string) => {
    return path.startsWith("public/") ? path.substring(7) : path;
  };
  
  // Update current index when slide changes
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  
  return (
    <div className="relative rounded-xl overflow-hidden mb-8 animate-fade-in [animation-delay:0.2s]">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {allImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <div className={cn(
                  "absolute inset-0 bg-muted/30 backdrop-blur-sm transition-all duration-500",
                  imagesLoaded[index] ? "opacity-0" : "opacity-100"
                )} />
                <img
                  src={getImagePath(image)}
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
      </Carousel>
      
      {allImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {allImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                currentIndex === idx 
                  ? "bg-white scale-110" 
                  : "bg-white/50 hover:bg-white/70"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectImageCarousel;
