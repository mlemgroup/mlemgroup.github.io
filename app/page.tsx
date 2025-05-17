import {
  MessageSquare,
  Globe,
  Zap,
  Code,
  Bug,
  Settings,
  Shield,
  Heart,
  Plus,
} from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeatureCard } from "@/components/feature-card";
import { ScreenshotShowcase } from "@/components/screenshot-showcase";
import { HeroMobile } from "@/components/hero-mobile";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-900">
      <Navbar />

      <main className="flex-1">
        {/* Mobile Hero (only visible on small screens) */}
        <div className="md:hidden">
          <HeroMobile />
        </div>

        {/* Desktop Hero (hidden on small screens) */}
        <section className="hidden md:block py-12 pt-4 pb-0 px-4 bg-gradient-to-br from-sky-500/10 via-sky-500/5 to-transparent relative">
          <div className="container mx-auto max-w-6xl">
            <div
              className="flex flex-row items-center gap-8"
              style={{ paddingBottom: "60px" }}
            >
              <div className="w-1/2 space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300 mb-2">
                  <Code className="h-3.5 w-3.5 mr-1" />
                  Open Source
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Experience Lemmy in a{" "}
                  <span className="text-sky-500">native way.</span>
                </h1>
                <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-xl">
                  Mlem is a beautiful, intuitive open source iOS client for
                  Lemmy that lets you effortlessly participate in conversations
                  across all Lemmy servers.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://apps.apple.com/app/id6450543782"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 inline-flex items-center"
                  >
                    <img
                      src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                      alt="Download on the App Store"
                      className="h-full w-auto"
                    />
                  </a>
                  <a
                    href="https://github.com/mlemgroup/mlem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 border border-zinc-200 dark:border-zinc-700 rounded-md px-4 py-2 inline-flex items-center hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors"
                  >
                    <span className="font-medium">GitHub</span>
                  </a>
                </div>
              </div>
              <div className="w-1/2 flex justify-center">
                <div className="relative w-full" style={{ height: "420px" }}>
                  {/* Left screenshot (shorter and behind) */}
                  <div
                    className="absolute left-8 bottom-0 w-44 h-80 rounded-t-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 overflow-hidden"
                    style={{ marginBottom: "-60px" }}
                  >
                    <img
                      src="/screenshots/hero-left.jpeg"
                      alt="Mlem Screenshot"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Right screenshot (shorter and behind) */}
                  <div
                    className="absolute right-8 bottom-0 w-44 h-80 rounded-t-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 overflow-hidden"
                    style={{ marginBottom: "-60px" }}
                  >
                    <img
                      src="/screenshots/hero-right.jpeg"
                      alt="Mlem Screenshot"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Center screenshot (longest and in front) */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-52 h-96 rounded-t-2xl border border-zinc-200 dark:border-zinc-700 z-10 bg-white dark:bg-zinc-800 overflow-hidden"
                    style={{ marginBottom: "-60px" }}
                  >
                    <img
                      src="/screenshots/hero-center.jpeg"
                      alt="Mlem Screenshot"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshot Showcase */}
        <section className="py-12 px-4 bg-zinc-100 dark:bg-zinc-800 border-y border-zinc-200 dark:border-zinc-700">
          <div className="container mx-auto max-w-6xl">
            <ScreenshotShowcase />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 pt-8 pb-8 px-4 bg-gradient-to-br from-sky-500/10 via-sky-500/5 to-transparent">
          <div className="container mx-auto max-w-6xl">
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8 w-full text-justify">
              Mlem for Lemmy is beautiful, smooth, and compatible with all major
              Lemmy instances. Written fully in iOS&#39; native Swift, Mlem lets
              you experience Lemmy while taking advantage of the best your
              device has to offer. With powerful, easy-to-use features such as
              swipe actions and account quick-switching, a robust set of
              customizations, and a highly optimized backend, Mlem offers the
              mobile Lemmy experience you deserve!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                icon={<Globe className="h-8 w-8 text-sky-500" />}
                title="Multi-Instance Support"
                description="Connect to any Lemmy instance and interact with content across the Fediverse seamlessly."
              />

              <FeatureCard
                icon={<MessageSquare className="h-8 w-8 text-sky-500" />}
                title="Intuitive Conversations"
                description="Participate in discussions with an interface designed for meaningful engagement."
              />

              <FeatureCard
                icon={<Zap className="h-8 w-8 text-sky-500" />}
                title="Lightning Fast"
                description="Enjoy a responsive, native experience that makes browsing Lemmy content a pleasure."
              />

              <FeatureCard
                icon={<Settings className="h-8 w-8 text-sky-500" />}
                title="Customizable"
                description="Tailor your experience with robust customization options for themes, layouts, and preferences."
              />

              <FeatureCard
                icon={<Shield className="h-8 w-8 text-sky-500" />}
                title="Privacy-First"
                description="No tracking, no ads, no data collection. Mlem loves privacy!"
              />

              <div className="group relative overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-4 sm:p-5 transition-all hover:shadow-md h-full flex flex-col">
                <div className="mb-3 sm:mb-4">
                  <Code className="h-8 w-8 text-sky-500" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                  Open Source
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-auto">
                  Licensed under GPL v3.0. Check us out on{" "}
                  <a
                    href="https://github.com/mlemgroup/mlem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-500 hover:underline"
                  >
                    GitHub
                  </a>
                  .
                </p>

                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="py-12 pt-8 pb-8 px-4 bg-zinc-100 dark:bg-zinc-800 border-y border-zinc-200 dark:border-zinc-700">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Get Involved
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Contribute Box */}
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-700 h-full">
                  <h3 className="text-xl font-bold mb-4">
                    Contribute to the Codebase
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    We welcome pull requests and love external contributions!
                    Missing a feature? Let us know on our{" "}
                    <a
                      href="https://github.com/mlemgroup/mlem/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:underline"
                    >
                      issue tracker
                    </a>
                    .
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-5">
                    Don&#39;t want to deal with the App Store or TestFlight?
                    Download{" "}
                    <a
                      href="https://github.com/mlemgroup/mlem"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:underline"
                    >
                      the code
                    </a>{" "}
                    and install the latest build yourself.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <a
                      href="https://github.com/mlemgroup/mlem/issues/new?template=bug-report.yml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md text-sm font-medium bg-zinc-200 text-zinc-800 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 transition-colors"
                    >
                      <Bug className="inline-block h-4 w-4 mr-1" />
                      Bug Report
                    </a>
                    <a
                      href="https://github.com/mlemgroup/mlem/issues/new?template=improvement-proposal.yml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md text-sm font-medium bg-zinc-200 text-zinc-800 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 transition-colors"
                    >
                      <Plus className="inline-block h-4 w-4 mr-1" />
                      Feature Request
                    </a>
                  </div>
                </div>
              </div>

              {/* TestFlight Box */}
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-700 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="/mlem-icon-metal.jpeg"
                      alt="Mlem Icon Metal"
                      className="w-8 h-8 rounded-sm"
                    />
                    <h3 className="text-xl font-bold">
                      Help Test New Features
                    </h3>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Join our TestFlight program to test new features before
                    they&#39;re released to the public.
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-5">
                    Your feedback helps us improve the app and fix bugs early in
                    the development process.
                  </p>
                  <div className="mt-auto">
                    <a
                      href="https://testflight.apple.com/join/W6ajfKQt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-sky-500 text-white hover:bg-sky-600 transition-colors"
                    >
                      <Zap className="h-4 w-4 mr-1" />
                      Join TestFlight
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-12 pt-8 pb-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-200 dark:border-zinc-700">
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                    Want to chat about Mlem?
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    You can discuss and ask questions about Mlem at the
                    community on lemmy.ml or join us on Matrix.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://lemmy.ml/c/mlemapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-zinc-200 text-zinc-800 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 transition-colors"
                    >
                      <span className="font-medium">lemmy.ml</span>
                    </a>
                    <a
                      href="https://matrix.to/#/#mlemapp:matrix.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-zinc-200 text-zinc-800 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 transition-colors"
                    >
                      <span className="font-medium">Matrix Chat</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-200 dark:border-zinc-700 h-full">
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                    The Mlem Group
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    <a
                      href="https://techhub.social/@weston"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 dark:text-sky-400 hover:underline transition-colors"
                    >
                      Weston
                    </a>{" "}
                    <span className="text-zinc-400 dark:text-zinc-600 mx-1">
                      &middot;
                    </span>
                    <a
                      href="https://github.com/EricBAndrews"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 dark:text-sky-400 hover:underline transition-colors"
                    >
                      Eric
                    </a>{" "}
                    <span className="text-zinc-400 dark:text-zinc-600 mx-1">
                      &middot;
                    </span>
                    <a
                      href="https://github.com/JakeShirley"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 dark:text-sky-400 hover:underline transition-colors"
                    >
                      Jake Shirley
                    </a>{" "}
                    <span className="text-zinc-400 dark:text-zinc-600 mx-1">
                      &middot;
                    </span>
                    <a
                      href="https://github.com/ShadowJonathan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 dark:text-sky-400 hover:underline transition-colors"
                    >
                      ShadowJonathan
                    </a>
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 font-medium">
                    Other Contributors
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-3">
                    We love community contributions! Visit our GitHub page to
                    see the developers who have helped make this app possible.
                  </p>
                  <div className="mt-4">
                    <a
                      href="https://github.com/mlemgroup/mlem/graphs/contributors"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-zinc-200 text-zinc-800 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 transition-colors"
                    >
                      <Heart className="h-4 w-4 mr-1" />
                      View Contributors
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 pt-2 pb-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-br from-sky-500/10 via-sky-500/5 to-transparent rounded-xl p-5 sm:p-6 border border-sky-200 dark:border-sky-900/30">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Ready to transform your Lemmy experience?
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Join the open source community and download Mlem today.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://apps.apple.com/app/id6450543782"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-auto w-40"
                  >
                    <img
                      src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                      alt="Download on the App Store"
                      className="w-full h-auto"
                    />
                  </a>
                  <a
                    href="https://github.com/mlemgroup/mlem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-14 w-40 border border-zinc-200 dark:border-zinc-700 rounded-lg flex items-center justify-center hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors"
                  >
                    <span className="font-medium">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
