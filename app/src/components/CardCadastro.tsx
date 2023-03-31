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


export const CardCadastro = (): JSX.Element => {
  const [users, setUsers] = useState<UserApi[]>([])

  useEffect(() => {
    PegarApi()
  },[])

  const PegarApi = () => {
    axios.get('http://localhost:8888/api/users')
      .then(res => setUsers(res.data))
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
        </div>
      ))}
    </>
  )
}