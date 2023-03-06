import axios from 'axios'
import { useEffect, useState } from 'react'
import '../assets/card.css'


export const Card = () => {
  const [dados, setDados] = useState([]);
  const [itensPorPagina, setItensPorPagina] = useState(5);
  const [paginaVisivel, setPaginaVisivel] = useState(0)

  //Confg para a Paginação  -  Video: https://www.youtube.com/watch?v=YSlzQlEqTBg
  const paginas = Math.ceil(dados.length / itensPorPagina)
  const startIndex = paginaVisivel * itensPorPagina
  const endIndex = startIndex + itensPorPagina
  const currentItens = dados.slice(startIndex, endIndex)

  //Pegando a API
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=50')
      .then(response => {
        const data = response.data.results;
        const userList = data.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          username: user.login.username,
          age: user.dob.age,
          picture: user.picture.large
        }));
        setDados(userList);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Card">
      <div className='paginacao'>
        {Array.from(Array(paginas), (item, index) => {
          return <button value={index} onClick={(e) => setPaginaVisivel(Number(e.target.value))}>{index + 1}</button>
        })}
      </div>

      {currentItens.map(itens => (
        <div key={itens.username} className='itens'>
          <img src={itens.picture} alt="imagem do usuario" />
          <div className='ps'>
            <p className='p1'>Nome: {itens.name}</p>
            <p className='p2'>Email: {itens.email}</p>
            <p className='p3'>Idade: {itens.age}</p>
          </div>
        </div> 
      ))}
    </div>
  )
}
