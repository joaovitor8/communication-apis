import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Cat } from './pages/Cat'
import { Dog } from './pages/Dog'
import { Naveg } from './components/Navegacao'
import './assets/App.css'


export default function App() {
  const [logar, setLogar] = useState(false)

  // const user = localStorage.getItem("chaveUsuario")
  // const senh = localStorage.getItem("chaveSenha")


  return (
    <div className="App">
      <Router>
        <Naveg/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cat' element={<Cat/>} />
          <Route path='/dog' element={<Dog/>} />
        </Routes>
      </Router>
    </div>
  )
}
