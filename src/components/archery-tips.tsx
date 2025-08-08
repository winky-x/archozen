"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Target, Heart, BrainCircuit } from 'lucide-react';

type Category = 'form' | 'aiming' | 'mindset';

const tips: Record<Category, string[]> = {
  form: [
    "Keep your bow arm straight but not locked. A slight bend absorbs shock.",
    "Your stance should be square to the target, feet shoulder-width apart.",
    "Maintain a consistent anchor point for every shot.",
  ],
  aiming: [
    "Focus on the target, not the arrow. Let your peripheral vision guide the bow.",
    "Breathe slowly and steadily. Release the arrow between breaths.",
    "Trust your instincts. Over-aiming often leads to misses.",
  ],
  mindset: [
    "Every arrow is a new beginning. Don't dwell on the last shot.",
    "Embrace the process, not just the outcome. Find joy in the act of shooting.",
    "Patience is key. Improvement in archery is a marathon, not a sprint.",
  ]
};

const categoryIcons: Record<Category, React.ReactNode> = {
    form: <Target className="h-6 w-6 text-primary" />,
    aiming: <Heart className="h-6 w-6 text-primary" />,
    mindset: <BrainCircuit className="h-6 w-6 text-primary" />,
}

export default function ArcheryTips() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('form');
  const [currentTip, setCurrentTip] = useState(tips.form[0]);

  const handleCategoryChange = (value: string) => {
    const category = value as Category;
    setSelectedCategory(category);
    setCurrentTip(tips[category][0]);
  };

  const getNewTip = () => {
    const categoryTips = tips[selectedCategory];
    const newTip = categoryTips[Math.floor(Math.random() * categoryTips.length)];
    setCurrentTip(newTip);
  };

  return (
    <section id="tips" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Sharpen Your Skills</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore curated wisdom from our master coaches to refine your archery practice.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
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
                <Button onClick={getNewTip} className="w-full sm:w-auto transition-transform duration-300 hover:scale-105">
                    Get a New Tip
                </Button>
            </div>
            <Card className="glassmorphic min-h-[160px]">
              <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
                <div className="p-3 rounded-full bg-accent/50 border border-accent">
                    {categoryIcons[selectedCategory]}
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
