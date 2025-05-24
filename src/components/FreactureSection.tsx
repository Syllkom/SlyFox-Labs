
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import type React from 'react';
import { cn } from '@/lib/utils';


const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
  </svg>
);


const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
  </svg>
);
const NextjsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" /><path d="M15 12v-3" />
  </svg>
);
const NodejsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#339933" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" /><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
  </svg>
);
const TypescriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3178C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" /><path d="M9 12h4" /><path d="M11 12v6" /><path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" />
  </svg>
);
const JavascriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F7DF1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M3 15h3v4.5a1.5 1.5 0 0 1 -3 0" /><path d="M9 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" /><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1" />
  </svg>
);
const Css3Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1572B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
  </svg>
);
const Html5Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E34F26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
  </svg>
);


const features = [
  "Web pages",
  "WhatsApp bots",
  "Designer web page",
  "Otros..."
];

const techSkills = [
  { Icon: ReactIcon, name: "React", hint: "React framework logo" },
  { Icon: NextjsIcon, name: "Next.js", hint: "Next.js framework logo" },
  { Icon: NodejsIcon, name: "Node.js", hint: "Node.js runtime logo" },
  { Icon: TypescriptIcon, name: "TypeScript", hint: "TypeScript language logo" },
  { Icon: JavascriptIcon, name: "JavaScript", hint: "JavaScript language logo" },
  { Icon: Css3Icon, name: "CSS3", hint: "CSS3 language logo" },
  { Icon: Html5Icon, name: "HTML5", hint: "HTML5 markup language logo" },
];

export default function FreactureSection() {
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

  
  const baseDelay = 0.8; 
  const featureItemDelayIncrement = 0.15;
  const techSkillSectionDelay = baseDelay + features.length * featureItemDelayIncrement + 0.2;
  const techSkillItemDelayIncrement = 0.1;


  return (
    <section
      ref={sectionRef}
      id="freacture"
      className={cn(
        "flex flex-col items-center justify-center min-h-[calc(100vh-4rem-56px)] py-12 sm:py-16 md:py-20 bg-background w-full overflow-hidden",
        isVisible ? "animate-slideInUp" : "opacity-0"
      )}
    >
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col md:flex-row md:items-center md:gap-8">
        <div 
          className={cn(
            "mb-8 md:mb-0 md:w-2/5 md:order-1 flex justify-center md:justify-start opacity-0",
            isVisible && "md:animate-slideInLeft animate-slideInUp"
          )}
          style={{ animationDelay: isVisible ? '0.2s' : undefined }}
        >
          <Image
            src="/images/happy.png"
            alt="—Syll's is happy :)"
            width={400}
            height={350}
            className="object-contain"
            data-ai-hint="person laptop ui elements"
          />
        </div>
        <div className="md:w-3/5 md:order-2 text-left">
          <h2 
            className={cn(
              "text-2xl sm:text-3xl font-bold text-foreground leading-tight opacity-0",
              isVisible && "animate-slideInUp"
            )}
            style={{ animationDelay: isVisible ? '0.4s' : undefined }}
          >
            Tenemos una gran variedad de servicios que pueden gustarte
          </h2>
          <p 
            className={cn(
              "mt-4 text-lg text-muted-foreground opacity-0",
              isVisible && "animate-slideInUp"
            )}
            style={{ animationDelay: isVisible ? '0.6s' : undefined }}
          >
            Conoce nuestros servicios
          </p>
          <ul className="mt-8 space-y-3">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className={cn(
                  "flex items-center opacity-0",
                  isVisible && "animate-slideInUp"
                )}
                style={{ animationDelay: isVisible ? `${baseDelay + index * featureItemDelayIncrement}s` : undefined }}
              >
                <CheckCircleIcon className="h-6 w-6 text-[#30AB74] mr-3 flex-shrink-0" />
                <span className="text-base text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      
      <div className={cn(
        "mt-16 md:mt-20 w-full max-w-4xl mx-auto px-6 sm:px-8 md:px-12 opacity-0",
        isVisible && "animate-slideInUp" 
      )}
      style={{ animationDelay: isVisible ? `${techSkillSectionDelay}s` : undefined }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-center text-foreground mb-6 md:mb-8">
          Tecnologías que utilizamos
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-8 md:gap-x-10 md:gap-y-10 px-4">
          {techSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={cn(
                "flex flex-col items-center text-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 opacity-0 w-20", 
                isVisible && "animate-fadeIn"
              )}
              style={{ animationDelay: isVisible ? `${techSkillSectionDelay + 0.2 + index * techSkillItemDelayIncrement}s` : undefined }}
            >
              <skill.Icon className="h-10 w-10 md:h-12 md:w-12" data-ai-hint={skill.hint} />
              <span className="text-xs md:text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

    