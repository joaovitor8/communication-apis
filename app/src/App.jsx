import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import './assets/App.css'


export default function App() {
  const [logado, setLogado] = useState(true)
  //const usuario = localStorage.getItem('chaveUsuario');
  //const senha = localStorage.getItem('chaveSenha');

  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
