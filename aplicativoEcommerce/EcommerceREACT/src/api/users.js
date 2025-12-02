import { API_User } from "./config";

export async function getUser(token) {
  const resposta = await fetch(API_User, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!resposta.ok) throw new Error("Não autenticado");
  return await resposta.json();
}