"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card } from './ui/card';

const galleryImages = [
  { src: 'https://placehold.co/600x400.png', alt: 'Archer at full draw', dataAiHint: 'archer full draw' },
  { src: 'https://placehold.co/600x800.png', alt: 'Close-up of an arrow nock', dataAiHint: 'arrow nock' },
  { src: 'https://placehold.co/600x400.png', alt: 'Archery target with arrows', dataAiHint: 'archery target' },
  { src: 'https://placehold.co/600x400.png', alt: 'Student receiving instruction', dataAiHint: 'archery lesson' },
  { src: 'https://placehold.co/600x800.png', alt: 'A row of bows on a rack', dataAiHint: 'archery bows' },
  { src: 'https://placehold.co/600x400.png', alt: 'Scenic outdoor archery range', dataAiHint: 'outdoor range' },
];

export default function GalleryExperience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Gallery</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into the life and art of archery at ArchoZen Academy.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 1 || index === 4 ? 'row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.dataAiHint}
                width={600}
                height={index === 1 || index === 4 ? 800 : 400}
                className="w-full h-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          {selectedImage && (
             <Card>
                <Image
                    src={selectedImage}
                    alt="Selected gallery image"
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-contain rounded-lg"
                />
            </Card>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
