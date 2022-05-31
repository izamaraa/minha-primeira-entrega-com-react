import "./style.css";

export default function TotalMoney({ listTransactions }) {
  const total = listTransactions.reduce(
    (valorAtaul, valorAnterior) => valorAtaul + Number(valorAnterior.value),
    0
  );
  return (
    <div className="totalMoney">
      <div className="campoValor">
        <h3>Valor total :</h3>

        <h3 className="valor">R$ {total}</h3>
      </div>
      <div className="descricaoValor">
        <div>
          <p>O valor se refere ao saldo !</p>
        </div>
      </div>
    </div>
  );
}
