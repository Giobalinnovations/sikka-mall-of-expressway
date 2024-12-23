'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function ScrollToTop() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed bottom-4 right-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ChevronDown className="h-6 w-6 rotate-180" />
    </Button>
  );
}
