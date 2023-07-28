module.exports = function configureRoutes(fastify: any) {
  // Criar um usuário
  fastify.post('/users', async (request: any, reply: any) => {
    const collection = fastify.mongo.db.collection('users')
    const { nomeCompleto, email, telefone, cpf, endereco } = request.body
    await collection.insertOne({
      nome: nomeCompleto,
      email,
      tel: telefone,
      cpf,
      end: endereco,
    })
    reply.send({ message: 'Usuário adicionado com sucesso' })
  })

  // Pegar todos os usuários
  fastify.get('/users', async (request: any, reply: any) => {
    const collection = fastify.mongo.db.collection('users')
    const users = await collection.find().toArray()
    reply.send(users)
  })

  // Atualizar um usuário
  fastify.put('/users/:id', async (request: any, reply: any) => {
    const collection = fastify.mongo.db.collection('users')
    const id = request.params.id
    const updatedUser = request.body
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedUser },
    )
    if (result.modifiedCount === 0) {
      reply.status(404).send({ message: 'Usuário não encontrado' })
    } else {
      reply.send(updatedUser, { message: 'Usuário atualizado com sucesso' })
    }
  })

  // Deletar um usuário
  fastify.delete('/users/:id', async (request: any, reply: any) => {
    const collection = fastify.mongo.db.collection('users')
    const id = request.params.id
    const result = await collection.findOneAndDelete({ _id: new ObjectId(id) })
    if (!result.value) {
      reply.status(404).send({ message: 'Usuário não encontrado' })
    } else {
      reply.send(result.value, { message: 'Usuário deletado com sucesso' })
    }
  })
}
