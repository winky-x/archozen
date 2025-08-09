
"use client";

import { useEffect, useState } from 'react';
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import ProgramShowcase from "@/components/program-showcase";
import CoachSpotlight from "@/components/coach-spotlight";
import GalleryExperience from "@/components/gallery-experience";
import ArcheryTips from "@/components/archery-tips";
import ContactSection from "@/components/contact-section";
import LogoCarousel from "@/components/logo-carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from 'next/image';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary)/0.15), transparent 80%)`
        }}
      ></div>
      <AppHeader />
      <main className="flex-1">
        <section id="hero" className="relative w-full flex items-center justify-center text-foreground pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative z-10 text-center md:text-left">
                <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight">
                  Master the Bow
                </h1>
                <p className="mt-4 max-w-2xl mx-auto md:mx-0 font-body text-lg md:text-xl text-muted-foreground">
                  Experience the ancient art of archery, reimagined for the modern age.
                </p>
                <div className="mt-8 flex justify-center md:justify-start">
                  <Button asChild size="lg" className="font-bold text-base transition-transform duration-300 hover:scale-105">
                    <a href="#programs">
                      Explore Programs
                      <ArrowRight />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="https://placehold.co/600x600.png"
                      alt="Abstract 3D shape"
                      width={600}
                      height={600}
                      className="object-cover w-full h-full"
                      data-ai-hint="abstract glass shape"
                    />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-background">
            <LogoCarousel />
        </div>
        <div className="bg-background">
            <ProgramShowcase />
        </div>
        <div className="bg-background">
            <CoachSpotlight />
        </div>
        <div className="bg-background">
            <GalleryExperience />
        </div>
        <div className="bg-background">
            <ArcheryTips />
        </div>
        <div className="bg-background">
            <ContactSection />
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
