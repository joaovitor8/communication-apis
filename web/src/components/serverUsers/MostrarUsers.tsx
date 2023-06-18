'use client'

import { useEffect, useState } from 'react'
import { AtualizarUsers, DeletarUser } from './Buttons'
import { SearchUsers } from '../SearchUsers'
import { UsersDB } from '../Types'
import axios from 'axios'

export const MostrarUsers = () => {
  const [users, setUsers] = useState<UsersDB[]>([])

  useEffect(() => {
    getUsersServer()
  }, [])

  const getUsersServer = async () => {
    try {
      const response = await axios.get('http://localhost:3333/users')
      setUsers(response.data)
    } catch (erro) {
      console.error('Algo deu errado', erro)
    }
  }

  const filterUsers = (valor: string) => {
    if (valor === '') {
      getUsersServer()
    } else {
      const filtrarNome = users.filter((d) => d.nome.includes(valor))
      setUsers(filtrarNome)
    }
  }

  return (
    <div className="flex w-full flex-col items-center space-y-5 bg-slate-200 px-5 py-5">
      <div>
        <SearchUsers filterUsers={filterUsers} />
      </div>

      <div className="flex w-full flex-wrap items-start">
        {users.map((user, index) => (
          <div
            key={index}
            className="m-1 flex h-44 w-60 flex-col justify-between bg-slate-400 px-1 py-1"
          >
            <div>
              <p>Nome: {user.nome}</p>
              <p>Email: {user.email}</p>
              <p>Telefone: {user.tel}</p>
              <p>CPF: {user.cpf}</p>
              <p>Endereço: {user.end}</p>
            </div>

            <div className="flex w-full justify-end space-x-5">
              <AtualizarUsers id={user._id} />
              <DeletarUser id={user._id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
