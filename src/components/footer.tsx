import Link from 'next/link';
import { Mountain } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="https://i.postimg.cc/mrDW2h2b/Atenda-X-Logo-removebg-preview.png" alt="AtendaX Logo" className="h-8" />
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} AtendaX. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/politica-de-privacidade" className="text-sm text-muted-foreground hover:text-foreground">
            Política de Privacidade
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Termos de Serviço
          </Link>
        </div>
      </div>
    </footer>
  );
}
