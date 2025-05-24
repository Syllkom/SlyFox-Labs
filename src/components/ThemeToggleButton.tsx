
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="default"
      size="icon"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      className="rounded-full h-10 w-10"
    >
      {theme === "light" ? (
        <Sun className="h-[1.5rem] w-[1.5rem]" data-ai-hint="sun light mode" />
      ) : (
        <Moon className="h-[1.5rem] w-[1.5rem]" data-ai-hint="moon dark mode" />
      )}
    </Button>
  );
}
