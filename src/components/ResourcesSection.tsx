
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Download } from 'lucide-react';
import CodeViewerModal from './CodeViewerModal';
import { cn } from '@/lib/utils';

const resources = [
  {
    id: 1,
    imageUrl: "https://files.catbox.moe/sbacda.png",
    imageHint: "anime eye character",
    title: "Animes Sub español, Español latino y Hentai",
    description: "Accede a nuestra completa base de datos en formato JSON con información de animes subtitulados y doblados al español comp también hentai.",
    tag: "JSON",
    filePath: "/resource/anime-db.json",
    downloadLink: "/resource/anime-db.json"
  },
  {
    id: 2,
    imageUrl: "https://files.catbox.moe/faiict.png",
    imageHint: "Waifus icon",
    title: "Anime Waifu db - rol waifu",
    description: "Una base de Waifus para implementar a tu bot de whatsapp (gacha)",
    tag: "JSON",
    filePath: "/resource/waifus-db.json",
    downloadLink: "/resource/waifus-db.json"
  },
  {
    id: 3,
    imageUrl: "https://files.catbox.moe/swlfsc.png",
    imageHint: "Couple icon",
    title: "Fotos de perfil anime para compartir",
    description: "Una pequeña base de fotos para compartir con tu novi@, contando con mas de 100+ imágenes, implementalo enn tu bot de WhatsApp.",
    tag: "JSON",
    filePath: "/resource/couple-db.json",
    downloadLink: "/resource/couple-db.json"
  },
  {
    id: 4,
    imageUrl: "https://files.catbox.moe/vd34dt.png",
    imageHint: "Edits icon",
    title: "Edits anime, phonk y estilo retro",
    description: "Base de edits cortos de anime con buena calidad, contando con 3 categorías: anime, phonk y retro.",
    tag: "JSON",
    filePath: "/resource/edits-db.json",
    downloadLink: "/resource/edits-db.json"
  },
  {
    id: 5,
    imageUrl: "https://files.catbox.moe/3l3qiu.png",
    imageHint: "Bandera icon",
    title: "Una mini base para juegos - banderas",
    description: `Una base completa, contando con todas las banderas, para su uso simplemente crea un xolan comando en tu bot y programa un mini juego "adivina la bandera"`,
    tag: "JSON",
    filePath: "/resource/bandera.json",
    downloadLink: "/resource/bandera.json"
  }
];

export default function ResourcesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFilePath, setCurrentFilePath] = useState<string | null>(null);
  const [currentTitle, setCurrentTitle] = useState("");

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

  const handleViewCode = (filePath: string, title: string) => {
    setCurrentFilePath(filePath);
    setCurrentTitle(title);
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="recursos"
        className={cn(
          "flex flex-col items-center justify-start min-h-[calc(100vh-4rem-56px)] py-12 sm:py-16 md:py-20 bg-background w-full overflow-hidden",
          isVisible ? "animate-slideInUp" : "opacity-0"
        )}
      >
        <div className="w-full max-w-4xl xl:max-w-5xl mx-auto px-6 sm:px-8 md:px-12 text-center">
          <h2
            className={cn(
              "text-2xl sm:text-3xl font-bold text-foreground mb-10 sm:mb-12 md:mb-16 opacity-0",
              isVisible && "animate-slideInUp"
            )}
            style={{ animationDelay: isVisible ? '0.2s' : undefined }}
          >
            Tenemos algunos recursos hechos por nosotros para ustedes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
            {resources.map((resource, index) => (
              <Card
                key={resource.id}
                className={cn(
                  "bg-card text-card-foreground shadow-lg rounded-xl overflow-hidden w-full mx-auto opacity-0", 
                  isVisible && "animate-slideInUp"
                )}
                style={{ animationDelay: isVisible ? `${0.4 + index * 0.2}s` : undefined }}
              >
                <CardHeader className="p-0">
                  <div className="h-8 bg-card flex items-center px-4 border-b border-border">
                    <div className="w-3 h-3 rounded-full bg-secondary mr-2"></div>
                    <div className="w-20 h-3 rounded-sm bg-secondary"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-left">
                  <div
                    className={cn(
                      "flex items-start space-x-4 mb-4 opacity-0",
                      isVisible && "animate-fadeIn"
                    )}
                    style={{ animationDelay: isVisible ? `${0.6 + index * 0.2}s` : undefined }}
                  >
                    <Image
                      src={resource.imageUrl}
                      alt={resource.title}
                      width={64} 
                      height={64}
                      className="rounded-md object-cover flex-shrink-0 mt-1"
                      data-ai-hint={resource.imageHint}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                      <Badge style={{ backgroundColor: '#E2DCF7' }} className="text-primary font-medium px-2 py-0.5 text-xs">
                        {resource.tag}
                      </Badge>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "flex items-center space-x-3 mt-6 opacity-0",
                      isVisible && "animate-fadeIn"
                    )}
                    style={{ animationDelay: isVisible ? `${0.8 + index * 0.2}s` : undefined }}
                  >
                    <Button
                      variant="secondary"
                      className="flex-1 rounded-full" 
                      onClick={() => handleViewCode(resource.filePath, resource.title)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View code
                    </Button>
                    <Button
                      variant="secondary"
                      className="flex-1 rounded-full" 
                      asChild
                    >
                      <a href={resource.downloadLink} download={resource.filePath.split('/').pop()}>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CodeViewerModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setCurrentFilePath(null); 
        }}
        filePath={currentFilePath}
        title={`Code for: ${currentTitle}`}
      />
    </>
  );
}
