
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

const navLinks = [
  { href: "#programs", label: "Programs" },
  { href: "#coaches", label: "Coaches" },
  { href: "#gallery", label: "Gallery" },
  { href: "#tips", label: "Tips" },
  { href: "#contact", label: "Contact" },
];

const leftLinks = navLinks.slice(0, 2);
const rightLinks = navLinks.slice(2);

export default function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, label, onClick, className }: { href: string; label: string, onClick?: () => void, className?: string }) => (
    <a
      href={href}
      onClick={onClick}
      className={cn("font-body text-sm font-medium text-foreground/80 transition-colors hover:text-primary", className)}
    >
      {label}
    </a>
  );
  
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const logoSrc = mounted && currentTheme === 'dark' ? '/logos/logo-dark.svg' : '/logos/logo-light.svg';


  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-300 ease-smooth",
        isScrolled 
          ? "top-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-b rounded-b-xl" 
          : "top-4 left-2 right-2 md:left-4 md:right-4 bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <nav className="hidden md:flex items-center gap-6 w-1/3">
             {leftLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
          
          <div className="hidden md:flex flex-1 justify-center">
             <a href="#" className="flex items-center gap-2">
              {mounted ? (
                  <Image src={logoSrc} alt="ArchoZen Academy Logo" width={40} height={40} className="h-8 w-auto" />
              ) : (
                <div className="h-8 w-8" /> 
              )}
            </a>
          </div>

          <nav className="hidden md:flex items-center justify-end gap-6 w-1/3">
            {rightLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between w-full">
            <div className="w-1/3">
              <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-3/4 bg-background p-0 flex flex-col">
                  <SheetHeader className="p-4 border-b flex flex-row items-center gap-4">
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    <a href="#" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                        {mounted ? (
                            <Image src={logoSrc} alt="ArchoZen Academy Logo" width={32} height={32} className="h-6 w-auto" />
                        ) : (
                            <div className="h-6 w-6" />
                        )}
                      </a>
                  </SheetHeader>
                  <div className="flex-1 flex flex-col justify-between">
                    <nav className="flex-1 p-4">
                      <ul className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center justify-between py-3 px-2 rounded-md text-base font-medium text-foreground hover:bg-accent"
                            >
                              <span>{link.label}</span>
                              <ChevronRight className="h-5 w-5 text-muted-foreground" />
                            </a>
                            <Separator />
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <div className="p-4 border-t">
                      <ThemeToggle />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            
            <div className="w-1/3 flex justify-center">
                <a href="#" className="flex items-center gap-2">
                    {mounted ? (
                        <Image src={logoSrc} alt="ArchoZen Academy Logo" width={40} height={40} className="h-8 w-auto" />
                    ) : (
                        <div className="h-8 w-8" />
                    )}
                </a>
            </div>

            <div className="w-1/3 flex justify-end">
                 <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
