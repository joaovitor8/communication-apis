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


app.get('/api/users/:id', (req, res) => {
  const { id } = req.params
  const usuario = usuarios.find(u => u.id === id)
  return res.json(usuario)
})


app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params
  const usuarioIndex = usuarios.findIndex((u) => u.id === id)

  usuarios.splice(usuarioIndex, 1)
})


app.listen(8888, () => {console.log('Servidor rodando na porta http://localhost:8888')})
