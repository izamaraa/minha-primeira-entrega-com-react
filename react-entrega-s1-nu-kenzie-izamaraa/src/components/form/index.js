import "./style.css";
import { useForm } from "react-hook-form";

export default function Form({ listTransactions, setListTransactions }) {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          data.type !== "Entrada"
            ? (data.value = data.value - data.value * 2)
            : (data.value = data.value);

          setListTransactions([...listTransactions, data]);
        })}
      >
        <div className="dados">
          <div className="box-descricao">
            <label className="description">Descrição</label>
            <input
              className="campo"
              placeholder="Digite aqui sua descricao"
              {...register("description")}
            ></input>
            <span>Exemplo: compra de roupas.</span>
          </div>
          <div className="box-valores">
            <div>
              <label>Valor</label>
              <input
                className="inputValor"
                placeholder="R$ 1,00"
                {...register("value")}
              ></input>
            </div>
            <div>
              <label htmlFor="tipoValor">Tipo de valor</label>
              <select name="tipoValor" {...register("type")}>
                <option value="Entrada">Entrada</option>
                <option value="saida">Saida</option>
              </select>
            </div>
          </div>
          <button className="submit" type="submit">
            Inserir valor
          </button>
        </div>
      </form>
    </div>
  );
}
