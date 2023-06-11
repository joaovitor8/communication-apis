'use client'

import { useState } from 'react'
import axios from 'axios'

export const CadastroUsers = () => {
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')
  const [endereco, setEndereco] = useState('')
  const [formData, setFormData] = useState({})

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    setFormData({ nomeCompleto, email, telefone, cpf, endereco })
    try {
      const response = await axios.post('http://localhost:3333/users', formData)
      console.log(response.data)
      console.log(formData)
    } catch (error) {
      console.error('Algo deu errado', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex h-80 w-4/5 flex-col items-center justify-center space-y-3">
      <div className="flex w-full items-center justify-center space-x-3">
        <p className="w-20">Nome</p>
        <input type="text" placeholder="Nome completo" onChange={e => setNomeCompleto(e.target.value)} className="w-1/2 rounded-md border-0 py-1.5 pl-5 shadow-sm ring-1 ring-gray-300 sm:text-sm sm:leading-6"/>
      </div>

      <div className="flex w-full items-center justify-center space-x-3">
        <p className="w-20">E-mail</p>
        <input type="text" placeholder="Seu melhor email" onChange={e => setEmail(e.target.value)} className="w-1/2 rounded-md border-0 py-1.5 pl-5 shadow-sm ring-1 ring-gray-300 sm:text-sm sm:leading-6"/>
      </div>

      <div className="flex w-full items-center justify-center space-x-3">
        <p className="w-20">Telefone</p>
        <input type="text" placeholder="Apenas numeros" onChange={e => setTelefone(e.target.value)} className="w-1/2 rounded-md border-0 py-1.5 pl-5 shadow-sm ring-1 ring-gray-300 sm:text-sm sm:leading-6"/>
      </div>

      <div className="flex w-full items-center justify-center space-x-3">
        <p className="w-20">CPF</p>
        <input type="text" placeholder="Apenas numeros" onChange={e => setCpf(e.target.value)} className="w-1/2 rounded-md border-0 py-1.5 pl-5 shadow-sm ring-1 ring-gray-300 sm:text-sm sm:leading-6"/>
      </div>

      <div className="flex w-full items-center justify-center space-x-3">
        <p className="w-20">Endereço</p>
        <input type="text" placeholder="Rua-n° / Cidade-Estado" onChange={e => setEndereco(e.target.value)} className="w-1/2 rounded-md border-0 py-1.5 pl-5 shadow-sm ring-1 ring-gray-300 sm:text-sm sm:leading-6"/>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cadastrar usuario</button>
      </div>
    </form>
  )
}
