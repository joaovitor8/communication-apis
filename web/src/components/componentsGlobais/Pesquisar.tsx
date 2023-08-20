import { PesquisarUsers } from './Types'

export const Pesquisar = ({ pesquisarUsuarios }: PesquisarUsers) => {
  return (
    <div>
      <input type="text" className="w-96 px-10 py-2" onChange={(e) => pesquisarUsuarios(e.target.value)}/>
    </div>
  )
}
