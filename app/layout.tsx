import './globals.css'
import { Inter } from 'next/font/google'

import Topbar from './components/topbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'appdir-sc',
  description: 'PoC by Nadeem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
      <html lang="en">
        <body className="bg-gradient-to-r from-gray-900 to-gray-700 text-stone-100 ">  
          <main >
              <Topbar />
              {children}
          </main>
        </body>
      </html>
    )
  }
