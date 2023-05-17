export default function Cadastro() {
  return (
    <div className="flex flex-col items-center space-y-5">
      <form className="flex h-80 w-4/5 flex-col items-center justify-center space-y-3">
        <div className="flex w-full items-center justify-center space-x-3">
          <p className="w-20">Nome</p>
          <input type="text" placeholder="Nome completo" className="w-1/2 rounded-md border-0 py-1.5 pl-5 shadow-sm ring-1 ring-gray-300 sm:text-sm sm:leading-6"/>
        </div>

        <div className="flex w-full items-center justify-center space-x-3">
          <p className="w-20">E-mail</p>
          <input type="text" placeholder="Seu melhor email" className="w-1/2 rounded-md border-0 py-1.5 pl-5 shadow-sm ring-1 ring-gray-300 sm:text-sm sm:leading-6"/>
        </div>

        <div className="flex w-full items-center justify-center space-x-3">
          <p className="w-20">Telefone</p>
          <input type="text" placeholder="Apenas numeros" className="w-1/2 rounded-md border-0 py-1.5 pl-5 shadow-sm ring-1 ring-gray-300 sm:text-sm sm:leading-6"/>
        </div>

        <div className="flex w-full items-center justify-center space-x-3">
          <p className="w-20">CPF</p>
          <input type="text" placeholder="Apenas numeros" className="w-1/2 rounded-md border-0 py-1.5 pl-5 shadow-sm ring-1 ring-gray-300 sm:text-sm sm:leading-6"/>
        </div>

        <div className="flex w-full items-center justify-center space-x-3">
          <p className="w-20">Endereço</p>
          <input type="text" placeholder="Rua-n° / Cidade-Estado" className="w-1/2 rounded-md border-0 py-1.5 pl-5 shadow-sm ring-1 ring-gray-300 sm:text-sm sm:leading-6"/>
        </div>

        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cadastrar usuario</button>
        </div>
      </form>

      <div className="h-80 w-full bg-slate-600"></div>
    </div>
  )
}
