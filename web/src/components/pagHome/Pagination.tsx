'use client'

import { useEffect, useState } from 'react'
import { Users } from './Users'
import { SearchUsers } from '../componentsGlobais/SearchUsers'
import { RandomUserApi } from '../componentsGlobais/Types'
import axios from 'axios'

export const Pagination = () => {
  const [dados, setDados] = useState<RandomUserApi[]>([])
  const [itensPorPagina, setItensPorPagina] = useState<number>(15)
  const [paginaVisivel, setPaginaVisivel] = useState<number>(0)

  // Confg para a Paginação
  const paginas = Math.ceil(dados.length / itensPorPagina)
  const startIndex = paginaVisivel * itensPorPagina
  const endIndex = startIndex + itensPorPagina
  const currentItens = dados.slice(startIndex, endIndex)

  const getRandomUsersApi = () => {
    axios
      .get('https://randomuser.me/api/?results=150')
      .then((response) => {
        const data = response.data.results
        const userList: RandomUserApi[] = data.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          username: user.login.username,
          age: user.dob.age,
          picture: user.picture.large,
        }))
        setDados(userList)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getRandomUsersApi()
  }, [])

  const filterUsers = (valor: string) => {
    if (valor === '') {
      getRandomUsersApi()
    } else {
      const filtrar = dados.filter(
        (d) =>
          d.username.includes(valor) ||
          d.name.includes(valor) ||
          d.email.includes(valor),
      )
      setDados(filtrar)
    }
  }

  return (
    <>
      <div className="space-x-1">
        {Array.from(Array(paginas), (item, index) => {
          return (
            <button key={index} value={index} className="h-10 w-10 bg-green-500" onClick={(e) => setPaginaVisivel(Number(e.currentTarget.value))}>
              {index + 1}
            </button>
          )
        })}
      </div>

      <SearchUsers filterUsers={filterUsers} />

      <Users currentItens={currentItens} />
    </>
  )
}
