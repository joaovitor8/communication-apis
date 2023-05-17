import Link from 'next/link'

export const Navbar = () => {
  return (
    <header className="mb-5 flex h-20 items-center justify-between border-b-2 px-5">
      <h1 className="text-3xl font-bold text-green-500">
        <Link href={'/'}>&lt;LOGO/&gt;</Link>
      </h1>

      <nav className="flex h-10 w-2/4 items-center">
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
