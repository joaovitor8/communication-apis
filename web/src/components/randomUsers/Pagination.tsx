'use client'

import { useEffect, useState } from 'react'
import { Users } from './Users'
import { SearchUsers } from './SearchUsers'
import { RandomUserApi } from '../Types'
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

  const pegarRandomUsers = () => {
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
    pegarRandomUsers()
  }, [])

  const filtrarUsers = (valor: string) => {
    if (valor === '') {
      pegarRandomUsers()
    } else {
      const filtrarNick = dados.filter((d) => d.username.includes(valor))
      const filtrarNome = dados.filter((d) => d.name.includes(valor))
      const filtrarEmail = dados.filter((d) => d.email.includes(valor))
      setDados(filtrarNick)
    }
  }

  return (
    <>
      <div className="space-x-1">
        {Array.from(Array(paginas), (item, index) => {
          return (
            <button key={index} value={index} className="h-10 w-10 bg-green-500" onClick={(e) => setPaginaVisivel(Number(e.currentTarget.value))}>{index + 1}</button>
          )
        })}
      </div>

      <SearchUsers filtrarUsers={filtrarUsers} />

      <Users currentItens={currentItens} />
    </>
  )
}
