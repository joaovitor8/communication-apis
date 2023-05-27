const fastify = require('fastify')
const fastifyMongoDB = require('fastify-mongodb')

const app = fastify()

const users = []


// Criar
app.post('/user', async (request, reply) => {
  const user = request.body;
  users.push(user);
  reply.send(user);

})

// Pegar
app.get('/user', async (request, reply) => {
  reply.send(users)
})

// Pegar um
app.get('/user/:id', async () => {})

// Atualizar um
app.put('/user/:id', async () => {})

// Deletar um
app.delete('/user/:id', async () => {})

app.listen({
  port: 3333,
}).then(() => {console.log('Servidor rodando na porta: http://localhost:3333')})
