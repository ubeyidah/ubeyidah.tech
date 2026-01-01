import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, Linkedin01Icon } from "@hugeicons/core-free-icons";

const profileLinks = [
  {
    icon: Github01Icon,
    href: "https://github.com/ubeyidah",
    label: "GitHub",
  },
  {
    icon: Linkedin01Icon,
    href: "https://linkedin.com/in/ubeyidah",
    label: "LinkedIn",
  },
];

export default function HeroSection() {
  return (
    <section className="pt-8">
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <Image
            src="/profile.jpg"
            alt="ubeyidah"
            width={60}
            height={60}
            className="rounded-full aspect-square object-top object-cover"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-lg font-bold font-instrument-serif-italic">Ubeyid Oumer</h1>
          <p className="text-muted-foreground mb-6">Self-Taught Developer</p>
        </div>

        <div className="flex gap-4">
          {profileLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg hover:bg-muted transition-colors"
              aria-label={link.label}
            >
              <HugeiconsIcon icon={link.icon} size={24} />
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
