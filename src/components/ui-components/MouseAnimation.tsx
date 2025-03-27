
import { useEffect, useState, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Point {
  x: number;
  y: number;
  age: number;
  size: number;
  color: string;
}

const MouseAnimation = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const [isDrawing, setIsDrawing] = useState(true);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const { theme } = useTheme();
  
  // Generate a color based on the current theme
  const getThemeColor = () => {
    switch (theme) {
      case 'dark':
        return `rgba(190, 190, 190, ${Math.random() * 0.5 + 0.3})`;
      case 'light':
        return `rgba(20, 153, 90, ${Math.random() * 0.5 + 0.3})`;
      case 'green':
        return `rgba(120, 255, 180, ${Math.random() * 0.5 + 0.3})`;
      default:
        return `rgba(150, 150, 150, ${Math.random() * 0.5 + 0.3})`;
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDrawing) {
        setPoints(prevPoints => [
          ...prevPoints,
          {
            x: e.clientX,
            y: e.clientY,
            age: 0,
            size: Math.random() * 3 + 2,
            color: getThemeColor()
          }
        ]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDrawing, theme]);

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      
      // Update points age and remove old ones
      setPoints(prevPoints => 
        prevPoints
          .map(point => ({
            ...point,
            age: point.age + deltaTime / 100
          }))
          .filter(point => point.age < 10)
      );
    }
    
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {points.map((point, index) => {
        const opacity = Math.max(0, 1 - point.age / 10);
        const scale = Math.max(0.1, 1 - point.age / 20);
        
        return (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              left: point.x,
              top: point.y,
              width: point.size,
              height: point.size,
              backgroundColor: point.color,
              opacity: opacity,
              transform: `translate(-50%, -50%) scale(${scale})`,
              boxShadow: `0 0 ${6 * scale}px ${point.color}`,
              transition: 'opacity 0.5s ease-out, transform 0.3s ease-out'
            }}
          />
        );
      })}
    </div>
  );
};

export default MouseAnimation;
