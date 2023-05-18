const fastify = require('fastify')
const fastifyMongoDB = require('fastify-mongodb');

const app = fastify()
const dataBase = fastifyMongoDB

app.register(dataBase, {
  forceClose: true, // Fecha a conexão quando o aplicativo é fechado
  url: "mongodb+srv://joaoezeki:27102001@users.cmsbndc.mongodb.net/?retryWrites=true&w=majority" // URL de conexão do MongoDB
});


// Criar
app.post('/user', async () => {})

// Pegar
app.get('/user', async (request, reply) => {
  const collection = app.mongo.db.collection('listingsAndReviews');
  const result = await collection.find().toArray();

  reply.send(result);
});

// Pegar um
app.get('/user/:id', async () => {})

// Atualizar um
app.put('/user/:id', async () => {})

// Deletar um
app.delete('/user/:id', async () => {})

app.listen({
  port: 3333,
}).then(() => {console.log('Servidor rodando na porta: http://localhost:3333')})
