import { ReactNode } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
