
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';


const CustomGithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  </svg>
);

const CustomWhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
  </svg>
);

const CustomTelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
  </svg>
);


export default function ContactSection() {
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

  const socialLinks = [
    { Icon: CustomGithubIcon, href: "#", label: "GitHub", hint: "github social logo" },
    { Icon: CustomTelegramIcon, href: "#", label: "Telegram", hint: "telegram social logo" },
    { Icon: CustomWhatsappIcon, href: "#", label: "WhatsApp", hint: "whatsapp social logo" },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={cn(
        "flex flex-col items-center justify-center min-h-[calc(100vh-4rem-56px)] py-12 sm:py-16 md:py-20 bg-background w-full overflow-hidden",
        isVisible ? "animate-slideInUp" : "opacity-0"
      )}
    >
      <div className="w-full max-w-4xl xl:max-w-5xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col md:flex-row md:items-start md:gap-10 lg:gap-16">

        
        <div
          className={cn(
            "w-full md:w-2/5 md:order-1 mb-12 md:mb-0 opacity-0", 
             isVisible && "md:animate-slideInLeft animate-slideInUp"
          )}
          style={{ animationDelay: isVisible ? '0.3s' : undefined }}
        >
          <Card className="bg-card text-card-foreground shadow-lg rounded-xl overflow-hidden w-full">
            <CardHeader className="p-0">
              <div className="h-8 bg-card flex items-center justify-between px-4 border-b border-border">
                <div className="w-20 h-3 rounded-sm" style={{ backgroundColor: '#8B70FC' }}></div>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#8B70FC' }}></div>
              </div>
            </CardHeader>
            <CardContent className="p-6 text-left">
              <h2
                className={cn(
                  "text-2xl sm:text-3xl font-bold text-foreground mb-3 opacity-0",
                  isVisible && "animate-fadeIn"
                )}
                style={{ animationDelay: isVisible ? '0.5s' : undefined }}
              >
                ¡Contáctanos!
              </h2>
              <p
                className={cn(
                  "text-sm text-muted-foreground mb-6 opacity-0",
                  isVisible && "animate-fadeIn"
                )}
                style={{ animationDelay: isVisible ? '0.7s' : undefined }}
              >
                Al contactar al equipo de SlyFox Labs, le pedimos que mantenga un tono maduro y respetuoso. De lo contrario, su acceso podría ser bloqueado. ¡Gracias por su comprensión!
              </p>
              <Button
                variant="filled"
                size="lg"
                className={cn(
                  "w-full sm:w-auto rounded-full opacity-0", 
                  isVisible && "animate-fadeIn"
                )}
                style={{ animationDelay: isVisible ? '0.9s' : undefined }}
              >
                Contactar
              </Button>
            </CardContent>
          </Card>
        </div>

        
        <div
          className={cn(
            "w-full md:w-3/5 md:order-2 text-left opacity-0", 
            isVisible && "md:animate-slideInRight animate-slideInUp"
          )}
          style={{ animationDelay: isVisible ? '0.2s' : undefined }}
        >
          <div
            className={cn(
              "flex items-center justify-start space-x-1 mb-4 opacity-0", 
              isVisible && "animate-fadeIn"
            )}
            style={{ animationDelay: isVisible ? '0.4s' : undefined }}
          >
            <Image
              src="/images/SlyFox.png"
              alt="SlyFox Labs Logo"
              width={48}
              height={48}
              className="rounded-full"
              data-ai-hint="fox logo orange"
            />
            <h3 className="text-2xl font-bold text-foreground">SlyFox Labs</h3>
          </div>
          <p
            className={cn(
              "text-muted-foreground mb-8 opacity-0",
              isVisible && "animate-fadeIn"
            )}
            style={{ animationDelay: isVisible ? '0.6s' : undefined }}
          >
            Desarrollo de bots y servicios web innovadores para transformar la comunicación con tus clientes y optimizar procesos.
          </p>
          <div className="flex justify-start space-x-4 mb-10">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center p-3 bg-card text-primary rounded-full shadow-md hover:shadow-lg hover:bg-muted transition-all opacity-0",
                  isVisible && "animate-fadeIn"
                )}
                style={{ animationDelay: isVisible ? `${0.8 + index * 0.2}s` : undefined }}
                aria-label={link.label}
                data-ai-hint={link.hint}
              >
                <link.Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <p
            className={cn(
              "text-sm text-muted-foreground opacity-0",
              isVisible && "animate-fadeIn"
            )}
            style={{ animationDelay: isVisible ? '1.4s' : undefined }}
          >
            © 2025 SlyFox Labs
          </p>
        </div>

      </div>
    </section>
  );
}
