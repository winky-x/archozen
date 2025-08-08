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
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-1">
        <section id="hero" className="relative h-[80vh] min-h-[500px] max-h-[700px] w-full flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Archer aiming"
              data-ai-hint="archer aiming"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 p-4 animate-fade-in-up duration-1000">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">
              Find Your Focus
            </h1>
            <p className="mt-4 max-w-2xl mx-auto font-body text-lg md:text-xl text-white/90">
              Welcome to ArchoZen Academy, where ancient discipline meets modern mastery. Elevate your archery skills with us.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="font-bold text-base transition-transform duration-300 hover:scale-105">
                <a href="#programs">
                  Explore Programs
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-bold text-base bg-transparent text-white border-accent hover:bg-accent hover:text-accent-foreground transition-transform duration-300 hover:scale-105">
                <a href="#contact">Join Now</a>
              </Button>
            </div>
          </div>
        </section>

        <ProgramShowcase />
        <CoachSpotlight />
        <GalleryExperience />
        <ArcheryTips />
        <ContactSection />
        <LogoCarousel />

      </main>
      <AppFooter />
    </div>
  );
}
