import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bearable',
  description: 'First year enginering learning platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      <div className="pageContainer">
        <div className="contentWrap">
          {children}
        </div>
      </div>
      <Footer />
      </body>
    </html>
  )
}
