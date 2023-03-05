import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import './assets/App.css'


export default function App() {
  // const [logar, setLogar] = useState(false)

  // const user = localStorage.getItem("chaveUsuario")
  // const senh = localStorage.getItem("chaveSenha")


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
