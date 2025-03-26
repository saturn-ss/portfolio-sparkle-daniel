
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "../ui-components/Container";
import ReviewCard from "../ui-components/ReviewCard";
import { reviews } from "@/data/reviews";

const ReviewsSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth + 100
        : scrollLeft + clientWidth - 100;
        
      sliderRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="section-padding">
      <Container className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Client Reviews</h2>
          <p className="text-muted-foreground">
            Here's what some of my clients from the US, Canada, and Australia have to say about working with me.
          </p>
        </div>
        
        <div className="relative">
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-none"
          >
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="min-w-[85%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%] snap-start"
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button 
              onClick={() => scroll("left")}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center",
                "bg-background/70 backdrop-blur-sm border border-border",
                "text-foreground hover:bg-primary hover:text-primary-foreground",
                "transition-colors pointer-events-auto"
              )}
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center",
                "bg-background/70 backdrop-blur-sm border border-border",
                "text-foreground hover:bg-primary hover:text-primary-foreground",
                "transition-colors pointer-events-auto"
              )}
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReviewsSection;
