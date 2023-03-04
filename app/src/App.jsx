import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import './assets/App.css'


export default function App() {
  const [logar, setLogar] = useState(false)

  const user = localStorage.getItem("chaveUsuario")
  const senh = localStorage.getItem("chaveSenha")
  const logado = () => {
    if (user != '' && senh != '') {
      setLogar(true)
    }
    else {
      setLogar(false)
    }
  }

  logado

  console.log(user)
  console.log(senh)
  console.log(logar)


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  )
}
