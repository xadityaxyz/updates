
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";

export const NavBar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-semibold text-xl">Aditya Wadekar</div>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-primary/80 transition-colors hidden md:block">
            About
          </a>
          <a href="#projects" className="hover:text-primary/80 transition-colors hidden md:block">
            Projects
          </a>
          <a href="#experience" className="hover:text-primary/80 transition-colors hidden md:block">
            Experience
          </a>
          <a href="#education" className="hover:text-primary/80 transition-colors hidden md:block">
            Education
          </a>
          <a href="#skills" className="hover:text-primary/80 transition-colors hidden md:block">
            Skills
          </a>
          <a href="#contact" className="hover:text-primary/80 transition-colors hidden md:block">
            Contact
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};
