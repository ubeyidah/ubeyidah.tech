"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, ExternalLink, LockIcon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { TechIcons } from "./icons/TechIcons";

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
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/nextjs-dark.svg",
        "url": "https://nextjs.org",
        "iconKey": "NextJs"
      },
      {
        "name": "TypeScript",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/typescript.svg",
        "url": "https://typescriptlang.org",
        "iconKey": "TypeScript"
      },
      {
        "name": "Tailwind CSS",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/tailwindcss-dark.svg",
        "url": "https://tailwindcss.com",
        "iconKey": "Tailwind"
      },
      {
        "name": "tRPC",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/trpcbun.svg",
        "url": "https://trpc.io",
        "iconKey": "Trpc"
      },
      {
        "name": "React Query",
        "icon": "https://example.com/icons/react-query.svg",
        "url": "https://tanstack.com/query",
        "iconKey": "ReactQuery"
      },
      {
        "name": "Prisma",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/prisma.svg",
        "url": "https://prisma.io",
        "iconKey": "Prisma"
      },
      {
        "name": "Shadcn/ui",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/shadcnui.svg",
        "url": "https://ui.shadcn.com",
        "iconKey": "Shadcn"
      },
      { name: "Better Auth", icon: "https://raw.githubusercontent.com/betterauth/betterauth/main/assets/betterauth-icon.svg", url: "https://better-auth.com", iconKey: "BetterAuth" },
      {
        "name": "Bun",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/bun.svg",
        "url": "https://bun.sh",
        "iconKey": "Bun"
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
      { name: "Next.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/nextjs-dark.svg", url: "https://nextjs.org", iconKey: "NextJs" },
      { name: "TypeScript", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/typescript.svg", url: "https://typescriptlang.org", iconKey: "TypeScript" },
      { name: "React Query", icon: "https://example.com/icons/react-query.svg", url: "https://tanstack.com/query", iconKey: "ReactQuery" },
      { name: "Tailwind CSS", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/tailwind-dark.svg", url: "https://tailwindcss.com", iconKey: "Tailwind" },
      { name: "Shadcn/ui", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/shadcnui.svg", url: "https://ui.shadcn.com", iconKey: "Shadcn" },
      { name: "PostgreSQL", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/postgresql.svg", url: "https://postgresql.org", iconKey: "PostgreSQL" },
      { name: "Prisma", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/prisma.svg", url: "https://prisma.io", iconKey: "Prisma" },
      { name: "Resend", icon: "https://raw.githubusercontent.com/resendlhq/resend/main/docs/static/resend-black.svg", url: "https://resend.com", iconKey: "Resend" },
      { name: "pnpm", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/pnpm.svg", url: "https://pnpm.io", iconKey: "Pnpm" },
      { name: "Better Auth", icon: "https://raw.githubusercontent.com/betterauth/betterauth/main/assets/betterauth-icon.svg", url: "https://better-auth.com", iconKey: "BetterAuth" },
      { name: "Zod", icon: "https://raw.githubusercontent.com/0x7b3/zod-icons/main/zod.svg", url: "https://zod.dev", iconKey: "Zod" }
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
      { name: "Next.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/nextjs-dark.svg", url: "https://nextjs.org", iconKey: "NextJs" },
      { name: "TypeScript", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/typescript.svg", url: "https://typescriptlang.org", iconKey: "TypeScript" },
      { name: "Node.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/nodejs.svg", url: "https://nodejs.org", iconKey: "NodeJS" },
      { name: "Zod", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/zod.svg", url: "https://zod.dev", iconKey: "Zod" },
      { name: "pnpm", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/pnpm.svg", url: "https://pnpm.io", iconKey: "Pnpm" },
      { name: "Turborepo", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/vercel.svg", url: "https://turbo.build", iconKey: "Turborepo" },
      { name: "Vitest", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/vitest.svg", url: "https://vitest.dev", iconKey: "Vitest" }
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
      { name: "React", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/react-dark.svg", url: "https://reactjs.org", iconKey: "React" },
      { name: "Node.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/nodejs.svg", url: "https://nodejs.org", iconKey: "NodeJS" },
      { name: "Express.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/express.svg", url: "https://expressjs.com", iconKey: "Express" },
      { name: "MongoDB", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/mongodb.svg", url: "https://mongodb.com", iconKey: "MongoDB" },
      { name: "npm", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/npm.svg", url: "https://npmjs.com", iconKey: "Npm" },
      { name: "React Native", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/react-native.svg", url: "https://reactnative.dev", iconKey: "ReactNative" }
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
      { name: "React Native", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/react-native.svg", url: "https://reactnative.dev", iconKey: "ReactNative" },
      { name: "Expo", icon: "https://example.com/icons/expo.svg", url: "https://expo.dev", iconKey: "Expo" },
      { name: "TypeScript", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/typescript.svg", url: "https://typescriptlang.org", iconKey: "TypeScript" },
      { name: "NativeWind", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/tailwindcss.svg", url: "https://nativewind.dev", iconKey: "Tailwind" },
      { name: "npm", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/npm.svg", url: "https://npmjs.com", iconKey: "Npm" },
      { name: "Node.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/nodejs.svg", url: "https://nodejs.org", iconKey: "NodeJS" }
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
          <div key={project.id} className="flex flex-col md:flex-row gap-6 items-start border border-muted/30 rounded-lg p-5 my-4 hover:opacity-90 transition-opacity duration-500 relative">
            <Badge variant="secondary" className="absolute top-0 right-0 rounded capitalize rounded-tr-lg bg-border/40">{project.type}</Badge>
            {index < projects.length - 1 && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-px h-4 bg-linear-to-b from-muted/50 to-transparent"></div>
            )}
            <div className="shrink-0 w-full md:w-80 h-48 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden group">
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

            <div className="flex-1 flex flex-col justify-between h-full">
              <a
                href={project.live || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold mb-1 hover:underline"
              >
                {project.title}
              </a>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{project.description}</p>

              <div >
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => {
                    if (tech.iconKey && TechIcons[tech.iconKey as keyof typeof TechIcons]) {
                      const IconComponent = TechIcons[tech.iconKey as keyof typeof TechIcons];
                      return (
                        <a
                          key={tech.name}
                          href={tech.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-5 h-5 hover:scale-110 transition-transform"
                          title={tech.name}
                        >
                          <IconComponent className="w-full h-full" />
                        </a>
                      );
                    }
                  })}
                </div>
              </div>


            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
