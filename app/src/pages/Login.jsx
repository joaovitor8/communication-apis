import { useState } from "react"
import { useNavigate } from "react-router-dom";
import '../assets/login.css'


export const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [check, setCheck] = useState(false)
  const navigate = useNavigate()

  
  const pegarUsuario = (usuarioDigitado) => {
    setUsuario(usuarioDigitado.target.value);
  };

  const pegarSenha = (senhaDigitada) => {
    setSenha(senhaDigitada.target.value);
  };

  const pegarCheck = () => {
    if (check == false) {
      setCheck(true)
    }
  }


  const enviar = (event) => {
    event.preventDefault();
    if (usuario === '' || senha === '') {
      window.alert('Login invalido!')
    }
    else {
      if (check === true) {
        localStorage.setItem("chaveUsuario", usuario)
        localStorage.setItem("chaveSenha", senha)
      }
      return navigate("/")
    }
  };

  return (
    <div className="Login">
      <div>
        <h1>Bem Vindo!</h1>
        <p>Por favor, digite o seu usuario e senha</p>

        <form onSubmit={enviar}>
          <label className="inputs">
            <input type={"text"} placeholder="Usuario" value={usuario} autoComplete="username" onChange={pegarUsuario} />
            <input type={"password"} placeholder="Senha" value={senha} autoComplete="current-password" onChange={pegarSenha} />
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