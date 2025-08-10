"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Parallax effect
      setOffsetX((position.x - (window.innerWidth / 2)) / 50);
      setOffsetY((position.y - (window.innerHeight / 2)) / 50);
    }
  }, [position, isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "hidden md:block fixed z-50 pointer-events-none transition-transform duration-300 ease-out right-4 bottom-4"
      )}
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px)`,
      }}
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_10_10)">
          <path d="M50 20C50 20 62.5 37.5 80 40C80 50 80 62.5 80 62.5C80 75 62.5 80 50 80C37.5 80 20 75 20 62.5C20 62.5 20 50 20 40C37.5 37.5 50 20 50 20Z" fill="url(#paint0_radial_10_10)"/>
        </g>
        <path d="M72.5 61.25V56.875C72.5 55.4375 70.3125 53.125 68.125 53.125H31.875C29.6875 53.125 27.5 55.4375 27.5 56.875V61.25C27.5 62.6875 29.6875 65 31.875 65H68.125C70.3125 65 72.5 62.6875 72.5 61.25Z" fill="#2E2E2E"/>
        <path d="M68.125 35H31.875C29.6875 35 27.5 37.3125 27.5 38.75V53.125H72.5V38.75C72.5 37.3125 70.3125 35 68.125 35Z" fill="#424242"/>
        <rect x="33.75" y="40" width="10" height="7.5" rx="1.25" fill="#00C5FF"/>
        <rect x="56.25" y="40" width="10" height="7.5" rx="1.25" fill="#00C5FF"/>
        <path d="M35.625 58.75H41.875V60.625H35.625V58.75Z" fill="#00C5FF"/>
        <defs>
          <filter id="filter0_f_10_10" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_10_10"/>
          </filter>
          <radialGradient id="paint0_radial_10_10" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 50) rotate(90) scale(30 29.375)">
            <stop stopColor="#00A4FF"/>
            <stop offset="1" stopColor="#00319E" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CursorFollower;
