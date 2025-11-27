import { API_ItensCarrinhos } from "./config";

export async function deleteItem(itemId, token) {
    const resposta = await fetch(`${API_ItensCarrinhos}/${itemId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!resposta.ok) throw new Error("Erro ao remover");
    return (await resposta).json();
}