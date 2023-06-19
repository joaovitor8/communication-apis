# Descrição da aplicação

<p>Aplicação web (frontend e backend) capaz de realizar a comunicação com APIs distintas, além de um CRUD.</p>
<p>É um projeto simples mas deu muito trabalho pra mim hahah, se você esta vendo isso e puder e quiser dar um feedback eu agradeço</p>

## Desafio

<ul>
  <li>[❌] A página inicial da aplicação deve ser uma `Login Page`</li>
  <li>[❌] O usuário deve ser capaz de se autenticar utilizando o username `desafiosharenergy` e password `sh@r3n3rgy`, também, deve existir a possibilidade do usuário utilizar o `remember me` para realizar logins automáticos, sem a necessidade de digitar username e password após o primeiro acesso</li>
  <li>[✔] Após o Login, a página principal deve conter uma listagem de usuários gerada a partir da api [Random User Generator](https://randomuser.me/), a lista deve conter a foto do usuário, nome completo, email, username e idade. Além disso, os requests devem ser páginados, porém, é de critério do participante do desafio a quantidade de resultados a serem exibidos por página e variações para o mesmo. Também, deve haver uma search para buscar usuários por nome, email ou username</li>
  <li>[✔] Em uma segunda página, o usuário deve ser capaz de selecionar um status code http qualquer, e, após a seleção, deve ser retornada uma imagem da api [HTTP Cat](https://http.cat/) relacionada ao status escolhido, caso não exista tal imagem, deve ser retornada uma imagem de not found à critério de escolha do participante do desafio</li>
  <li>[✔] Em uma terceira página, deve haver um botão de refresh que, ao ser clicado, deve retornar uma imagem aleatória da api [Random Dog](https://random.dog/)</li>
  <li>[✔/❌] Em uma quarta página, deve haver uma lista de clientes, através da qual o usuário deve ser capaz de cadastrar novos clientes, visualizar informações de um cliente específico, atualizar um cliente e deletar clientes. O cadastro deve possuir nome, email, telefone, endereço e cpf.</li>
</ul>

## Requisitos da aplicação e de código [✔]

<ul>
  <li>[✔] Interface amigável, bonita e limpa</li>
  <li>[✔] Responsividade</li>
  <li>[✔] Clean Code</li>
</ul>

## Ferramentas e Stack a ser utilizado [✔]

<ul>
  <li>[✔] ReactJS para o frontend</li>
  <li>[✔] NodeJS (com ou sem frameworks)</li>
  <li>[✔] MongoDB</li>
  <li>[✔] HTML e CSS</li>
</ul>

# Como usar

<p>Passo a passo de como baixar e configurar o projeto</p>

<ol>
  <li>Instale a ferramenta do MongoDB, <a href="https://www.mongodb.com/try/download/community" target="_blank" >aqui</a> </li>
  <li>Após a instalação inicie o Banco de Dados na porta padrão</li>
  <li>Baixe o repositorio e estraia os arquivos</li>
  <li>Abra os arquivos (Web/Server) e instale as dependencias com: <code>npm install</code></li>
  <li>Apos a instalação inicie ambos (Web/Server) com: <code>npm run dev</code></li>
</ol>

# Materiais de estudo

<ul>
  <li>[Paginação](https://www.youtube.com/watch?v=YSlzQlEqTBg)</li>
  <li>[Sharenergy](https://www.sharenergy.com.br/)</li>
</ul>
