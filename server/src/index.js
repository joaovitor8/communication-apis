const express = require('express')
const app = express()
const { randomUUID } = require('crypto')
app.use(express.json())

const usuarios = []

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.post('/api/users', (req, res) => {
  const { nome, email, telefone, endereco, cpf } = req.body;

  const usuario = {
    nome,
    email,
    telefone,
    endereco,
    cpf,
    id: randomUUID()
  }

  usuarios.push(usuario)
  return res.json(usuario)
});


app.get('/api/users', (req, res) => {
  return res.json(usuarios)
})


app.listen(8888, () => {console.log('Servidor rodando na porta http://localhost:8888')})
