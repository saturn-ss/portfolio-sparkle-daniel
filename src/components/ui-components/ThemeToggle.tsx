
import { Moon, Sun, Leaf } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
        theme === "dark" ? "bg-secondary" : 
        theme === "light" ? "bg-secondary" : 
        "bg-accent/70",
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Leaf size={20} className="text-primary-foreground animate-fade-in" />
      ) : theme === "dark" ? (
        <Sun size={20} className="text-primary animate-fade-in" />
      ) : (
        <Moon size={20} className="text-primary animate-fade-in" />
      )}
    </button>
  );
};

export default ThemeToggle;
