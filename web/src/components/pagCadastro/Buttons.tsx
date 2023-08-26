import axios from 'axios'

export const AtualizarUsers = () => {
  return (
    <button className="rounded bg-slate-600 px-2 py-1 text-white">Atualizar</button>
  )
}

export const DeletarUser = ({ id }: any) => {
  const Deletar = async () => {
    try {
      await axios.delete(`http://localhost:3333/users/${id}`)
    } catch (erro) {
      console.error('Algo deu errado', erro)
    }
  }

  return (
    <button className="rounded bg-slate-600 px-2 py-1 text-white" onClick={Deletar}>Deletar</button>
  )
}
