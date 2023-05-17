import fastify from 'Fastify'

const app = fastify()

app.post('/users', async () => {})

app.get('/users', async () => {})

app.put('/users', async () => {})

app.delete('/users', async () => {})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Servidor rodando na porta: http://localhost:3333')
  })
