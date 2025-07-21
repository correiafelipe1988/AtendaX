"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="https://i.postimg.cc/mrDW2h2b/Atenda-X-Logo-removebg-preview.png" alt="AtendaX Logo" className="h-14" />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/#features" className="text-foreground/70 transition-colors hover:text-foreground">
            Recursos
          </Link>
          <Link href="/#integrations" className="text-foreground/70 transition-colors hover:text-foreground">
            Integrações
          </Link>
          <Link href="/#testimonials" className="text-foreground/70 transition-colors hover:text-foreground">
            Depoimentos
          </Link>
          <Link href="/#contact" className="text-foreground/70 transition-colors hover:text-foreground">
            Contato
          </Link>
          <Link href="/#pricing" className="text-foreground/70 transition-colors hover:text-foreground">
            Preços
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="default" className="hidden md:flex" asChild>
            <Link href="/#contact">Peça uma Demo</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Alternar menu de navegação</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                <img src="https://i.postimg.cc/mrDW2h2b/Atenda-X-Logo-removebg-preview.png" alt="AtendaX Logo" className="h-14" />
                </Link>
                <Link href="/#features" className="text-muted-foreground hover:text-foreground">
                  Recursos
                </Link>
                <Link href="/#integrations" className="text-muted-foreground hover:text-foreground">
                  Integrações
                </Link>
                <Link href="/#testimonials" className="text-muted-foreground hover:text-foreground">
                  Depoimentos
                </Link>
                <Link href="/#contact" className="text-muted-foreground hover:text-foreground">
                  Contato
                </Link>
                <Link href="/#pricing" className="text-muted-foreground hover:text-foreground">
                  Preços
                </Link>
                <Button variant="default" asChild>
                  <Link href="/#contact">Peça uma Demo</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
