
"use client";

import React, { useState, useEffect } from "react";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import ProgramShowcase from "@/components/program-showcase";
import CoachSpotlight from "@/components/coach-spotlight";
import GalleryExperience from "@/components/gallery-experience";
import ArcheryTips from "@/components/archery-tips";
import ContactSection from "@/components/contact-section";
import LogoCarousel from "@/components/logo-carousel";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import CursorFollower from "@/components/cursor-follower";

export default function Home({}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        
        {/* Dark Theme Background */}
        <div className="dark:block hidden">
            <div className="absolute inset-0 bg-black"></div>
        </div>
        
        {/* Light Theme Background */}
        <div className="hidden dark:hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f0f2f5] to-[#d8e0f0]"></div>
          <div className="absolute inset-0 background-grid"></div>
          {/* Decorative Blobs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
           <div className="absolute bottom-1/2 right-1/2 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>

        </div>

      </div>

      <AppHeader />
      <main className="flex-1">
        <section id="hero" className="relative w-full text-foreground pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="absolute top-0 left-0 w-full h-full z-[-1] dark:block hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div 
                    className="w-[80vw] h-[80vh] bg-gradient-to-tr from-purple-500/50 to-cyan-500/50"
                    style={{
                        maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, black 50%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, black 50%, transparent 100%)'
                    }}
                />
            </div>
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block rounded-full p-px mb-6 gradient-border-glow-thin">
                <div className="bg-background rounded-full px-4 py-1.5">
                  <span className="font-medium text-sm">Now supercharged with agent mode</span>
                </div>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight">
                AI that builds with you
              </h1>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="font-bold text-base transition-transform duration-300 hover:scale-105 w-full sm:w-auto rounded-lg bg-white text-black hover:bg-gray-200">
                  <a href="#programs">
                    Get started for free
                  </a>
                </Button>
                <div className="liquid-glass rounded-lg w-full sm:w-auto">
                    <Button asChild size="lg" variant="ghost" className="font-bold text-base transition-transform duration-300 hover:scale-105 w-full sm:w-auto rounded-lg bg-transparent hover:bg-white/10">
                    <a href="#contact">
                        See plans & pricing
                    </a>
                    </Button>
                </div>
              </div>
            </div>
            </div>
            <div className="relative mt-24">
              {isMounted && (
                <div className="w-[calc(100%-1rem)] ml-auto md:mx-auto md:w-full md:max-w-4xl gradient-border-glow rounded-l-xl md:rounded-xl overflow-hidden md:overflow-visible">
                  <Image
                      src="https://placehold.co/1200x800.png"
                      alt="AI Copilot Interface"
                      width={1200}
                      height={800}
                      className="object-cover w-full h-full rounded-l-xl md:rounded-xl"
                      data-ai-hint="ai chat interface"
                  />
                </div>
              )}
            </div>
        </section>

        <div>
            <LogoCarousel />
        </div>
        <div className="bg-transparent">
            <ProgramShowcase />
        </div>
        <div className="bg-transparent">
            <CoachSpotlight />
        </div>
        <div className="bg-transparent">
            <GalleryExperience />
        </div>
        <div className="bg-transparent">
            <ArcheryTips />
        </div>
        <div className="bg-transparent">
            <ContactSection />
        </div>
      </main>
      <AppFooter />
      <CursorFollower />
    </div>
  );
}
