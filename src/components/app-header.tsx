
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

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
      className={`fixed z-50 transition-all duration-300 ease-smooth ${
        isScrolled 
          ? "top-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-b rounded-b-xl" 
          : "top-4 left-2 right-2 md:left-4 md:right-4 bg-transparent border-transparent rounded-xl"
      }`}
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
             <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-xs bg-background p-0">
                <SheetHeader className="p-4 border-b">
                   <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                   <div className="flex justify-between items-center">
                     <a href="#" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                        {mounted ? (
                            <Image src={logoSrc} alt="ArchoZen Academy Logo" width={40} height={40} className="h-8 w-auto" />
                        ) : (
                            <div className="h-8 w-8" />
                        )}
                      </a>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <nav className="flex flex-col p-4">
                    {navLinks.map((link) => (
                      <NavLink 
                        key={link.href} 
                        {...link} 
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg py-3 px-2 rounded-md"
                      />
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
            
            <div className="flex flex-1 justify-center">
                <a href="#" className="flex items-center gap-2">
                    {mounted ? (
                        <Image src={logoSrc} alt="ArchoZen Academy Logo" width={40} height={40} className="h-8 w-auto" />
                    ) : (
                        <div className="h-8 w-8" />
                    )}
                </a>
            </div>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
