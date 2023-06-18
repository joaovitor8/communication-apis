import axios from 'axios'

export const AtualizarUsers = ({ id }: any) => {
  const Atualizar = async () => {
    try {
      await axios.put(`http://localhost:3333/users/${''}`)
    } catch (erro) {
      console.error('Algo deu errado', erro)
    }
  }

  return (
    <button
      className="rounded bg-slate-600 px-2 py-1 text-white"
      onClick={Atualizar}
    >
      Atualizar
    </button>
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
    <button
      className="rounded bg-slate-600 px-2 py-1 text-white"
      onClick={Deletar}
    >
      Deletar
    </button>
  )
}
