import { useState, useEffect } from "react";
import { useContagem } from "../context/contagemContext";
function Temporizador() {
  const { contador } = useContagem();
  useEffect(() => {
    console.log("O contador mudou para:", contador);
  }, [contador]);
  return <h2>Contador atual: {contador}</h2>;

}

export default Temporizador;

//  exemplos de uso do useEffect


// Mount: roda quando o componente nasce.
// Update: roda quando dependências mudam.
// Unmount: roda quando o componente morre (limpeza).


//  useEffect(() => {
//   console.log("Componente montado!");
//  }, []); // [] = só na montagem


//   useEffect(() => {
//    console.log("Nome atualizado:", nome);
//   }, [nome]); // roda toda vez que `nome` muda


