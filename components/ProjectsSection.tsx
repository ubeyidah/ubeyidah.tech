"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, ExternalLink, LockIcon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const projects = [
  {
    "id": 1,
    "title": "DLog",
    "type": "web app",
    "description": "A minimalist daily reflection and self-improvement tracker. Built to help users capture daily memories, moods, and progress with discipline and intentionality. Features include quick log entry, mood tracking, tag-based organization, and insightful stats for growth.",
    "image": "/projects/dlog.png",
    "technologies": [
      {
        "name": "Next.js",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/nextjs-dark.svg"
      },
      {
        "name": "TypeScript",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/typescript.svg"
      },
      {
        "name": "Tailwind CSS",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/tailwindcss-dark.svg"
      },
      {
        "name": "tRPC",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/trpcbun.svg"
      },
      {
        "name": "Prisma",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/prisma.svg"
      },
      {
        "name": "Shadcn/ui",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/shadcnui.svg"
      },
      { name: "Better Auth", icon: "https://raw.githubusercontent.com/betterauth/betterauth/main/assets/betterauth-icon.svg" },
      {
        "name": "Bun",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/bun.svg"
      }
    ],
    "github": "https://github.com/ubeyidah/dlog",
    "githubPrivate": false,
    "live": "https://dlog.live",
    "livePrivate": false
  },
  {
    id: 2,
    title: "Clario",
    type: "web app",
    description: "A user-focused LMS that streamlines course creation, student enrollment, and day-to-day learning. Instructors can publish courses, manage rosters, and send notifications; students access interactive lessons, track progress, and view analytics to improve outcomes.",
    image: "/projects/clario.png",
    technologies: [
      { name: "Next.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/nextjs-dark.svg" },
      { name: "React", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/react-dark.svg" },
      { name: "TypeScript", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/typescript.svg" },
      { name: "Tailwind CSS", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/tailwind-dark.svg" },
      { name: "Prisma", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/prisma.svg" },
      { name: "PostgreSQL", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/postgresql.svg" },
      { name: "Zod", icon: "https://raw.githubusercontent.com/0x7b3/zod-icons/main/zod.svg" },
      { name: "Resend", icon: "https://raw.githubusercontent.com/resendlhq/resend/main/docs/static/resend-black.svg" },
      { name: "Better Auth", icon: "https://raw.githubusercontent.com/betterauth/betterauth/main/assets/betterauth-icon.svg" },
      { name: "Arcjet", icon: "https://example.com/icons/arcjet.svg" }
    ],
    github: "https://github.com/ubeyidah/clario",
    githubPrivate: false,
    live: "https://clario.pro.et",
    livePrivate: false
  },
  {
    id: 3,
    title: "Nviron",
    type: "library",
    description: "Lightweight, type-safe environment variable manager for modern JS/TS projects. Validates and safely accesses env variables with Zod.",
    image: "/projects/nviron.png",
    technologies: [
      { name: "TypeScript", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/typescript.svg" },
      { name: "Node.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/nodejs.svg" },
      { name: "Zod", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/zod.svg" },
      { name: "pnpm", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/pnpm.svg" },
      { name: "Turborepo", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/vercel.svg" },
      { name: "Vitest", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/vitest.svg" }
    ],
    github: "https://github.com/ubeyidah/nviron",
    githubPrivate: false,
    live: "https://nviron.vercel.app",
    livePrivate: false,
  },
  {
    id: 4,
    title: "UnitWise Ethiopia",
    type: "web app",
    description: "Grade 12 exam preparation platform for Ethiopian students. Study unit-wise lessons, practice past exams, take mock tests, and track learning progress.",
    image: "/projects/unit-wise-ethiopia.png",
    technologies: [
      { name: "React", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/react-dark.svg" },
      { name: "Node.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/nodejs.svg" },
      { name: "Express.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/express.svg" },
      { name: "MongoDB", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/mongodb.svg" },
      { name: "npm", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/npm.svg" }
    ],
    github: "https://github.com/ubeyidah/unitwise-ethiopia",
    githubPrivate: true,
    live: null,
    livePrivate: true,
  },
  {
    id: 5,
    title: "Contactify",
    type: "mobile app",
    description: "Contactify is an accessibility-focused mobile app for elderly users that displays contacts as large, photo-based cards. Users can easily recognize people visually and swipe to call, making everyday communication simple and stress-free.",
    image: "/projects/contactify.png",
    technologies: [
      { name: "React Native", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/react-native.svg" },
      { name: "TypeScript", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/typescript.svg" },
      { name: "NativeWind", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/tailwindcss.svg" },
      { name: "Node.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/nodejs.svg" }
    ],
    github: "https://github.com/ubeyidah/contactify",
    githubPrivate: false,
    live: null,
    livePrivate: true,
  }
];



export default function ProjectsSection() {

  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold mb-2 font-sans italic">What I’m Building</h2>
      <p className="text-muted-foreground mb-8">Real-world projects with real users</p>
      <div>
        {projects.map((project, index) => (
          <div key={project.id} className="flex gap-8 items-start border border-muted/30 rounded-lg p-5 my-4 hover:opacity-90 transition-opacity duration-500 relative">
            <Badge variant="secondary" className="absolute top-0 right-0 rounded capitalize rounded-tr-lg bg-border/40">{project.type}</Badge>
            {index < projects.length - 1 && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-px h-4 bg-linear-to-b from-muted/50 to-transparent"></div>
            )}
            <div className="shrink-0 w-80 h-48 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden group">
              <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-full object-cover" />
              <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Button size="sm" variant="outline" className="border-4 bg-background" asChild disabled={project.githubPrivate}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <HugeiconsIcon icon={project.githubPrivate ? LockIcon : Github01Icon} size={16} />
                  </a>
                </Button>
                {project.live && (
                  <Button size="sm" variant="outline" className="border-4 bg-background" asChild disabled={project.livePrivate}>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <HugeiconsIcon icon={project.livePrivate ? LockIcon : ExternalLink} size={16} />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="flex-1">
              <a
                href={project.live || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold mb-1 hover:underline"
              >
                {project.title}
              </a>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{project.description}</p>

              <div className="">
                <div className="flex mt-auto gap-2">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <div key={tech.name} className="w-5 h-5">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  {project.technologies.length > 6 && (
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-muted-foreground/20 transition-all duration-300 group-hover/stack:translate-x-4 group-hover/stack:scale-110 flex itecems-center justify-center bg-muted text-xs font-medium text-muted-foreground">
                      +
                    </div>
                  )}
                </div>
              </div>


            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
