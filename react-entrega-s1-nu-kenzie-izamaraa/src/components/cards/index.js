import "./style.css";
export default function Card({ transaction, TransactionRemove }) {
  return (
    <div className="parte0">
      <div>
        <h3 className="descricao">{transaction.description}</h3>
        <p className="tipo">{transaction.type}</p>
      </div>
      <div className="parte1">
        <p className="transacao">R$ {transaction.value}</p>

        <button
          className="remover"
          onClick={() => TransactionRemove(transaction)}
        >
          Remover Item
        </button>
      </div>
    </div>
  );
}
