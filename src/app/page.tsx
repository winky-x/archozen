
"use client";

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
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{
          background: `radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.1), transparent 50%)`
        }}
      ></div>
      <AppHeader />
      <main className="flex-1">
        <section id="hero" className="relative w-full text-foreground pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block rounded-full p-px mb-6 glass-border">
                <div className="bg-background rounded-full px-4 py-1.5">
                  <span className="font-medium text-sm">Now supercharged with ArchoZen</span>
                </div>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight">
                AI that builds with you
              </h1>
              <p className="mt-4 max-w-2xl mx-auto font-body text-lg md:text-xl text-muted-foreground">
                Experience the ancient art of archery, reimagined for the modern age with our AI-powered coaching.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="font-bold text-base transition-transform duration-300 hover:scale-105 w-full sm:w-auto rounded-full bg-white text-black shadow-[0_0_20px_0px_hsl(var(--primary)/0.5)] hover:bg-gray-200">
                  <a href="#programs">
                    Get started for free
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-bold text-base transition-transform duration-300 hover:scale-105 w-full sm:w-auto rounded-full">
                  <a href="#contact">
                    See plans & pricing
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative mt-24">
              <div className="absolute top-0 -inset-x-4 h-48 bg-gradient-to-t from-background to-transparent z-10"></div>
              <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden glass-border p-px">
                  <Image
                    src="https://placehold.co/1200x800.png"
                    alt="AI Copilot Interface"
                    width={1200}
                    height={800}
                    className="object-cover w-full h-full rounded-xl"
                    data-ai-hint="ai chat interface"
                  />
              </div>
            </div>
          </div>
        </section>

        <div className="bg-background">
            <LogoCarousel />
        </div>
        <div className="bg-secondary/50 dark:bg-card">
            <ProgramShowcase />
        </div>
        <div className="bg-background">
            <CoachSpotlight />
        </div>
        <div className="bg-secondary/50 dark:bg-card">
            <GalleryExperience />
        </div>
        <div className="bg-background">
            <ArcheryTips />
        </div>
        <div className="bg-secondary/50 dark:bg-card">
            <ContactSection />
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
