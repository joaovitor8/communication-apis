import { useState } from "react"


export const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const pegarUsuario = (event) => {
    setUsuario(event.target.value);
  };

  const pegarSenha = (event) => {
    setSenha(event.target.value);
  };

  const enviar = (event) => {
    event.preventDefault();
    console.log('Enviei')
    //axios
  };

  return (
    <div className="Login">
      <form onSubmit={enviar}>
        <label>
          <span>Username</span>
          <input type="text" value={usuario} onChange={pegarUsuario} />
        </label>
        <label>
          <span>Password</span>
          <input type="password" value={senha} onChange={pegarSenha} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}