"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { InputGroup, InputGroupInput, InputGroupButton, InputGroupAddon } from "@/components/ui/input-group";
import { HugeiconsIcon } from "@hugeicons/react";
import { AiChat01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons";

export default function FixedInput() {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const containerVariants = {
    closed: { width: 384 },
    open: { width: 448, transition: { staggerChildren: 0.1 } }
  };

  const innerVariants = {
    closed: { height: "auto" },
    open: { height: 480 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (open && ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/95 to-transparent pointer-events-none" />

      <motion.div initial="closed" animate={open ? "open" : "closed"} variants={containerVariants} className="relative mx-auto">
        <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl" />
        <motion.div ref={ref} variants={innerVariants} className="relative bg-background/80 backdrop-blur-sm border border-white/10 rounded-3xl p-1 shadow-2xl flex flex-col justify-between">
          <div></div>
          <form onSubmit={handleSubmit}>
            <InputGroup className="bg-transparent">
              <InputGroupAddon>
                <HugeiconsIcon icon={AiChat01Icon} size={16} />
              </InputGroupAddon>
              <InputGroupInput
                type="text"
                placeholder="Have a question?"
                value={message}
                onFocus={() => setOpen(true)}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-transparent border-0 focus:ring-0 placeholder:text-muted-foreground/70"
              />
              <InputGroupButton type="submit" size="sm" className="rounded-full cursor-pointer" disabled={!message.trim()}>
                <HugeiconsIcon icon={ArrowUp01Icon} size={16} />
              </InputGroupButton>
          </InputGroup>
        </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
