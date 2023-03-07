import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/naveg.css'

export const Naveg = () => {
  const [viInvi, setViInvi] = useState('flex')

  const deslogarUsuario = () => {
    localStorage.removeItem("chaveUsuario")
    localStorage.removeItem("chaveSenha")

    if (viInvi == 'flex') {
      setViInvi('none')
    }
    else {
      setViInvi('flex')
    }
  }

  return (
    <div className="Naveg" style={{display: viInvi}}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cat">Cat</Link>
        <Link to="/dog">Dog</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/login" onClick={deslogarUsuario}>sair</Link>
      </nav>
    </div>
  )
}
