import { useState } from "react"


export const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [check, setCheck] = useState(false)

  const pegarUsuario = (event) => {
    setUsuario(event.target.value);
  };

  const pegarSenha = (event) => {
    setSenha(event.target.value);
  };

  const pegarCheck = () => {
    if (check == false) {
      setCheck(true)
      console.log('Salvar dados', check)
    }
    else {
      setCheck(false)
      console.log('Não salvar dados', check)
    }
  }

  const enviar = (event) => {
    event.preventDefault();
    if (usuario == '' || senha == '') {
      console.log('erro')
    }
    else {
      console.log('entrei')
    }
    //axios
  };

  console.log(usuario, senha)
  // localStorage.setItem("chave", dado)     salvar
  // localStorage.getItem("chave", dado)     resgatar
  // localStorage.removeItem("chave", dado)  remover

  return (
    <div className="Login">
      <h1>Bem Vindo!</h1>
      <p>Por favor, digite o seu usuario e senha</p>

      <form onSubmit={enviar}>
        <label className="inputs">
          <input type="text" placeholder="Usuario" value={usuario} onChange={pegarUsuario} />
          <input type="password" placeholder="Senha" value={senha} onChange={pegarSenha} />
        </label>
        <label className="check">
          <input type="checkbox" name="" id="" onClick={pegarCheck}/>
          <span>Lembrar</span>
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}