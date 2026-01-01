"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, ExternalLink, LockIcon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";

const projects = [
  {
    "id": 1,
    "title": "dLog",
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
    title: "Project Two",
    description: "Full-stack application with React frontend and Node.js backend. Implements RESTful APIs, database integration, and modern UI components.",
    image: "/project2.jpg",
    technologies: [
      { name: "React", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/react-dark.svg" },
      { name: "Node.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/nodejs-dark.svg" },
      { name: "MongoDB", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/mongodb.svg" },
      { name: "Express", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/express.svg" }
    ],
    github: "https://github.com/ubeyidah/project-two",
    githubPrivate: true,
    live: "https://project-two.herokuapp.com",
    livePrivate: false,
  },
  {
    id: 3,
    title: "Project Three",
    description: "Mobile-responsive e-commerce platform with payment integration, product catalog, and admin dashboard.",
    image: "/project3.jpg",
    technologies: [
      { name: "Vue.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/vuejs.svg" },
      { name: "Firebase", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/firebase.svg" },
      { name: "Stripe", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/stripe.svg" },
      { name: "SCSS", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/sass.svg" }
    ],
    github: "https://github.com/ubeyidah/project-three",
    githubPrivate: false,
    live: "https://project-three.netlify.app",
    livePrivate: false,
  },
  {
    id: 4,
    title: "Project Four",
    description: "Data visualization dashboard built with D3.js and React. Features interactive charts, filters, and export functionality.",
    image: "/project4.jpg",
    technologies: [
      { name: "React", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/react-dark.svg" },
      { name: "D3.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/d3.svg" },
      { name: "Chart.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/chartjs.svg" },
      { name: "Python", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/python-dark.svg" }
    ],
    github: "https://github.com/ubeyidah/project-four",
    githubPrivate: true,
    live: "https://project-four.vercel.app",
    livePrivate: false,
  },
  {
    id: 5,
    title: "Project Five",
    description: "CLI tool for developers built with Rust. Provides utilities for code generation, file management, and productivity enhancements.",
    image: "/project5.jpg",
    technologies: [
      { name: "Rust", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/rust.svg" },
      { name: "Terminal", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/terminal.svg" }
    ],
    github: "https://github.com/ubeyidah/project-five",
    githubPrivate: false,
    live: null,
    livePrivate: false,
  },
];



export default function ProjectsSection() {

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 font-instrument-serif-italic">What I’m Building</h2>
      <div className="border-t border-muted/30">
        {projects.map((project, index) => (
          <div key={project.id} className="flex gap-8 items-start border border-muted/30 rounded-lg p-5 my-4 hover:opacity-90 transition-opacity duration-500 relative">
            {index < projects.length - 1 && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-px h-4 bg-gradient-to-b from-muted/50 to-transparent"></div>
            )}
            <div className="shrink-0 w-80 h-48 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden group">
              <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-full" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors ${project.githubPrivate ? 'pointer-events-none opacity-50' : ''}`}
                >
                  <HugeiconsIcon icon={project.githubPrivate ? LockIcon : Github01Icon} size={20} className={project.githubPrivate ? '' : 'group-hover:rotate-45 transition-transform duration-300'} />
                  {!project.githubPrivate && <HugeiconsIcon icon={ArrowRight01Icon} size={12} className="group-hover:rotate-90 transition-transform duration-300" />}
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors ${project.livePrivate ? 'pointer-events-none opacity-50' : ''}`}
                  >
                    <HugeiconsIcon icon={project.livePrivate ? LockIcon : ExternalLink} size={20} className={project.livePrivate ? '' : 'group-hover:rotate-45 transition-transform duration-300'} />
                    {!project.livePrivate && <HugeiconsIcon icon={ArrowRight01Icon} size={12} className="group-hover:rotate-90 transition-transform duration-300" />}
                  </a>
                )}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
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
