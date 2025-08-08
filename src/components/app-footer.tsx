import React from 'react';
import { ArcheryTargetIcon } from './icons';

export default function AppFooter() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-6 px-4 text-center text-sm text-muted-foreground">
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
                <ArcheryTargetIcon className="h-6 w-6 text-primary" />
                <span className="font-headline text-lg font-bold text-foreground">ArchoZen Academy</span>
            </div>
            <p>&copy; {new Date().getFullYear()} ArchoZen Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
