import axios from 'axios'

export const AtualizarUsers = () => {

  const AtualizarPag = () => {
    Atualizar()
    // GetUsers()
  }

  const Atualizar = async () => {
    try {
      await axios.put(`http://localhost:3333/users/${''}`)
    } catch (erro) {
      console.error('Algo deu errado', erro)
    }
  }

  return (
    <button className="rounded bg-slate-600 px-2 py-1 text-white" onClick={AtualizarPag}>
      Atualizar
    </button>
  )
}
