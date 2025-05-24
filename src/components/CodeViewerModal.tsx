
"use client";

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton"; 

interface CodeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  filePath: string | null; 
  title?: string;
}

export default function CodeViewerModal({
  isOpen,
  onClose,
  filePath,
  title = "View Code",
}: CodeViewerModalProps) {
  const [fetchedCode, setFetchedCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && filePath) {
      setIsLoading(true);
      setError(null);
      setFetchedCode(null); 

      fetch(filePath)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error al cargar el código: ${response.status} ${response.statusText}`);
          }
          return response.text();
        })
        .then(text => {
          setFetchedCode(text);
          setIsLoading(false);
        })
        .catch(err => {
          console.error("Error fetching code:", err);
          setError(err.message || "No se pudo cargar el código desde la ruta especificada.");
          setIsLoading(false);
        });
    } else if (!isOpen) {
      
      setFetchedCode(null);
      setIsLoading(false);
      setError(null);
    }
  }, [isOpen, filePath]);

  let contentDisplay;
  if (isLoading) {
    contentDisplay = (
      <div className="space-y-3 p-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/5" />
      </div>
    );
  } else if (error) {
    contentDisplay = <p className="text-destructive text-center py-4">{error}</p>;
  } else if (fetchedCode) {
    contentDisplay = (
      <pre className="text-sm text-card-foreground whitespace-pre-wrap break-all">
        <code>{fetchedCode}</code>
      </pre>
    );
  } else {
    contentDisplay = <p className="text-muted-foreground text-center py-4">No hay código para mostrar o la ruta del archivo no fue proporcionada.</p>;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-foreground">{title}</DialogTitle>
          <DialogDescription>
            {filePath ? `Contenido de: ${filePath}` : "A continuación se muestra el contenido del recurso."}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] min-h-[200px] rounded-md border border-border p-4 my-4">
          {contentDisplay}
        </ScrollArea>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="text-foreground border-foreground hover:bg-muted hover:text-foreground">
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
