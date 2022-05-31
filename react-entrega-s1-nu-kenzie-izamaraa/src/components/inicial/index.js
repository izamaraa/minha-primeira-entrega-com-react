import "./style.css";
import NuKenziewhite from "../../images/NuKenziewhite.png";
import logo from "../../images/logo.png";
export const User = ({ setIsLoggedIn }) => {
  function logar() {
    setIsLoggedIn(true);
  }

  return (
    <div className="formulario">
      <form onSubmit={(event) => logar(event.preventDefault())}>
        <img className="imagemInicio" src={NuKenziewhite} alt="NuKenziewhite" />
        <h1>Centralize o controle das suas finanças</h1>
        <p>De forma rapida e segura</p>
        <button>Iniciar</button>
      </form>
      <img className="imagem" src={logo} alt="logo" />
    </div>
  );
};
