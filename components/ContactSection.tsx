import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, Linkedin01Icon, NewTwitterIcon, Email, ArrowRight01Icon } from "@hugeicons/core-free-icons";

const contactItems = [
  {
    icon: Email,
    label: "Email",
    value: "ubeyidah@gmail.com",
    href: "mailto:ubeyidah@gmail.com",
    size: "large", // spans 2 columns
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Github01Icon,
    label: "GitHub",
    value: "ubeyidah",
    href: "https://github.com/ubeyidah",
    size: "medium",
    gradient: "from-gray-500/20 to-slate-500/20",
  },
  {
    icon: Linkedin01Icon,
    label: "LinkedIn",
    value: "ubeyidah",
    href: "https://linkedin.com/in/ubeyidah",
    size: "medium",
    gradient: "from-blue-600/20 to-blue-800/20",
  },
  {
    icon: NewTwitterIcon,
    label: "X (Twitter)",
    value: "ubeyidah",
    href: "https://x.com/ubeyidah",
    size: "small",
    gradient: "from-black/20 to-gray-600/20",
  },
];

export default function ContactSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12 font-instrument-serif-italic">Get In Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {contactItems.map((contact, index) => {
          const isLarge = contact.size === "large";
          const isMedium = contact.size === "medium";

          return (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${contact.gradient}
                hover:shadow-lg transition-all duration-500 ease-out
                ${isLarge ? "md:col-span-2 md:row-span-1" : ""}
                ${isMedium ? "md:col-span-1" : ""}
                ${contact.size === "small" ? "md:col-span-1" : ""}
                ${index === 1 ? "md:row-start-2" : ""}
                ${index === 2 ? "md:row-start-2" : ""}
                ${index === 3 ? "md:row-start-1 md:col-start-3" : ""}
              `}
            >
              <div className="relative p-6 h-full min-h-[160px] flex flex-col justify-between">
                {/* Background Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  <HugeiconsIcon
                    icon={contact.icon}
                    size={isLarge ? 80 : 60}
                    className="transform group-hover:scale-110 group-hover:-translate-x-2 group-hover:-translate-y-1 transition-all duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                    {contact.label}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {contact.value}
                  </p>
                </div>

                {/* Arrow */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground/70 uppercase tracking-wider">
                    Contact
                  </span>
                  <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={16}
                      className="text-muted-foreground/50 group-hover:text-primary transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}