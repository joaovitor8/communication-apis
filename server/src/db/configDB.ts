const { ObjectId } = require('mongodb')

module.exports = function confgDB(fastify: any) {

  fastify.register(require('@fastify/mongodb'), {
    forceClose: true,
    url: 'mongodb://127.0.0.1:27017/Communication-APIs_DB'
  })
  
}
