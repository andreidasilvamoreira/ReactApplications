import { useState, useMemo } from "react";

function UsandoMemo() {
    const [numero, setNumero] = useState(0);
  const [texto, setTexto] = useState("");

  const dobro = useMemo(() => {
    console.log("Calculando dobro...");
    let soma = 0;
    for (let i = 0; i < 200000000; i++) { 
      soma += i;
    }
    return numero * 2;
  }, [numero]);

  return (
    <div>
      <h2>useMemo</h2>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
      />
      <p>Dobro: {dobro}</p>

      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite qualquer coisa"
      />
      <p>Texto: {texto}</p>
    </div>
  );
}

export default UsandoMemo;