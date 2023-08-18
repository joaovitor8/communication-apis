import { ReactNode } from 'react'
import { Navbar } from '@/components/componentsGlobais/Navbar'
import { Footer } from '@/components/componentsGlobais/Footer'
// import { Login } from '@/components/Login'
import './globals.css'

export const metadata = {
  title: 'APIs',
  description: 'Comunicações entre APIs',
}

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en">
    <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
