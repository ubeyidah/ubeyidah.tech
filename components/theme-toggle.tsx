"use client";

import { MoonIcon, SunIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      <HugeiconsIcon
        icon={resolvedTheme === "dark" ? SunIcon : MoonIcon}
        size={16}
        className="transition-transform duration-200"
      />
    </button>
  );
}
