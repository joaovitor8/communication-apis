# Communication API

Aplicação web (frontend e backend) capaz de realizar a comunicação com APIs distintas, além de um CRUD.

É um projeto simples mas deu muito trabalho pra mim hahah, se você esta vendo isso puder e quiser dar um feedback eu agradeço!.


## 

<li>A página inicial da aplicação deve ser uma `Login Page`</li>
<li>O usuário deve ser capaz de se autenticar utilizando o username `desafiosharenergy` e password `sh@r3n3rgy`, também, deve existir a possibilidade do usuário utilizar o `remember me` para realizar logins automáticos, sem a necessidade de digitar username e password após o primeiro acesso</li>
<li>Após o Login, a página principal deve conter uma listagem de usuários gerada a partir da api [Random User Generator](https://randomuser.me/), a lista deve conter a foto do usuário, nome completo, email, username e idade. Além disso, os requests devem ser páginados, porém, é de critério do participante do desafio a quantidade de resultados a serem exibidos por página e variações para o mesmo. Também, deve haver uma search para buscar usuários por nome, email ou username</li>
<li>Em uma segunda página, o usuário deve ser capaz de selecionar um status code http qualquer, e, após a seleção, deve ser retornada uma imagem da api [HTTP Cat](https://http.cat/) relacionada ao status escolhido, caso não exista tal imagem, deve ser retornada uma imagem de not found à critério de escolha do participante do desafio</li>
<li>Em uma terceira página, deve haver um botão de refresh que, ao ser clicado, deve retornar uma imagem aleatória da api [Random Dog](https://random.dog/)</li>
<li>Em uma quarta página, deve haver uma lista de clientes, através da qual o usuário deve ser capaz de cadastrar novos clientes, visualizar informações de um cliente específico, atualizar um cliente e deletar clientes. O cadastro deve possuir nome, email, telefone, endereço e cpf</li>


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/joaovitor8/communication-apis
```

Entre no diretório do projeto

```bash
  cd communication-apis
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Stack utilizada

**Front-end:** NextJS, ReactJS, TailwindCSS

**Back-end:** Node, Fastify


## Licença

[MIT](https://choosealicense.com/licenses/mit/)

