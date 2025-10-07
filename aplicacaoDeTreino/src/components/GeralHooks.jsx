import { useState, useEffect, useRef, useMemo } from "react";

function Geral() {
  // useState → estados
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [contador, setContador] = useState(0);

  // useRef → foco no input
  const inputRef = useRef();

  // useEffect → timer automático para incrementar contador
  useEffect(() => {
    const timer = setInterval(() => setContador(c => c + 1), 1000);
    return () => clearInterval(timer); // cleanup quando componente desmonta
  }, []);

  // useEffect → colocar foco no input ao montar o componente
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // adicionar tarefa
  function adicionarTarefa() {
    if (novaTarefa.trim() === "") return;
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
    inputRef.current.focus();
  }

  // useMemo → calcular número de tarefas apenas quando tarefas mudarem
  const totalTarefas = useMemo(() => {
    console.log("Calculando total de tarefas...");
    return tarefas.length;
  }, [tarefas]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Lista de Tarefas</h1>
      <p>Contador automático: {contador}</p>
      <p>Total de tarefas: {totalTarefas}</p>

      <input
        ref={inputRef}
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default Geral;