/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

export const InputImg = () => {
  const [imageDog, setImageDog] = useState<string>('')

  useEffect(() => {
    randomDog()
  }, [])

  // Cachorro Aleatorio
  const randomDog = async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random')
    setImageDog(response.data.message)
  }

  const updatingImage = () => {
    randomDog()
  }

  return (
    <>
      <div className="flex h-24 w-4/5 items-center justify-center space-x-3 bg-slate-400">
        <button className="rounded-sm bg-green-500 px-10 py-3 uppercase" onClick={updatingImage}>Buscar</button>
      </div>
      <div className="flex h-96 w-4/5 items-center justify-center bg-sky-400">
        <img src={imageDog} alt="" className="h-80" />
      </div>
    </>
  )
}
