const fastify = require("fastify")()


fastify.register(require("@fastify/mongodb"), {
  forceClose: true,
  url: "mongodb://localhost:27017/teste"
})

//-----------------------------------------------

// Criar um usuário
fastify.post('/users', async () => {})

// Pegar todos os usuários
fastify.get('/users', async () => {
  fastify.mongo.client.db('mydb').collection('users')
  //const users = fastify.mongo.db.collection('users')
})

// Pegar um usuário
fastify.get('/users/:id', async () => {})

// Atualizar um usuário
fastify.put('/users/:id', async () => {})

// Deletar um usuário
fastify.delete('/users/:id', async () => {})

//-----------------------------------------------

// Iniciar Servidor
fastify.listen({ port: 3333 }).then(() => { console.log('Servidor rodando na porta: http://localhost:3333') })
