import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'MongoDB, Tailwind CSS, Next-Auth Example',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-4xl mx-auto p-4">
          <Navbar />
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  )
}
