import { ThemeToggle } from "./theme-toggle";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-2 pt-4 border-b">
      <h1 className="text-l font-bold font-instrument-serif-italic">Ubeyidah</h1>
      <div className="flex items-center gap-6">
        <nav className="flex gap-8">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link href="/#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
          <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
