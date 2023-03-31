import { useState } from 'react';
import { CardCadastro } from '../components/CardCadastro';
import axios from 'axios';
import '../assets/cadastro.css'


export const Cadastro = (): JSX.Element => {
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('')
  const [endereco, setEndereco] = useState<string>('')
  const [cpf, setCpf] = useState<string>('')
  const [mensagem, setMensagem] = useState<string>('');


  const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (nome === '' || email === '' || telefone === '' || endereco === '' || cpf === '') {
      setMensagem('Por favor, preencha todos os campos.')
      return;
    }
    else {
      const user = { nome, email, telefone, endereco, cpf };
      axios.post('http://localhost:8888/api/users', user);
      setMensagem('Cadastro realizado com sucesso!')
    }
  }


  return (
    <div className='Cadastro'>
      <h1>Cadastro de Usuário</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(event) => setNome(event.currentTarget.value)} />
        </label>
        <label>
          E-mail:
          <input type="email" value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
        </label>
        <label>
          Telefone:
          <input type="tel" value={telefone} onChange={(event) => setTelefone(event.currentTarget.value)}/>
        </label>
        <label>
          Endereço:
          <input type="text" value={endereco} onChange={(event) => setEndereco(event.currentTarget.value)}/>
        </label>
        <label>
          CPF:
          <input type='text' value={cpf} onChange={(event) => setCpf(event.currentTarget.value)}/>
        </label>

        <button type="submit">Cadastrar</button>

        {mensagem && <p>{mensagem}</p>}
      </form>

      <div>
        <h1>Usuarios Cadastrados</h1>

        <CardCadastro />
      </div>
    </div>
  );
}


