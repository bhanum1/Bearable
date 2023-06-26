import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { TailwindIndicator } from '@/components/tailwind-indicator'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bearable',
  description: 'First year enginering learning platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className='pt-[4rem] bg-[#F3F1E4]'>
        <Navbar />
        <div>
          {children}
        </div>
        <TailwindIndicator />
        <Footer />
      </body>
    </html>
  )
}
