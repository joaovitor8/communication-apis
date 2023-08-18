import { Pesquisar } from './Types'

export const SearchUsers = ({ filterUsers }: Pesquisar) => {
  return (
    <div>
      <input type="text" className="w-96 px-10 py-2" onChange={(e) => filterUsers(e.target.value)}/>
    </div>
  )
}
