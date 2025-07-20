import Link from 'next/link';
import { Mountain } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">AtendaX</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} AtendaX. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
