export const Footer = () => {
  return (
    <footer className="mt-5 flex h-40 items-center justify-around bg-zinc-900 text-white">
      <div>
        <p>Contato: joaoezeki@gmail.com</p>
      </div>

      <div>
        <h2 className="mb-3">Redes Sociais:</h2>

        <ul className="flex space-x-5">
          <li> <a href="https://www.linkedin.com/in/joaovitorezequiel/" target={'_blank'} rel="noreferrer">Linkedin</a> </li>
          <li> <a href="https://github.com/joaovitor8" target={'_blank'} rel="noreferrer">GitHub</a> </li>
          <li> <a href="https://twitter.com/Joao_Ezeki" target={'_blank'} rel="noreferrer">Twitter</a> </li>
        </ul>
      </div>
    </footer>
  )
}
