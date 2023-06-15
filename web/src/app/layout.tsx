import { ReactNode } from 'react'
import Login from '@/app/(pages)/Login/page'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'APIs',
  description: 'Comunicações entre APIs',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const logado = true
  // const logado = false

  return (
    <html lang="en">
      <body>
        {logado ? (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        ) : (
          <Login />
        )}
      </body>
    </html>
  )
}
