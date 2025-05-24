
"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';


const AboutIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" />
  </svg>
);

const FreactureIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-world" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" />
  </svg>
);

const RecursosIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-archive" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" /><path d="M10 12l4 0" />
  </svg>
);

const ContactNavIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" />
  </svg>
);


const navItems = [
  { href: '#about', label: 'About', IconComponent: AboutIcon, iconHint: 'info circle' },
  { href: '#freacture', label: 'Freacture', IconComponent: FreactureIcon, iconHint: 'globe worldwide' },
  { href: '#recursos', label: 'Resource', IconComponent: RecursosIcon, iconHint: 'archive box' },
  { href: '#contact', label: 'Contact', IconComponent: ContactNavIcon, iconHint: 'mail envelope' },
];

export default function BottomNav() {
  const [activeSectionHref, setActiveSectionHref] = useState('');
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const calculateActiveSection = useCallback(() => {
    if (typeof window === 'undefined') {
      return navItems.length > 0 ? navItems[0].href : '';
    }

    const currentHash = window.location.hash;
    if (currentHash && navItems.some(item => item.href === currentHash)) {
      return currentHash;
    }

    const viewportCenterY = window.innerHeight / 2;
    let candidates: { href: string; distance: number; top: number }[] = [];

    navItems.forEach(item => {
      const element = document.getElementById(item.href.substring(1));
      if (element) {
        const rect = element.getBoundingClientRect();
        
        if (rect.height > 50 && rect.top < window.innerHeight && rect.bottom > 0) { 
          const elementCenterY = rect.top + rect.height / 2;
          const distanceToCenter = Math.abs(elementCenterY - viewportCenterY);
          candidates.push({ href: item.href, distance: distanceToCenter, top: rect.top });
        }
      }
    });

    if (candidates.length > 0) {
      candidates.sort((a, b) => {
        const distanceDiff = a.distance - b.distance;
        
        if (Math.abs(distanceDiff) < 50) { 
          return a.top - b.top; 
        }
        return distanceDiff;
      });
      return candidates[0].href;
    }
    
    
    if (window.scrollY < 50 && navItems.length > 0) {
        return navItems[0].href;
    }
    return activeSectionHref || (navItems.length > 0 ? navItems[0].href : '');

  }, [activeSectionHref]); 

  
  useEffect(() => {
    const handleInteraction = () => {
      const newActiveHref = calculateActiveSection();
      setActiveSectionHref(prevHref => {
        if (newActiveHref && newActiveHref !== prevHref) {
          return newActiveHref;
        }
        return prevHref;
      });
    };
    
     if (navItems.length > 0 && !activeSectionHref) {
       const initialHash = window.location.hash;
       if (initialHash && navItems.some(item => item.href === initialHash)) {
            setActiveSectionHref(initialHash);
       } else if (window.scrollY < 50) { 
            setActiveSectionHref(navItems[0].href);
       } else {
            handleInteraction(); 
       }
    }


    window.addEventListener('scroll', handleInteraction, { passive: true });
    window.addEventListener('hashchange', handleInteraction);

    
    handleInteraction();


    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('hashchange', handleInteraction);
    };
  }, [calculateActiveSection, activeSectionHref]);

  useEffect(() => {
    const activeItemIndex = navItems.findIndex(item => item.href === activeSectionHref);
    if (activeItemIndex !== -1 && itemRefs.current[activeItemIndex] && navRef.current) {
      const activeElement = itemRefs.current[activeItemIndex]!;
      const navLeft = navRef.current.getBoundingClientRect().left;
      const itemRect = activeElement.getBoundingClientRect();
      
      setIndicatorStyle({
        left: itemRect.left - navLeft,
        width: itemRect.width, 
        opacity: 1,
      });
    } else if (navItems.length > 0 && itemRefs.current[0] && navRef.current && !activeSectionHref && window.scrollY < 50) {
        
        const firstElement = itemRefs.current[0]!;
        const navLeft = navRef.current.getBoundingClientRect().left;
        const itemRect = firstElement.getBoundingClientRect();
        setIndicatorStyle({
            left: itemRect.left - navLeft,
            width: itemRect.width,
            opacity: 1,
        });
    } else if (navItems.length === 0) { 
        setIndicatorStyle({ left: 0, width: 0, opacity: 0 });
    }
  }, [activeSectionHref]);


  const handleLinkClick = (href: string) => {
    setActiveSectionHref(href);
    
    const targetItemIndex = navItems.findIndex(item => item.href === href);
    if (targetItemIndex !== -1 && itemRefs.current[targetItemIndex] && navRef.current) {
        const targetElement = itemRefs.current[targetItemIndex]!;
        const navLeft = navRef.current.getBoundingClientRect().left;
        const itemRect = targetElement.getBoundingClientRect();
        setIndicatorStyle({
            left: itemRect.left - navLeft,
            width: itemRect.width,
            opacity: 1,
        });
    }
  };
  
  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, navItems.length);
  }, [navItems.length]);

  return (
    <nav 
      ref={navRef}
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-stretch bg-card/80 backdrop-blur-md shadow-top border-t border-border h-14"
    >
      {navItems.map((item, index) => {
        const Icon = item.IconComponent;
        const isActive = item.href === activeSectionHref;
        return (
          <Link
            key={item.label}
            ref={el => itemRefs.current[index] = el}
            href={item.href}
            className={cn(
              `flex flex-col items-center justify-center text-xs relative group px-2 py-1 md:px-4`, 
              isActive ? 'text-primary' : 'text-foreground hover:text-primary'
            )}
            aria-current={isActive ? 'page' : undefined}
            onClick={() => handleLinkClick(item.href)}
          >
            <div className="w-6 h-6 mb-0.5 relative">
              <Icon data-ai-hint={item.iconHint} className="w-full h-full" />
            </div>
            <span className={`transition-colors duration-150 ${isActive ? 'font-semibold' : 'group-hover:text-primary'}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
      <span
        className="absolute top-0 h-[3px] bg-primary rounded-b-sm"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
          opacity: indicatorStyle.opacity,
          transition: 'left 0.3s ease-in-out, width 0.3s ease-in-out, opacity 0.3s ease-in-out',
        }}
      />
    </nav>
  );
}
