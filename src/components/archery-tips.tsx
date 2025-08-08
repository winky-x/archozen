"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lightbulb } from 'lucide-react';

const tipsByCategory = {
  form: [
    "Maintain a consistent anchor point for every shot.",
    "Keep your bow arm straight but not locked.",
    "Engage your back muscles to pull the string, not just your arm.",
    "Follow through with your release by letting your hand move naturally backward.",
  ],
  aiming: [
    "Focus on the smallest possible point on the target.",
    "Keep both eyes open to improve depth perception.",
    "Trust your instincts; don't over-aim.",
    "Understand how distance and wind affect your arrow's flight.",
  ],
  mindset: [
    "Breathe deeply and calmly before each shot.",
    "Visualize the arrow hitting the center of the target.",
    "Treat every arrow as its own event; don't dwell on past shots.",
    "Focus on the process, not the outcome.",
  ],
};

type Category = keyof typeof tipsByCategory;

export default function ArcheryTips() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('form');

  const currentTip = useMemo(() => {
    const tips = tipsByCategory[selectedCategory];
    return tips[Math.floor(Math.random() * tips.length)];
  }, [selectedCategory]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value as Category);
  };

  return (
    <section id="tips" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">AI-Free Archery Tips</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Simple, timeless advice from our expert coaches to improve your skills.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
                <p className="font-semibold font-body">Select a category for a new tip:</p>
                <Select onValueChange={handleCategoryChange} defaultValue={selectedCategory}>
                    <SelectTrigger className="w-full sm:w-[200px] glassmorphic">
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="form">Form & Stance</SelectItem>
                        <SelectItem value="aiming">Aiming</SelectItem>
                        <SelectItem value="mindset">Mindset</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Card className="glassmorphic">
              <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
                <div className="p-3 rounded-full bg-accent/50 border border-accent">
                    <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl capitalize">{selectedCategory} Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/90 h-16 flex items-center">{currentTip}</p>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
