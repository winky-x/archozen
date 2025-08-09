"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { ArcheryTargetIcon } from "./icons";

const navLinks = [
  { href: "#programs", label: "Programs" },
  { href: "#coaches", label: "Coaches" },
  { href: "#gallery", label: "Gallery" },
  { href: "#tips", label: "Tips" },
  { href: "#contact", label: "Contact" },
];

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

  const NavLink = ({ href, label, onClick }: { href: string; label: string, onClick?: () => void }) => (
    <a
      href={href}
      onClick={onClick}
      className="font-body text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
    >
      {label}
    </a>
  );

  return (
    <header
      className={`fixed top-4 left-2 right-2 md:left-4 md:right-4 z-50 transition-all duration-300 ease-smooth rounded-xl ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <ArcheryTargetIcon className="h-8 w-8 text-primary" />
            <span className="font-headline text-xl font-bold">ArchoZen Academy</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8">
                     <a href="#" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                        <ArcheryTargetIcon className="h-8 w-8 text-primary" />
                        <span className="font-headline text-xl font-bold">ArchoZen</span>
                      </a>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <NavLink key={link.href} {...link} onClick={() => setMobileMenuOpen(false)} />
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
