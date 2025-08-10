
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function TiltImage() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (imageRef.current) {
        const { clientX, clientY } = event;
        const { left, top, width, height } = imageRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        // Invert the tilt effect for a more natural feel
        const moveX = (clientX - centerX) / (width / 2);
        const moveY = (clientY - centerY) / (height / 2);
        setTilt({ x: -moveY * 10, y: moveX * 10 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative mt-24" style={{ perspective: '1000px' }}>
      <div 
        ref={imageRef} 
        className="w-[calc(100%-1rem)] ml-auto md:mx-auto md:w-full md:max-w-4xl" 
        style={{ 
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, 
            transformStyle: 'preserve-3d', 
            transition: 'transform 0.1s ease-out' 
        }}
      >
        <div className="gradient-border-glow rounded-l-xl md:rounded-xl">
          <Image
            src="/hero-image.png"
            alt="AI Copilot Interface"
            width={1200}
            height={800}
            className="object-cover w-full h-full rounded-l-xl md:rounded-xl"
            data-ai-hint="ai chat interface"
          />
        </div>
      </div>
    </div>
  );
}
