import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-6 px-4 bg-zinc-100 dark:bg-zinc-800 border-t border-zinc-200 dark:border-zinc-700 text-center">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center items-center space-x-4 text-sm text-zinc-600 dark:text-zinc-400">
          <span>Mlem</span>
          <span className="text-zinc-400 dark:text-zinc-600">&middot;</span>
          <Link href="/faq" className="hover:text-zinc-900 dark:hover:text-zinc-100">FAQ</Link>
          <span className="text-zinc-400 dark:text-zinc-600">&middot;</span>
          <Link href="/eula" className="hover:text-zinc-900 dark:hover:text-zinc-100">EULA</Link>
          <span className="text-zinc-400 dark:text-zinc-600">&middot;</span>
          <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-zinc-100">Privacy Policy</Link>
        </div>
        
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
          Made with ❤️
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
          The Mlem app and website are licensed under the GPL v3.0 license.
        </p>
      </div>
    </footer>
  )
}
