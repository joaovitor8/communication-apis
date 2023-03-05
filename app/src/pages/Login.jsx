import { Link } from "react-router-dom"
import { useState } from "react"
import '../assets/login.css'


export const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [check, setCheck] = useState(false)

  //---------------------------------------------

  const pegarUsuario = (event) => {
    setUsuario(event.target.value);
  };

  const pegarSenha = (event) => {
    setSenha(event.target.value);
  };

  const pegarCheck = () => {
    if (check == false) {
      setCheck(true)
    }
    else {
      setCheck(false)
    }
  }

  //---------------------------------------------

  const enviar = (event) => {
    event.preventDefault();
    if (usuario == '' || senha == '') {
      window.alert('Login invalido!')
    }
    else {
      if (check == true) {
        localStorage.setItem("chaveUsuario", usuario)
        localStorage.setItem("chaveSenha", senha)
      }
    }

    //axios
  };

  //---------------------------------------------

  return (
    <div className="Login">
      <div>
        <h1>Bem Vindo!</h1>
        <p>Por favor, digite o seu usuario e senha</p>

        <form onSubmit={enviar}>
          <label className="inputs">
            <input type="text" placeholder="Usuario" value={usuario} onChange={pegarUsuario} />
            <input type="password" placeholder="Senha" value={senha} onChange={pegarSenha} />
          </label>
          <label className="check">
            <input type="checkbox" onClick={pegarCheck}/>
            <span>Lembrar</span>
          </label>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

//<Link to="/home">Home</Link>