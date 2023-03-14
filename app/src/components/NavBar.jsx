import { Link } from 'react-router-dom'
import '../assets/navBar.css'


export const NavBar = () => {
  return (
    <div className="NavBar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cat">Cat</Link>
        <Link to="/dog">Dog</Link>
        <Link to="/cadastro">Cadastro</Link>
      </nav>
    </div>
  )
}
