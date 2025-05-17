"use client";

import Image from "next/image";

const screenshots = [
  {
    id: 1,
    src: "/screenshots/showcase/feeds.jpeg",
    alt: "Mlem multiple feeds screenshot",
    caption: "Experience multiple feeds with different sorting options.",
  },
  {
    id: 2,
    src: "/screenshots/showcase/search.jpeg",
    alt: "Mlem powerful search functionality",
    caption:
      "Find anything instantly with powerful cross-instance search capabilities.",
  },
  {
    id: 3,
    src: "/screenshots/showcase/colored_comment_indents.jpeg",
    alt: "Mlem colored comment indents",
    caption:
      "Navigate complex conversations easily with color-coded comment thread indicators.",
  },
  {
    id: 4,
    src: "/screenshots/showcase/configurable.jpeg",
    alt: "Mlem configurable settings",
    caption:
      "Tailor every aspect of the app to your preferences with extensive customization options.",
  },
  {
    id: 5,
    src: "/screenshots/showcase/themes.jpeg",
    alt: "Mlem themes showcase",
    caption: "Switch between beautiful themes.",
  },
  {
    id: 6,
    src: "/screenshots/showcase/app_icons.jpeg",
    alt: "Mlem alternative app icons",
    caption:
      "Personalize your home screen with Mlem's beautifully designed app icons.",
  },
];

export function ScreenshotShowcase() {
  return (
    <div className="w-full">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        See Mlem in Action
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {screenshots.map((screenshot) => (
          <div
            key={`screenshot-${screenshot.id}`}
            className="flex flex-col h-full"
          >
            <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm overflow-hidden">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={400}
                height={400}
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>

            <p className="mt-3 text-center text-sm text-zinc-700 dark:text-zinc-300 font-medium">
              {screenshot.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
