import React from 'react';
import { ArcheryTargetIcon } from './icons';

export default function AppFooter() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
                <ArcheryTargetIcon className="h-6 w-6 text-primary" />
                <span className="font-headline text-lg font-bold text-foreground">ArchoZen Academy</span>
            </div>
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} ArchoZen Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
