import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

export const metadata: Metadata = {
  title: 'Mlem - A Beautiful iOS Client for Lemmy',
  description: 'Mlem is a beautiful, intuitive open source iOS client for Lemmy that lets you effortlessly participate in conversations across all Lemmy servers.',
  keywords: ['Lemmy', 'iOS app', 'mobile app', 'fediverse', 'open source', 'client', 'social media'],
  authors: [{ name: 'The Mlem Group' }],
  openGraph: {
    title: 'Mlem - A Beautiful iOS Client for Lemmy',
    description: 'Mlem is a beautiful, intuitive open source iOS client for Lemmy that lets you effortlessly participate in conversations across all Lemmy servers.',
    images: [{ url: '/mlem-icon.jpeg', width: 1200, height: 630, alt: 'Mlem app logo' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mlem - A Beautiful iOS Client for Lemmy',
    description: 'Mlem is a beautiful, intuitive open source iOS client for Lemmy that lets you effortlessly participate in conversations across all Lemmy servers.',
    images: ['/mlem-icon.jpeg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
