'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  threshold?: number;
}

export function Reveal({ 
  children, 
  className, 
  delay = 0, 
  y = 40,
  threshold = 0.1 
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        className
      )}
      style={{
        transform: isVisible ? 'translateY(0)' : `translateY(${y}px)`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}
