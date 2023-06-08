import fastify from 'fastify'

const app = fastify()

// Banco de Dados improvisado
const DB: any[] = []

// Criar um usuário
app.post('/user', async (request: any, reply: any) => {
  const user = request.body
  DB.push(user)
  reply.send(user)
})

// Pegar todos os usuários
app.get('/user', async (request: any, reply: any) => {
  reply.send(DB)
})

// Pegar um usuário
app.get('/user/:id', async (request: any, reply: any) => {})

// Atualizar um usuário
app.put('/user/:id', async (request: any, reply: any) => {})

// Deletar um usuário
app.delete('/user/:id', async (request: any, reply: any) => {})

// Iniciar Servidor
app.listen({
 port: 3333
}).then(() => { console.log('Servidor rodando na porta: http://localhost:3333')})
