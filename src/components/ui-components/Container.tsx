
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Container = ({ 
  children, 
  className, 
  as: Component = "div" 
}: ContainerProps) => {
  return (
    <Component className={cn("section-container", className)}>
      {children}
    </Component>
  );
};

export default Container;
