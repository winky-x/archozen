
"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card } from './ui/card';

const galleryImages = [
  { src: '/gallery/gallery-1.png', alt: 'Archer at full draw', dataAiHint: 'archer full draw', width: 600, height: 400 },
  { src: '/gallery/gallery-2.png', alt: 'Close-up of an arrow nock', dataAiHint: 'arrow nock', width: 600, height: 800 },
  { src: '/gallery/gallery-3.png', alt: 'Archery target with arrows', dataAiHint: 'archery target', width: 600, height: 400 },
  { src: '/gallery/gallery-4.png', alt: 'Student receiving instruction', dataAiHint: 'archery lesson', width: 600, height: 400 },
  { src: '/gallery/gallery-5.png', alt: 'A row of bows on a rack', dataAiHint: 'archery bows', width: 600, height: 800 },
  { src: '/gallery/gallery-6.png', alt: 'Scenic outdoor archery range', dataAiHint: 'outdoor range', width: 600, height: 400 },
  { src: '/gallery/gallery-7.png', alt: 'Another scenic archery shot', dataAiHint: 'archery range', width: 600, height: 400 }, // Added 7th image
];

export default function GalleryExperience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Gallery</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into the life and art of archery at ArchoZen Academy.
          </p>
        </div>
        {/* Adjusted grid to be more fluid and responsive to image sizes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
          {/* Use auto-rows-min to make rows fit content size */}
          
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
                width={image.width}
                height={image.height}
                data-ai-hint={image.dataAiHint}
                className="w-full h-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        {/* Adjusted DialogContent to fit within screen and show close button */}
        <DialogContent className="w-auto max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-0 flex items-center justify-center overflow-auto">
          {selectedImage && galleryImages.find(img => img.src === selectedImage) && (
            // Find the selected image object to get its dimensions
            
             <Card className="flex justify-center items-center">
                <Image
                    src={selectedImage}
                    alt={galleryImages.find(img => img.src === selectedImage)?.alt || "Selected gallery image"}
                    // Adjusted width and height for better preview scaling within bounds
                    width={galleryImages.find(img => img.src === selectedImage)?.width} // Use original image width
                    height={galleryImages.find(img => img.src === selectedImage)?.height} // Use original image height
                    className="w-full h-auto object-contain rounded-lg"
                />
            </Card>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
