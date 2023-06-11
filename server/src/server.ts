const fastify = require("fastify")() // Instanciando o fastify

//Registando o DB mongoDB
fastify.register(require("@fastify/mongodb"), {
  forceClose: true,
  url: "mongodb://127.0.0.1:27017/teste"
})

//-----------------------------------------------

// Criar um usuário
fastify.post('/users', async (request: any, reply: any) => {
  const collection = fastify.mongo.db.collection('users') // Estou no DB de usuarios
  const { nomeCompleto, email, telefone, cpf, endereco } = request.body // Peguei os dados fornecidos do corpo
  await collection.insertOne({ // Estou incerindo os dados fornecidos no DB usuarios
    nome: nomeCompleto,
    email: email,
    tel: telefone,
    cpf: cpf,
    end: endereco
  })
  reply.send({  message: 'Usuário adicionado com sucesso' })
})

// Pegar todos os usuários
fastify.get('/users', async (request: any, reply: any) => {
  const collection = fastify.mongo.db.collection('users') // Estou no DB de usuarios
  const users = await collection.find().toArray() // Estou estornando todos os usuarios
  reply.send(users)
})

// Pegar um usuário
fastify.get('/users/:id', async (request: any, reply: any) => {
  const collection = fastify.mongo.db.collection('users') // Estou no DB de usuarios
  const id = request.params.ObjectId
  const user = await collection.findOne( id )
  if (!user) {
    reply.status(404).send({ message: 'Usuário não encontrado' })
  } else {
    reply.send(user)
  }
})

// Atualizar um usuário
fastify.put('/users/:id', async (request: any, reply: any) => {
  const collection = fastify.mongo.db.collection('users')
  const id = request.params._id
  const updatedUser = request.body
  const result = await collection.updateOne({ id }, { $set: updatedUser })
  if (result.modifiedCount === 0) {
    reply.status(404).send({ message: 'Usuário não encontrado' })
  } else {
    reply.send(updatedUser, { message: 'Usuário atualizado com sucesso' })
  }
})

// Deletar um usuário
fastify.delete('/users/:id', async (request: any, reply: any) => {
  const collection = fastify.mongo.db.collection('users')
  const id = request.params._id
  const result = await collection.findOneAndDelete({ id })
  if (!result.value) {
    reply.status(404).send({ message: 'Usuário não encontrado' })
  } else {
    reply.send(result.value, { message: 'Usuário deletado com sucesso' })
  }
})

//-----------------------------------------------

// Iniciar Servidor
fastify.listen({ port: 3333 }).then(() => { console.log('Servidor rodando na porta: http://localhost:3333') })
