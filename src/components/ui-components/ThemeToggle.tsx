
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
        theme === "dark" ? "bg-secondary" : "bg-secondary",
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={22} className="text-primary animate-fade-in" />
      ) : (
        <Moon size={22} className="text-primary animate-fade-in" />
      )}
    </button>
  );
};

export default ThemeToggle;
