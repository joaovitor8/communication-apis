'use client'

import { useState } from 'react'
import Link from 'next/link'

export const Header = () => {
  const [nav, setNav] = useState(false)

  const showNav = () => {
    setNav(!nav)
  }

  return (
    <header className="flex items-center justify-around border-2 py-[25px]">
      <h1 className="text-3xl font-bold text-green-500">
        <Link href={'/'}>&lt;LOGO/&gt;</Link>
      </h1>

      <nav className="hidden gap-5 md:flex">
        <ul className="flex w-full justify-evenly">
          <li className="font-medium text-green-500">
            <Link href={'/'}>HOME</Link>
          </li>
          <li className="font-medium text-green-500">
            <Link href={'/cat'}>CAT</Link>
          </li>
          <li className="font-medium text-green-500">
            <Link href={'/dog'}>DOG</Link>
          </li>
          <li className="font-medium text-green-500">
            <Link href={'/cadastro'}>CADASTRO</Link>
          </li>
        </ul>
      </nav>

      {nav ? (
        // close button
        <p
          className="fixed right-[30px] z-50 text-3xl md:hidden"
          onClick={showNav}
        >
          X
        </p>
      ) : (
        <p className="text-3xl md:hidden" onClick={showNav}>
          A
        </p>
      )}

      <nav
        className={`fixed top-[0px] z-40 flex h-[100vh] w-full flex-col items-center justify-around bg-white duration-1000 md:hidden ${
          nav ? 'right-[0px]' : 'right-[-100vw]'
        } `}
      >
        <ul className="flex w-full justify-evenly">
          <li className="font-medium text-green-500">
            <Link href={'/'}>HOME</Link>
          </li>
          <li className="font-medium text-green-500">
            <Link href={'/cat'}>CAT</Link>
          </li>
          <li className="font-medium text-green-500">
            <Link href={'/dog'}>DOG</Link>
          </li>
          <li className="font-medium text-green-500">
            <Link href={'/cadastro'}>CADASTRO</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
