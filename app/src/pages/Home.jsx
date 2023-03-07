import { useState } from 'react';
import { Card } from '../components/Card';
import '../assets/home.css'


export const Home = () => {
  return (
    <div className="Home">
      <div className='procurarUsers'>
        <input type="text" placeholder="Pesquisar usuarios" onChange={(e) => console.log(e.target.value)}/>
      </div>

      <div className='ramdomUsers'>
        <Card />
      </div>
    </div>
  )
}

