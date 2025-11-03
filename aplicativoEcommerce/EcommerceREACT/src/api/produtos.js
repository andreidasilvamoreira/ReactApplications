import { API_Produtos } from "./config";

export async function getProdutos() {
  const resposta = await fetch(API_Produtos);
  if (!resposta.ok) throw new Error("Erro ao buscar produtos");
  return await resposta.json();
}

export async function getProduto() {
  const resposta = await fetch(`/${id}`);
  if (!resposta.ok) throw new Error("Erro ao buscar produtos");
  return await resposta.json();
}
