const fastify = require('fastify')()
const cors = require('@fastify/cors')
const rotasUsers = require('./rotas/users')
const rotasLogin = require('./rotas/login')
const confgDB = require('./db/configDB')

// Registrando a autorização
fastify.register(cors, {
  origin: '*',
  methods: ['POST', 'GET', 'DELETE'],
})

// Configurando o DB MongoDB
confgDB(fastify)

// Configurando as rotas
rotasUsers(fastify)
rotasLogin(fastify)

// Iniciar Servidor
fastify.listen({ port: 3333 }).then(() => {
  console.log('Servidor rodando na porta: http://localhost:3333')
})
