import Card from "../cards";

export default function List({ listTransactions, setListTransactions }) {
  function TransactionRemove(transactionNone) {
    const filtro = listTransactions.filter(
      (transaction) => transaction !== transactionNone
    );
    setListTransactions(filtro);
  }
  const newList = listTransactions.map((transaction, index) => (
    <Card
      transaction={transaction}
      key={index}
      TransactionRemove={TransactionRemove}
    />
  ));

  return <div>{newList}</div>;
}
