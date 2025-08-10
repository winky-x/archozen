
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
        <div className="absolute inset-0 bg-blue-950"></div>
        <div className="absolute top-[-50%] left-[-50%] h-[200%] w-[200%] animate-[spin_20s_linear_infinite]">
            <div className="absolute inset-0" style={{
                background: `radial-gradient(circle at center, rgba(123, 31, 162, 0.4) 0%, transparent 40%),
                             radial-gradient(circle at center, rgba(8, 145, 178, 0.4) 0%, transparent 50%)`
            }}></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full" style={{
            background: `radial-gradient(ellipse 80% 50% at 50% -20%, rgba(123, 31, 162, 0.3), transparent),
                         radial-gradient(ellipse 80% 50% at 50% 120%, rgba(8, 145, 178, 0.3), transparent)`
        }}></div>
      </div>

      <AppHeader />
      <main className="flex-1">
        <section id="hero" className="relative w-full text-foreground pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block rounded-full p-px mb-6 gradient-border-glow-thin">
                <div className="bg-background rounded-full px-4 py-1.5">
                  <span className="font-medium text-sm">Now supercharged with ArchoZen</span>
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
                <Button asChild size="lg" variant="secondary" className="font-bold text-base transition-transform duration-300 hover:scale-105 w-full sm:w-auto rounded-lg">
                  <a href="#contact">
                    See plans & pricing
                  </a>
                </Button>
              </div>
            </div>
            </div>
            <div className="relative mt-24">
              {isMounted && (
                <div className="w-full md:max-w-4xl ml-auto">
                    <div className="gradient-border-glow rounded-l-xl overflow-hidden">
                        <Image
                            src="https://placehold.co/1200x800.png"
                            alt="AI Copilot Interface"
                            width={1200}
                            height={800}
                            className="object-cover w-full h-full rounded-l-xl"
                            data-ai-hint="ai chat interface"
                        />
                    </div>
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
