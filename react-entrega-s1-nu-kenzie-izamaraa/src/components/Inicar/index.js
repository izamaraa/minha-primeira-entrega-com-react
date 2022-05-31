export const PrincipalPage = ({ setIsLoggedIn }) => {
  function Iniciar() {
    setIsLoggedIn(false);
  }
  return (
    <div>
      <button className="botaoTeste" onClick={Iniciar}>
        Inicio
      </button>
    </div>
  );
};
