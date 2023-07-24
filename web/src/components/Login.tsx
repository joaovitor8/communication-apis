'use client'

import { useState } from 'react'
import axios from 'axios'

export const Login = () => {
  const [userAutent, setUserAutent] = useState('')
  const [passAutent, setPassAutent] = useState('')

  // const Autenticar = async (event: any) => {
  //   event.preventDefault()
  //   try {
  //     await axios.post('http://localhost:3333/login', { userAutent, passAutent })
  //   } catch (error) {
  //     console.error('Algo deu errado', error)
  //   }
  // }

  const Autenticar = () => {
    localStorage.setItem(userAutent, passAutent)
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 py-12">
      <div className="flex h-[450px] w-[600px] flex-col rounded-md border-x border-y">
        <div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">User Name</label>
              <div className="mt-2">
                <input id="text" name="text" type="text" autoComplete="text" required onChange={(e) => setUserAutent(e.target.value)} className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Senha</label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-green-600 hover:text-green-500">Forgot password?</a>
                </div>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" autoComplete="current-password" required onChange={(e) => setPassAutent(e.target.value)} className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <button type="submit" onClick={Autenticar} className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
