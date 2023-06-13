import { Pesquisar } from '../Types'

export const SearchUsers = ({ filtrarUsers }: Pesquisar) => {
  return (
    <div>
      <input type="text" className="w-96 px-10 py-2" onChange={(e) => filtrarUsers(e.target.value.toLocaleLowerCase())}/>
    </div>
  )
}
