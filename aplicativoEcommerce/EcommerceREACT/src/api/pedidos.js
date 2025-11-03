import { API_Pedidos } from "./config";

export async function getPedidos() {
  const resposta = await fetch(API_Pedidos);
  if (!resposta.ok) throw new Error("Erro ao buscar pedidos");
  return await resposta.json();
}

export async function getPedido() {
  const resposta = await fetch(`/${id}`);
  if (!resposta.ok) throw new Error("Erro ao buscar pedidos");
  return await resposta.json();
}
