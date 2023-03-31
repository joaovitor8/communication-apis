//Chamando o metodo HTTP
const http = require('http')


//Criando um servidor simples
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World, Meu primeiro servidor!.');
}).listen(8888, () => console.log("Servidor rodando na URL: http://localhost:8888"))
