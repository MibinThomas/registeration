import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'The Bootroom 2026 – Team Registration',
  description: 'Register your company football team for The Bootroom 2026 tournament.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream text-gray-800 font-retro min-h-screen">
        <header className="bg-retroRed text-white py-4 text-center font-bold text-xl">
          ⚽ The Bootroom 2026 – Team Registration
        </header>
        <main className="max-w-5xl mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
