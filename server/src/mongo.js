const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://joaovitor8888:joaovitor8888@cluster0.xp9bwei.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Conectado!!!!')
  })
  .catch((err) => {
    console.log('ERRO ao conectar', err)
  })