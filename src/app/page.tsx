
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

  const transformStyle = {
    transform: `translate(-50%, -50%) translateX(${mousePosition.x / -20}px) translateY(${mousePosition.y / -20}px) rotateX(${mousePosition.y / -40}deg) rotateY(${mousePosition.x / -40}deg)`,
    transition: 'transform 0.1s ease-out',
  };

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary)/0.15), transparent 80%)`
        }}
      ></div>
      <AppHeader />
      <main className="flex-1">
        <section id="hero" className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-center text-foreground overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.1),rgba(255,255,255,0))] z-10"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-30 dark:opacity-50" style={transformStyle}>
            <Image
              src="https://placehold.co/400x400.png"
              alt="Abstract 3D shape"
              width={400}
              height={400}
              className="object-contain"
              data-ai-hint="abstract glass shape"
            />
          </div>

          <div className="relative z-20 p-4">
            <h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-tight">
              Master the Bow
            </h1>
            <p className="mt-4 max-w-2xl mx-auto font-body text-lg md:text-xl text-muted-foreground">
              Experience the ancient art of archery, reimagined for the modern age.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="font-bold text-base transition-transform duration-300 hover:scale-105">
                <a href="#programs">
                  Explore Programs
                  <ArrowRight />
                </a>
              </Button>
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
