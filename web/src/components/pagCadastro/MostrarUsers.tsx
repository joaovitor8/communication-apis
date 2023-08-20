'use client'

import { useEffect, useState } from 'react'
import { AtualizarUsers, DeletarUser } from './Buttons'
import { Pesquisar } from '../componentsGlobais/Pesquisar'
import { UsersDB } from '../componentsGlobais/Types'
import axios from 'axios'

export const MostrarUsers = () => {
  const [users, setUsers] = useState<UsersDB[]>([])
  const [mostrarEsconder, setMostrarEsconder] = useState(false)

  useEffect(() => {
    getUsersServer()
  }, [users])

  const getUsersServer = async () => {
    try {
      const response = await axios.get('http://localhost:3333/users')
      setUsers(response.data)
    } catch (erro) {
      console.error('Algo deu errado', erro)
    }
  }

  const pesquisarUsuarios = (valor: string) => {
    if (valor === '') {
      getUsersServer()
    } else {
      const filtrarNome = users.filter((d) => d.nome.includes(valor))
      setUsers(filtrarNome)
    }
  }

  const MostrarEsconder = () => {
    if (mostrarEsconder === false) {
      setMostrarEsconder(true)
    } else {
      setMostrarEsconder(false)
    }
  }

  return (
    <div className="flex w-full flex-col items-center space-y-5 bg-slate-200 px-5 py-5">
      {mostrarEsconder ? (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-white bg-opacity-50">
          <div className="h-3/4 w-1/2 bg-red-600">
            <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
            <button className="rounded bg-slate-600 px-2 py-1 text-white" onClick={MostrarEsconder}>Sair</button>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div>
        <Pesquisar pesquisarUsuarios={pesquisarUsuarios} />
      </div>

      <div className="flex w-full flex-row flex-wrap justify-center">
        {users.map((user, index) => (
          <div key={index} className="m-1 flex h-52 w-96 flex-col justify-between bg-slate-400 px-1 py-1">
            <div>
              <p>Nome: {user.nome}</p>
              <p>Email: {user.email}</p>
              <p>Telefone: {user.tel}</p>
              <p>CPF: {user.cpf}</p>
              <p>Endereço: {user.end}</p>
            </div>

            <div className="flex w-full justify-end space-x-5">
              <AtualizarUsers MostrarEsconder={MostrarEsconder} />
              <DeletarUser id={user._id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
