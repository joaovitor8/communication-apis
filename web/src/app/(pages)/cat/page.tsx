/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'

export default function Cat() {
  const [numberCat, setNumberCat] = useState<string>('')
  const [imgCat, setImgCat] = useState<number>(0)

  const Buscar = () => {
    const n = parseInt(numberCat)
    setImgCat(n)
  }

  return (
    <div className="flex h-screen flex-col items-center space-y-3">
      <div className="flex h-24 w-4/5 items-center justify-center space-x-3 bg-slate-400">
        <input type="text" className="px-10 py-2" onChange={(e) => setNumberCat(e.currentTarget.value)}/>
        <button className="rounded-sm bg-green-500 px-4 py-2" onClick={Buscar}>Buscar</button>
      </div>
      <div className="flex h-96 w-4/5 items-center justify-center bg-sky-400">
        <img src={`https://http.cat/${imgCat}`} alt="Foto de Gato" className="h-80"/>
      </div>
    </div>
  )
}
