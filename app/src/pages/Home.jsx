import { useEffect, useState } from 'react';
import axios from 'axios'
import { Card } from '../components/Card';
import '../assets/home.css'


export const Home = () => {

  return (
    <div className="Home">
      <div>
        <input type="text" placeholder="Pesquisar usuarios" />
      </div>

      <div >
        <Card />
      </div>
    </div>
  )
}

