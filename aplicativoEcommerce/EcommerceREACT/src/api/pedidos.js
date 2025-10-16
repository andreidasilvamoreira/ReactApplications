import { API } from "./config";

// GET – listar todos os pedidos
export async function getPedidos() {
  const resposta = await fetch(API);
  if (!resposta.ok) throw new Error("Erro ao buscar pedidos");
  return await resposta.json();
}

export async function getPedido() {
  const resposta = await fetch(`${API} /${id}`);
  if (!resposta.ok) throw new Error("Erro ao buscar pedidos");
  return await resposta.json();
}
