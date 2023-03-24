import { Link, useNavigate } from 'react-router-dom'
import '../assets/navBar.css'


export const NavBar = () => {
  const navigate = useNavigate()
  
  const Remover = () => {
    localStorage.removeItem("chaveUsuario")
    localStorage.removeItem("chaveSenha")
    return navigate("/login")
  }

  return (
    <div className="NavBar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cat">Cat</Link>
        <Link to="/dog">Dog</Link>
        <Link to="/cadastro">Cadastro</Link>
        <button onClick={Remover}>Sair</button>
      </nav>
    </div>
  )
}
