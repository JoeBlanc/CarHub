import "./global.css"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CarHub',
  description: 'Hub for cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
