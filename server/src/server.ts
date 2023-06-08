const fastify = require('fastify')
const fastifyMongoDB = require('fastify-mongodb')

const app = fastify()

app.register(fastifyMongoDB, {
  forceClose: true,
  url: 'mongodb://mongo:FkAC63aMF8h0HKGgbZAq@containers-us-west-57.railway.app:7170',
})


// Criar um usuário
app.post('/user', async (request, reply) => {
  const collection = app.mongo.db.collection('users')
  const user = request.body
  const result = await collection.insertOne(user)
  reply.send(result.ops[0])
})

// Pegar todos os usuários
app.get('/user', async (request, reply) => {
  const collection = app.mongo.db.collection('users')
  const users = await collection.find().toArray()
  reply.send(users)
})

// Pegar um usuário
app.get('/user/:id', async (request, reply) => {
  const collection = app.mongo.db.collection('users')
  const id = request.params.id
  const user = await collection.findOne({ id })
  if (!user) {
    reply.status(404).send({ message: 'Usuário não encontrado' })
  } else {
    reply.send(user)
  }
})

// Atualizar um usuário
app.put('/user/:id', async (request, reply) => {
  const collection = app.mongo.db.collection('users')
  const id = request.params.id
  const updatedUser = request.body
  const result = await collection.updateOne({ id }, { $set: updatedUser })
  if (result.modifiedCount === 0) {
    reply.status(404).send({ message: 'Usuário não encontrado' })
  } else {
    reply.send(updatedUser)
  }
})

// Deletar um usuário
app.delete('/user/:id', async (request, reply) => {
  const collection = app.mongo.db.collection('users')
  const id = request.params.id
  const result = await collection.findOneAndDelete({ id })
  if (!result.value) {
    reply.status(404).send({ message: 'Usuário não encontrado' })
  } else {
    reply.send(result.value)
  }
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Servidor rodando na porta: http://localhost:3333')
  })
