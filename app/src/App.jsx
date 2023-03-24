import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import './assets/App.css'


export default function App() {
  const [logado, setLogado] = useState()
  const navigate = useNavigate()

  let user = localStorage.getItem("chaveUsuario")
  let senh = localStorage.getItem("chaveSenha")

  useEffect(() => {
    pegarLogin()
  }, [])

  const pegarLogin = () => {
    if (user == null && senh == null) {
      setLogado(false)
    }
    else {
      setLogado(true)
    }
  }

  const autenticarLogin = () => {
    if (logado == false) {
      return navigate('/login')
    }
  }

  autenticarLogin()

  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
