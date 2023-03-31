//CRUD (Create, Read, Update, Delete) básico:
//POST - Inserir um dado
//GET - Buscar um ou mais dados
//PUT - Alterar um dado
//DELETE - Remover um dado

//Boby - Sempre que eu quiser enviar dados para minha aplicação

//Insomnia usado para fazer o CRUD

//-----------------------------------------------

const express = require('express') //Chamando o express
const { randomUUID } = require('crypto') //Pegando um ID
const app = express() //Simplificando o express para uso
app.use(express.json())

//"banco de dados"
const produtos = []

//-----------------------------------------------

//Inserir um dado
app.post("/produtos", (req, res) => {
  const { nome, preco } = req.body

  const produto = {
    nome,
    preco,
    id: randomUUID()
  }

  produtos.push(produto)
  return res.json(produto)
})


//Pegando todos os dados inserindos
app.get('/produtos', (req, res) => {
  return res.json(produtos)
})


//Pegando um dado por ID
app.get('/produtos/:id', (req, res) => {
  const { id } = req.params
  const produto = produtos.find(produto => produto.id === id)
  return res.json(produto)
})


//Alterando um dado (ID)
app.put('/produtos/:id', (req, res) => {
  const { id } = req.params
  const { nome, preco } = req.body

  const produtoIndex = produtos.findIndex(produto => produto.id === id)
  produtos[produtoIndex] = {
    ...produtos[produtoIndex],
    nome,
    preco
  }

  return res.json({messagem: 'Produto alterado com sucesso'})
})


//Removendo um dado (ID)
app.delete('/produtos/:id', (req, res) => {
  const { id } = req.params
  const produtoIndex = produtos.findIndex((produto) => produto.id === id)

  produtos.splice(produtoIndex, 1)

  return res.json({ menssagem: 'Produto removido com sucesso' })
})

//-----------------------------------------------

//Criando o servidor
app.listen(8888, () => console.log("Servidor rodando na URL: http://localhost:8888"))
