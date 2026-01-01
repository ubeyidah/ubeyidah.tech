"use client";

import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "50px",
  });

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out";

    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${baseClasses} opacity-0 translate-y-8`;
        case "down":
          return `${baseClasses} opacity-0 -translate-y-8`;
        case "left":
          return `${baseClasses} opacity-0 translate-x-8`;
        case "right":
          return `${baseClasses} opacity-0 -translate-x-8`;
        case "fade":
          return `${baseClasses} opacity-0`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0`;
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(getAnimationClasses(), className)}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}