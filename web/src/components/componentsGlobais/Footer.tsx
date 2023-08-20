/* eslint-disable @next/next/no-img-element */

export const Footer = () => {
  return (
    <footer className="mt-5 flex h-40 items-center justify-around bg-zinc-900 text-white">
      <div>
        <p className="mb-2">Feito por: João Vitor</p>
        <p className="mb-2">Contato: joaoezeki@gmail.com</p>
        <p className="mb-2">Whatsapp: (18) 935000734</p>
      </div>

      <div>
        <h1 className="mb-3">Redes Sociais</h1>

        <ul className="flex space-x-5">
          <li>
            <a
              href="https://www.linkedin.com/in/joaovitorezequiel/"
              target={'_blank'}
              rel="noreferrer"
            >
              <img src="/linkedin.svg" alt="" className="h-10 w-10" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/joaovitor8"
              target={'_blank'}
              rel="noreferrer"
            >
              <img src="/github.svg" alt="" className="h-10 w-10" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
