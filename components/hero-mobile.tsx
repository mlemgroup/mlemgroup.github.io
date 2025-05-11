import React from "react";
import { Code } from "lucide-react";

export function HeroMobile() {
  return (
    <section className="py-12 pt-12 pb-0 px-0 bg-gradient-to-br from-sky-500/10 via-sky-500/5 to-transparent relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6" style={{ paddingBottom: "60px" }}>
          {/* Text Content */}
          <div className="space-y-4 px-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300 mb-2">
              <Code className="h-3.5 w-3.5 mr-1" />
              Open Source
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Experience Lemmy in a <span className="text-sky-500">native way.</span>
            </h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              Mlem is a beautiful, intuitive open source iOS client for Lemmy that lets you effortlessly participate in
              conversations across all Lemmy servers.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://apps.apple.com/app/id6450543782" target="_blank" rel="noopener noreferrer" className="h-12 inline-flex items-center">
                <img 
                  src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" 
                  alt="Download on the App Store" 
                  className="h-full w-auto" 
                />
              </a>
              <a href="https://github.com/mlemgroup/mlem" target="_blank" rel="noopener noreferrer" className="h-12 border border-zinc-200 dark:border-zinc-700 rounded-md px-4 py-2 inline-flex items-center hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors">
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </div>
          
          {/* Screenshots - Extended beyond container for visual effect */}
          <div className="relative w-full overflow-visible h-96">
            {/* Left screenshot (shorter and positioned off-screen to left) */}
            <div className="absolute -left-10 bottom-0 w-40 h-72 rounded-t-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 overflow-hidden shadow-md" style={{ marginBottom: "-60px" }}>
              <img 
                src="/screenshots/hero-left.jpeg" 
                alt="Mlem Screenshot" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
            
            {/* Right screenshot (shorter and positioned off-screen to right) */}
            <div className="absolute -right-10 bottom-0 w-40 h-72 rounded-t-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 overflow-hidden shadow-md" style={{ marginBottom: "-60px" }}>
              <img 
                src="/screenshots/hero-right.jpeg" 
                alt="Mlem Screenshot" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
            
            {/* Center screenshot (longest and in front) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-48 h-88 rounded-t-2xl border border-zinc-200 dark:border-zinc-700 z-10 bg-white dark:bg-zinc-800 overflow-hidden shadow-lg" style={{ marginBottom: "-60px" }}>
              <img 
                src="/screenshots/hero-center.jpeg" 
                alt="Mlem Screenshot" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
