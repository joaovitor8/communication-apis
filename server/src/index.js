const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Pagina principal')
})

app.get('/sobre', (req, res) => {
  res.send('Pagina sobre')
})

app.get('/blog', (req, res) => {
  res.send('Pagina blog')
})


app.listen(8888, () => {console.log('Servidor rodando na porta http://lacalhost:8888')})

