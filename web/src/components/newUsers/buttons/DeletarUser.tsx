// import { UsersDB } from '@/components/Types'
// import axios from 'axios'

export const DeletarUser = (props: { id: number }) => {
  const Deletar = async () => {
    try {
      // const response = await axios.delete(`http://localhost:3333/users/${id}`)
      // console.log(response.data)
      console.log(props.id)
    } catch (erro) {
      console.error('Algo deu errado', erro)
    }
  }

  return <button onClick={Deletar}>Deletar</button>
}
