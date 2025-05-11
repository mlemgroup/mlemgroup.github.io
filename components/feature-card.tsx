import type React from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-4 sm:p-5 transition-all hover:shadow-md h-full flex flex-col",
        className,
      )}
    >
      <div className="mb-3 sm:mb-4">{icon}</div>
      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{title}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-auto">{description}</p>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  )
}
