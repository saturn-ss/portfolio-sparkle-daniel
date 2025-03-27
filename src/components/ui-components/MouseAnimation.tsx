
import { useEffect, useState } from "react";

const MouseAnimation = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fixed pointer-events-none z-50 h-5 w-5 rounded-full bg-primary/30 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 backdrop-blur-sm"
        style={{ left: position.x, top: position.y }}
      />
      <div 
        className="fixed pointer-events-none z-50 h-40 w-40 rounded-full bg-primary/5 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 blur-xl"
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
};

export default MouseAnimation;
