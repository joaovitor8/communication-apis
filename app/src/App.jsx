import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import './assets/App.css'
import { useNavigate } from 'react-router-dom'


export default function App() {
  const [logado, setLogado] = useState(false)
  const navigate = useNavigate()

  let user = localStorage.getItem("chaveUsuario")
  let senh = localStorage.getItem("chaveSenha")


  useEffect(() => {
    pegarLogin()
    autenticarLogin()
  }, [])


  const pegarLogin = () => {
    if (user != null && senh != null) {
      setLogado(true)
    }
  }

  const autenticarLogin = () => {
    if (logado == false) {
      navigate('/login')
    }
  }

  console.log(logado, user, senh)

  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
