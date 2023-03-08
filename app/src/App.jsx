import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Naveg } from './components/Navegacao'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Cat } from './pages/Cat'
import { Dog } from './pages/Dog'
import { Cadastro } from './pages/Cadastro'
import './assets/App.css'


export default function App() {
  //const user = localStorage.getItem("chaveUsuario")
  //const senh = localStorage.getItem("chaveSenha")

  return (
    <div className="App">
      <Router >
        {/* <Naveg/> */}

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>

          {/* <Route path='/cat' element={<Cat/>}/>
          <Route path='/dog' element={<Dog/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/> */}
        </Routes>
      </Router>
    </div>
  )
}
