
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  name: string;
  company: string;
  review: string;
  country: string;
  className?: string;
}

const ReviewCard = ({
  name,
  company,
  review,
  country,
  className,
}: ReviewCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card h-full p-6 rounded-lg flex flex-col",
        className
      )}
    >
      <Quote className="h-8 w-8 text-muted-foreground mb-4" />
      <p className="text-foreground/90 flex-grow mb-6 text-balance leading-relaxed">
        "{review}"
      </p>
      <div className="mt-auto">
        <p className="font-medium">{name}</p>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm text-muted-foreground">{company}</p>
          <p className="text-xs text-muted-foreground">{country}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
