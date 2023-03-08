import { Link } from 'react-router-dom'
import '../assets/naveg.css'


export const Naveg = () => {
  return (
    <div className="Naveg">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cat">Cat</Link>
        <Link to="/dog">Dog</Link>
        <Link to="/cadastro">Cadastro</Link>
      </nav>
    </div>
  )
}
