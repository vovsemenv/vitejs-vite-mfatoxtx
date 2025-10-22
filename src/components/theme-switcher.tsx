import * as React from "react";
import { Moon, Sun, Sparkles, Eclipse } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="size-9">
          <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sparkles className="mr-2 size-4" />
          <span>Light Nebula</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light-eclipse")}>
          <Eclipse className="mr-2 size-4" />
          <span>Light Eclipse</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Sparkles className="mr-2 size-4" />
          <span>Dark Nebula</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark-eclipse")}>
          <Eclipse className="mr-2 size-4" />
          <span>Dark Eclipse</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
