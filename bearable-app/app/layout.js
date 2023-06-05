import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bearable',
  description: 'First year enginering learning platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='pt-24 bg-[#F3F1E4]'>
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
