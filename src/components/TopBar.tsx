
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ThemeToggleButton } from './ThemeToggleButton'; 

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); 
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/80 backdrop-blur-md h-16 transition-shadow duration-200",
        scrolled ? "shadow-sm" : "shadow-none"
      )}
    >
      <div 
        className={cn(
          "flex items-center space-x-1 opacity-0",
          loaded && "animate-fadeIn"
        )}
        style={{ animationDelay: loaded ? '0.1s' : undefined }}
      >
        <Image 
          src="/images/SlyFox.png" 
          alt="SlyFox Logo" 
          width={40} 
          height={40} 
          data-ai-hint="fox logo orange"
        />
        <span className="text-2xl font-bold text-foreground">SlyFox</span>
      </div>
      <div className="flex items-center space-x-2">
        <Button 
          className={cn(
            "rounded-full px-6 py-2 text-sm opacity-0",
            loaded && "animate-fadeIn"
          )}
          style={{ animationDelay: loaded ? '0.3s' : undefined }}
        >
          HorekuOs
        </Button>
        <ThemeToggleButton />
      </div>
    </header>
  );
}
