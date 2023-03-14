import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cat } from './pages/Cat'
import { Dog } from './pages/Dog'
import { Cadastro } from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
    
      {
        path: "/cat",
        element: <Cat/>,
      },
    
      {
        path: "/dog",
        element: <Dog/>,
      },
    
      {
        path: "/cadastro",
        element: <Cadastro/>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rotas}/>
  </React.StrictMode>
);
