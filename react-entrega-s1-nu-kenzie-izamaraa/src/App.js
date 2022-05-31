import NuKenzieBlack from "./images/NuKenzieblack.png";
import "./App.css";
import { PrincipalPage } from "./components/Inicar";
import { User } from "./components/inicial";
import TotalMoney from "./components/totalMoney";
import Form from "./components/form";
import List from "./components/list";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //botao
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="app">
      {isLoggedIn ? (
        <div className="app-page">
          <header className="header">
            <img src={NuKenzieBlack} alt="NuKenzieBlack" />
            <PrincipalPage setIsLoggedIn={setIsLoggedIn} />
          </header>
          <div className="container">
            <div className=" addLista">
              <div className="addForm">
                <Form
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                />
              </div>
              <div className="totalMoney">
                <TotalMoney listTransactions={listTransactions} />
              </div>
            </div>
            <div className="list">
              <div className="filtro">
                <h3>Resumo financeiro</h3>
                <div className="p">
                  <p className="resumoFinanceiro">Todos</p>
                  <p className="resumo">Entradas</p>
                  <p className="resumo">Despesas</p>
                </div>
              </div>
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            </div>
          </div>
        </div>
      ) : (
        <User setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
