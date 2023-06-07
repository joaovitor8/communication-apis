/* eslint-disable @next/next/no-img-element */

import { RandomUserApi } from "./Pagination"

export const Users = ({currentItens}: any) => {
  return (
    <div className="flex flex-wrap justify-center">
      {currentItens.map((itens: RandomUserApi, key: number) => (
        <div key={key} className="mx-1 my-1 h-60 w-96 bg-slate-400 px-3 py-3">
          <img src={itens.picture} alt="imagem do usuario" />
          <div>
            <p><span className="font-bold">User: </span>{itens.username.toLocaleLowerCase()}</p>
            <p><span className="font-bold">Nome: </span>{itens.name.toLocaleLowerCase()}</p>
            <p><span className="font-bold">Email: </span>{itens.email.toLocaleLowerCase()}</p>
            <p><span className="font-bold">Idade: </span>{itens.age}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
