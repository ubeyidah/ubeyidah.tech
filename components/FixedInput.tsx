"use client";

import { useState } from "react";
import { InputGroup, InputGroupInput, InputGroupButton, InputGroupAddon } from "@/components/ui/input-group";
import { HugeiconsIcon } from "@hugeicons/react";
import { AiChat01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons";

export default function FixedInput() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submit logic here
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none" />

      {/* Input container with gradient border effect */}
      <div className="relative max-w-md mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl" />
        <div className="relative bg-background/80 backdrop-blur-sm border border-white/10 rounded-full p-1 shadow-2xl">
          <form onSubmit={handleSubmit}>
            <InputGroup className="bg-transparent">
              <InputGroupAddon>
                <HugeiconsIcon icon={AiChat01Icon} size={16} />
              </InputGroupAddon>
              <InputGroupInput
                type="text"
                placeholder="Have a question?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-transparent border-0 focus:ring-0 placeholder:text-muted-foreground/70"
              />
              <InputGroupButton type="submit" size="sm" className="rounded-full" disabled={!message.trim()}>
                <HugeiconsIcon icon={ArrowUp01Icon} size={16} />
              </InputGroupButton>
            </InputGroup>
          </form>
        </div>
      </div>
    </div>
  );
}