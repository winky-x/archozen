"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Wand2, BrainCircuit, Loader } from 'lucide-react';
import { getArcheryTip } from '@/ai/flows/get-archery-tip-flow';

type Category = 'form' | 'aiming' | 'mindset';

export default function ArcheryTips() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('form');
  const [currentTip, setCurrentTip] = useState('Select a category and ask the AI Coach for a tip!');
  const [isLoading, setIsLoading] = useState(false);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value as Category);
  };

  const fetchTip = async () => {
    setIsLoading(true);
    setCurrentTip('The AI Coach is thinking...');
    try {
      const tip = await getArcheryTip({ category: selectedCategory });
      setCurrentTip(tip);
    } catch (error) {
      console.error(error);
      setCurrentTip('Sorry, the AI Coach is resting. Please try again later.');
    }
    setIsLoading(false);
  };

  return (
    <section id="tips" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Your Personal AI Archery Coach</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get instant, personalized advice from our advanced AI to refine your skills.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
                 <Select onValueChange={handleCategoryChange} defaultValue={selectedCategory} disabled={isLoading}>
                    <SelectTrigger className="w-full sm:w-[200px] glassmorphic">
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="form">Form & Stance</SelectItem>
                        <SelectItem value="aiming">Aiming</SelectItem>
                        <SelectItem value="mindset">Mindset</SelectItem>
                    </SelectContent>
                </Select>
                <Button onClick={fetchTip} disabled={isLoading} className="w-full sm:w-auto transition-transform duration-300 hover:scale-105">
                    {isLoading ? <Loader className="animate-spin" /> : <Wand2 />}
                    Get AI Tip
                </Button>
            </div>
            <Card className="glassmorphic min-h-[160px]">
              <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
                <div className="p-3 rounded-full bg-accent/50 border border-accent">
                    <BrainCircuit className="h-6 w-6 text-primary" />
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
