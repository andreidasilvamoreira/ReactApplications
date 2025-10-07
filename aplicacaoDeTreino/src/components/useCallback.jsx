import { useCallback, useState } from "react";

function ExemploCallback() {

const [lista, setLista] = useState([]);
const [texto, setTexto] = useState("");

    const adicionar = useCallback(() => {
        setLista((prev) => [...prev, texto]);
        setTexto("");
    }, [texto])

     return (
    <div>
      <h2>useCallback</h2>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo"
      />
      <button onClick={adicionar}>Adicionar</button>

      <ul>
        {lista.map((index, item) => {
            <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default ExemploCallback;