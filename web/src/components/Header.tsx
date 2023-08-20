'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
  const [nav, setNav] = useState(false)

  const showNav = () => {
    setNav(!nav)
  }

  return (
    <header className="flex items-center justify-around border-2 py-[30px]">
      <h2 className="text-3xl font-bold text-green-500">
        <Link href={'/'}>&lt;LOGO/&gt;</Link>
      </h2>

      {/* Computador */}
      <nav className="hidden gap-5 md:flex">
        <Link href={'/'} className="font-medium text-green-500">HOME</Link>
        <Link href={'/cat'} className="font-medium text-green-500">CAT</Link>
        <Link href={'/dog'} className="font-medium text-green-500">DOG</Link>
        <Link href={'/cadastro'} className="font-medium text-green-500">CADASTRO</Link>
      </nav>

      {/* Celular IMGs */}
      {nav ? (
        <Image src={'/close.png'} alt={''} className="fixed right-[30px] z-50 text-3xl md:hidden" onClick={showNav} width={40} height={40} />
      ) : (
        <Image src={'/menu.png'} alt={''} className="text-3xl md:hidden" onClick={showNav} width={40} height={40} />
      )}

      {/* Celular */}
      <nav className={`fixed top-[0px] z-40 flex h-[100vh] w-full flex-col items-center justify-center space-y-5 bg-white duration-1000 md:hidden ${ nav ? 'right-[0px]' : 'right-[-100vw]' } `}>
        <Link href={'/'} className="font-medium text-green-500">HOME</Link>
        <Link href={'/cat'} className="font-medium text-green-500">CAT</Link>
        <Link href={'/dog'} className="font-medium text-green-500">DOG</Link>
        <Link href={'/cadastro'} className="font-medium text-green-500">CADASTRO</Link>
      </nav>
    </header>
  )
}
