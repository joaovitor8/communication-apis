import fastify from 'Fastify'

const app = fastify()

app.post('/user', async () => {})

app.get('/user', async () => {})

app.get('/user/:id', async () => {})

app.put('/user/:id', async () => {})

app.delete('/user/:id', async () => {})

app.listen({
  port: 3333,
}).then(() => {console.log('Servidor rodando na porta: http://localhost:3333')})
