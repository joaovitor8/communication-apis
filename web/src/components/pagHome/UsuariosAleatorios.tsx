'use client'

import { useEffect, useState } from 'react'
import { InputPesquisar } from '../InputPesquisar'
import { UsuariosAleatoriosCard } from './UsuariosAleatoriosCard'
import { RandomUserApi, DataUser } from '../Types'
import axios from 'axios'

export const UsuariosAleatorios = () => {
  const [dados, setDados] = useState<RandomUserApi[]>([])
  const [itensPorPagina, setItensPorPagina] = useState<number>(15)
  const [paginaVisivel, setPaginaVisivel] = useState<number>(0)

  const paginas = Math.ceil(dados.length / itensPorPagina)
  const indiceInicial = paginaVisivel * itensPorPagina
  const indiceFinal = indiceInicial + itensPorPagina
  const usuariosPorPagina = dados.slice(indiceInicial, indiceFinal)

  const pegarUsuariosAleatorios = () => {
    axios.get('https://randomuser.me/api/?results=150')
      .then((response) => {
        const data = response.data.results
        const userList: RandomUserApi[] = data.map((user: DataUser) => ({
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
    pegarUsuariosAleatorios()
  }, [])

  const PesquisarUsuariosAPI = (valor: string) => {
    if (valor === '') {
      pegarUsuariosAleatorios()
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

      <InputPesquisar pesquisar={PesquisarUsuariosAPI} />

      <UsuariosAleatoriosCard usuariosPorPagina={usuariosPorPagina} />
    </>
  )
}
