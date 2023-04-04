import { useState, useEffect } from 'react';
import axios from "axios"
import '../assets/cardCadastro.css'


interface UserApi {
  nome: string,
  email: string,
  telefone: string,
  endereco: string,
  cpf: string,
  id: string
}

type Atualizar = {
  atualizarCadastros: boolean,
}


export const CardCadastro = ({ atualizarCadastros}: Atualizar): JSX.Element => {
  const [users, setUsers] = useState<UserApi[]>([])

  useEffect(() => {
    PegarApi()
  },[atualizarCadastros])

  const PegarApi = () => {
    axios.get('http://localhost:8888/api/users')
      .then(res => setUsers(res.data))
  }


  const excluirUsuario = (id: string) => {
    axios.delete(`http://localhost:8888/api/users/${id}`)
  }


  return (
    <>
      {users.map((user) => (
        <div key={user.id} className='CardCadastro'>
          <p>Nome: {user.nome}</p>
          <p>Email: {user.email}</p>
          <p>Telefone: {user.telefone}</p>
          <p>Endereço: {user.endereco}</p>
          <p>CPF: {user.cpf}</p>
          <div className='btns'>
            <button onClick={() => excluirUsuario(user.id)}>Excluir</button>
            <button>Modificar</button>
          </div>
        </div>
      ))}
    </>
  )
}