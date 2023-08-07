'use client'

import { ReactNode } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Login } from '@/components/Login'
import './globals.css'
import { useState } from 'react'

export const metadata = {
  title: 'APIs',
  description: 'Comunicações entre APIs',
}

export default function RootLayout({ children }: { children: ReactNode }) {

  const [logar, setLogar] = useState(false)

  return (
    <html lang="en">
      <body>
        {logar ? (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        ) : (
          <Login setLogar={setLogar}/>
        )}
      </body>
    </html>
  )
}
