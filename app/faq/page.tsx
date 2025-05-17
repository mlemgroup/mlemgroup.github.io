import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-900">
      <Navbar />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
            <a
              href="https://github.com/mlemgroup/mlem/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-zinc-200 text-zinc-800 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 transition-colors"
            >
              Ask on GitHub
            </a>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-zinc-200 dark:border-zinc-700"
              >
                <AccordionTrigger className="text-zinc-900 dark:text-zinc-100 hover:text-sky-500 dark:hover:text-sky-400">
                  What is Lemmy?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-700 dark:text-zinc-300">
                  Lemmy is an open source, federated link aggregator and
                  discussion platform. It&#39;s similar to Reddit but is
                  decentralized, meaning it runs on many independent servers
                  (instances) that can communicate with each other.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-zinc-200 dark:border-zinc-700"
              >
                <AccordionTrigger className="text-zinc-900 dark:text-zinc-100 hover:text-sky-500 dark:hover:text-sky-400">
                  What makes Mlem different from other Lemmy clients?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-700 dark:text-zinc-300">
                  Mlem offers a beautiful, intuitive interface designed
                  specifically for a seamless Lemmy experience. It focuses on
                  clean design, performance, and making it easy to participate
                  in conversations across all Lemmy servers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-zinc-200 dark:border-zinc-700"
              >
                <AccordionTrigger className="text-zinc-900 dark:text-zinc-100 hover:text-sky-500 dark:hover:text-sky-400">
                  Is Mlem free to use?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-700 dark:text-zinc-300">
                  Yes, Mlem is completely free to download and use. It&#39;s
                  also open source, meaning you can contribute to its
                  development or customize it to your needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-zinc-200 dark:border-zinc-700"
              >
                <AccordionTrigger className="text-zinc-900 dark:text-zinc-100 hover:text-sky-500 dark:hover:text-sky-400">
                  Which platforms does Mlem support?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-700 dark:text-zinc-300">
                  Mlem currently works on iOS and iPadOS devices. While it
                  functions on iPadOS, we&#39;re planning to optimize the iPad
                  experience further in future updates. We also have plans to
                  expand to macOS.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border-zinc-200 dark:border-zinc-700"
              >
                <AccordionTrigger className="text-zinc-900 dark:text-zinc-100 hover:text-sky-500 dark:hover:text-sky-400">
                  How do I report bugs or request features?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-700 dark:text-zinc-300">
                  You can report bugs or request features on our{" "}
                  <a
                    href="https://github.com/mlemgroup/mlem/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    GitHub Issues page
                  </a>
                  . You can also join the community on{" "}
                  <a
                    href="https://lemmy.ml/c/mlemapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    lemmy.ml
                  </a>{" "}
                  or our{" "}
                  <a
                    href="https://matrix.to/#/#mlemapp:matrix.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    Matrix chat
                  </a>
                  .
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="border-zinc-200 dark:border-zinc-700"
              >
                <AccordionTrigger className="text-zinc-900 dark:text-zinc-100 hover:text-sky-500 dark:hover:text-sky-400">
                  Can I use Mlem with any Lemmy instance?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-700 dark:text-zinc-300">
                  Yes, Mlem works with any Lemmy instance. You can connect to
                  your preferred server or multiple servers simultaneously to
                  browse content from across the fediverse.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
