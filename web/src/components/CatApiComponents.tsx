/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { InputPesquisar } from './componentsGlobais/InputPesquisar'

export const CatApiComponents = () => {
  const [imgCat, setImgCat] = useState<number>(0)

  const PesquisarGatoStatus = (valor: string) => {
    if (valor === "") {
      setImgCat(0)
    }
    else {
      const n = parseInt(valor)
      setImgCat(n)
    }
  }

  return (
    <>
      <div className="flex h-24 w-4/5 items-center justify-center space-x-3 bg-slate-400">
        <InputPesquisar pesquisar={PesquisarGatoStatus}/>
      </div>
      <div className="flex h-96 w-4/5 items-center justify-center bg-sky-400">
        <img src={`https://http.cat/${imgCat}`} alt="Foto de Gato" className="h-80"/>
      </div>
    </>
  )
}
