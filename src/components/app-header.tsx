
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

const leftLinks = navLinks.slice(0, 3);
const rightLinks = navLinks.slice(3);

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
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-smooth border-b",
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg border-border" 
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 w-1/3">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full bg-background p-0 flex flex-col">
                 <SheetHeader className="p-4 border-b flex flex-row items-center gap-4">
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    <a href="#" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                        {mounted ? (
                            <Image src={logoSrc} alt="ArchoZen Academy Logo" width={32} height={32} className="h-8 w-auto" />
                        ) : (
                            <div className="h-8 w-8" />
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
                      <Button className="w-full" variant="outline">Dashboard</Button>
                    </div>
                  </div>
              </SheetContent>
            </Sheet>
            <nav className="hidden md:flex items-center justify-end gap-6 w-full">
              {leftLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </nav>
          </div>
          
          <div className="flex flex-1 justify-center w-1/3">
             <a href="#" className="flex items-center gap-2">
              {mounted ? (
                  <Image src={logoSrc} alt="ArchoZen Academy Logo" width={40} height={40} className="h-8 w-auto" />
              ) : (
                <div className="h-8 w-8" /> 
              )}
            </a>
          </div>

          <div className="flex items-center justify-start gap-6 w-1/3">
            <nav className="hidden md:flex items-center gap-6 w-full">
              {rightLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </nav>
            <div className="flex items-center justify-end flex-1">
                <Button variant="outline" className="hidden md:inline-flex mr-2">Dashboard</Button>
                <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
