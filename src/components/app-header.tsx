"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { ArcheryTargetIcon } from "./icons";
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

  useEffect(() => {
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
          
          <div className="flex-1 flex justify-center">
            <a href="#" className="flex items-center gap-2">
              <ArcheryTargetIcon className="h-8 w-8 text-primary" />
            </a>
          </div>

          <nav className="hidden md:flex items-center justify-end gap-6 w-1/3">
            {rightLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
            <ThemeToggle />
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-0">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                     <a href="#" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                        <ArcheryTargetIcon className="h-8 w-8 text-primary" />
                      </a>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuMOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
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
          </div>
        </div>
      </div>
    </header>
  );
}