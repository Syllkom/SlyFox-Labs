
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={cn(
        "flex flex-col items-center justify-center min-h-[calc(100vh-4rem-56px)] p-6 sm:p-8 md:p-12 bg-background w-full overflow-hidden",
        isVisible ? "animate-slideInUp" : "opacity-0"
      )}
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:gap-8">
        <div
          className={cn(
            "relative mb-8 md:mb-0 md:w-1/2 md:order-2 flex justify-center md:justify-end opacity-0",
            isVisible && "animate-slideInUp"
          )}
          style={{ animationDelay: isVisible ? '0.2s' : undefined }}
        >
          <Image
            src="/images/coding.png"
            alt="Persona programando en una laptop con iconos de tecnología flotando"
            width={300}
            height={270}
            className="object-contain"
            data-ai-hint="developer coding technology"
            priority
          />
        </div>
        <div className="md:w-1/2 md:order-1 text-left">
          <h1
            className={cn(
              "text-2xl sm:text-3xl font-bold mb-4 text-foreground leading-tight max-w-xl opacity-0",
              isVisible && "animate-slideInUp"
            )}
            style={{ animationDelay: isVisible ? '0.4s' : undefined }}
          >
            Recursos para Desarrolladores Frontend y Diseñadores por SlyFox Labs
          </h1>
          <p
            className={cn(
              "text-sm sm:text-base text-muted-foreground mb-8 max-w-md opacity-0",
              isVisible && "animate-slideInUp"
            )}
            style={{ animationDelay: isVisible ? '0.6s' : undefined }}
          >
            SlyFox Labs es una empresa dedicada exclusivamente al desarrollo de HorekuOs.
            Sin embargo, también cuenta con diversos proyectos asociados, como Anime & Onigiri,
            Kaze-Bot y RenjiBot.
          </p>
          <Button
            variant="filled"
            size="lg"
            className={cn(
              "px-10 py-3 text-base opacity-0",
              isVisible && "animate-slideInUp"
            )}
            style={{ animationDelay: isVisible ? '0.8s' : undefined }}
            asChild
          >
            <Link href="#contact">Contactar</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
