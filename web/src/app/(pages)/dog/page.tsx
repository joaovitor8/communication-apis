'use client'

import { useEffect, useState } from "react"
import axios from 'axios'


export default function Dog() {
  const [dogs, setDogs] = useState<string>('')

  const Buscar = () => {}

  useEffect(() => {
    axios.get('https://random.dog/woof')
    .then(res => console.log(res.data))
  }, [])

  return (
    <div className="flex h-screen flex-col items-center space-y-3">
      <div className="flex h-24 w-4/5 items-center justify-center space-x-3 bg-slate-400">
        <button className="rounded-sm bg-green-500 px-10 py-3 uppercase" onClick={Buscar}>Buscar</button>
      </div>
      <div className="h-80 w-4/5 bg-sky-400 "></div>
    </div>
  )
}
