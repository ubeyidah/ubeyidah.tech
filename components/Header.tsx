import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-2 pt-4 border-b">
      <h1 className="text-l font-bold font-instrument-serif-italic">Ubeyidah</h1>
      <div className="flex items-center gap-6">
        <nav className="flex gap-8">
          <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Home</span>
          <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Project</span>
          <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Blog</span>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
