import React, { useState } from 'react';
import '../assets/cadastro.css'


export const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cpf, setCpf] = useState('')
  const [mensagem, setMensagem] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    // Validação dos campos
    if (nome === '' || email === '' || telefone === '' || endereco === '' || cpf === '') {
      setMensagem('Por favor, preencha todos os campos.');
      return;
    }
    else {
      // Código para enviar o cadastro para o servidor aqui
      console.log('Dados enviados com sucesso!')
    }

    setMensagem('Cadastro realizado com sucesso!');
  }

  return (
    <div className='Cadastro'>
      <h1>Cadastro de Usuário</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
        </label>
        <label>
          E-mail:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Telefone:
          <input type="tel" value={telefone} onChange={(event) => setTelefone(event.target.value)}/>
        </label>
        <label>
          Endereço:
          <input type="text" value={endereco} onChange={(event) => setEndereco(event.target.value)}/>
        </label>
        <label>
          CPF:
          <input type='text' value={cpf} onChange={(event) => setCpf(event.target.value)}/>
        </label>

        <button type="submit">Cadastrar</button>

        {mensagem && <p>{mensagem}</p>}
      </form>

      <div>
        <h1>Usuarios Cadastrados</h1>
      </div>
    </div>
  );
}

export default Cadastro;
