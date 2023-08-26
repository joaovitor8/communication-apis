import { Pesquisar } from './Types'

export const InputPesquisar = ({ pesquisar }: Pesquisar) => {
  return (
    <div>
      <input type="text" className="w-96 px-10 py-2" onChange={(e) => pesquisar(e.target.value)}/>
    </div>
  )
}
