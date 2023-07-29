
module.exports = function rotasLogin(fastify: any) {

  fastify.post('/login', async (request: any, reply: any) => {
    const collection = fastify.mongo.db.collection('login')
    const { username, password } = request.body

    // Verificar se os campos obrigatórios foram fornecidos
    if (!username || !password) {
      reply.code(400).send({ error: 'Nome de usuário e senha são obrigatórios' })
      return
    }

    try {  // Consultar o banco de dados para verificar a existência do usuário
      const user = await collection.findOne({ username })

      if (!user) {  // O usuário não foi encontrado
        reply.send({ error: 'Usuário não encontrado' })
        return
      }

      // Aqui, você pode verificar a senha do usuário para autenticá-lo.
      // Por exemplo, você pode comparar a senha fornecida com a senha armazenada no banco de dados,
      // mas é importante garantir que a senha seja armazenada com criptografia (hashing).

      reply.send({ message: 'Login bem-sucedido' }) // Se o usuário e a senha estiverem corretos, envie uma resposta de sucesso.

    } catch (error) {  // Em caso de erro no servidor ou no banco de dados.
      console.error('Erro ao verificar o usuário no banco de dados:', error)
      reply.code(500).send({ error: 'Erro no servidor' })
    }

  })
  
}
