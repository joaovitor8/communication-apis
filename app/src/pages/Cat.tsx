import { useState } from "react";
import '../assets/cat.css'


export const Cat = (): JSX.Element => {
  const [gatoTxt, setGatoTxt] = useState<string>('')
  const [gatoImg, setGatoImg] = useState<number>(0)

  const transferirImg = () => {
    let n = parseInt(gatoTxt)
    setGatoImg(n)
  }

  return (
    <div className="Cat">
      <div className="pesquisaGatos">
        <input type="text" placeholder="Pesquisar Gatos" onChange={(e => setGatoTxt(e.currentTarget.value))}/>
        <button onClick={transferirImg}>Buscar</button>
      </div>
      <img src={`https://http.cat/${gatoImg}`} alt="Foto de Gato"/>
    </div>
  )
}
