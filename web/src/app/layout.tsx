import { ReactNode } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Login } from '@/components/Login'
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
