"use client";

import type React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between h-16 px-4">
          <Link href="/" className="font-bold text-xl flex items-center">
            <img
              src="/mlem-icon.jpeg"
              alt="Mlem"
              className="h-7 w-7 rounded-sm mr-2"
            />{" "}
            Mlem
          </Link>
          <nav className="flex items-center gap-1 md:gap-2">
            <NavLink href="/" active={pathname === "/"}>
              Home
            </NavLink>
            <NavLink
              href="/faq"
              active={pathname === "/faq" || pathname.startsWith("/faq/")}
            >
              FAQ
            </NavLink>
            <a
              href="https://github.com/mlemgroup/mlem"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-sm font-medium transition-colors text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800"
            >
              <span>GitHub</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-2 rounded-md text-sm font-medium transition-colors",
        active
          ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
          : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800",
      )}
    >
      {children}
    </Link>
  );
}
