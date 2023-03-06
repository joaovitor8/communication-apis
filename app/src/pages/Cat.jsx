import { useEffect, useState } from "react";
import axios from "axios"


export const Cat = () => {
  const [gatos, setGatos] = useState()

  //Pegando API dos Gatos  -  API: //https://http.cat/[status_code]
  useEffect(() => {
    axios.get('https://http.cat/500')
    .then(res => {setGatos(res.data)})
    .catch(error => {console.log(error)});
  }, [])

  console.log(gatos)

  return (
    <div className="Cat">
      <h1>Pagina dos gatos</h1>
      <input type="text"/>
      <button>Buscar</button>
      {/* <img src={gatos} alt="Foto de Gato"/> */}
    </div>
  )
}
