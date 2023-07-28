// app.js
const fastify = require('fastify')()
const cors = require('@fastify/cors')
const configureDB = require('./configDB')
const configureRoutes = require('./rotas/users')

// Registrando a autorização
fastify.register(cors, {
  origin: '*',
  methods: ['POST', 'GET', 'DELETE'],
})

// Configurando o DB MongoDB
configureDB(fastify)

// Configurando as rotas
configureRoutes(fastify)

// Iniciar Servidor
fastify.listen({ port: 3333 }).then(() => {
  console.log('Servidor rodando na porta: http://localhost:3333')
})
