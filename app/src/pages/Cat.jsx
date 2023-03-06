import { useState } from "react";
import axios from "axios"
import '../assets/cat.css'


export const Cat = () => {
  const [gatoTxt, setGatoTxt] = useState(0)
  const [gatoImg, setGatoImg] = useState(0)

  const transferirImg = () => {
    setGatoImg(gatoTxt)
  }

  return (
    <div className="Cat">
      <div className="pesquisaGatos">
        <input type="text" placeholder="Pesquisar Gatos" onChange={(e => setGatoTxt(e.target.value))}/>
        <button onClick={transferirImg}>Buscar</button>
      </div>
      <img src={`https://http.cat/${gatoImg}`} alt="Foto de Gato"/>
    </div>
  )
}
