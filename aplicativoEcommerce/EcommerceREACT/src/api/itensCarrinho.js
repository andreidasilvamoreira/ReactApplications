import { API_ItensCarrinhos } from "./config";

async function fetchComToken(url, options = {}, token) {
    const resposta = await fetch(url, {
        ...options, 
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            ...(options.headers || {})
        }
    });

    if (!resposta.ok) throw new Error("Erro na requisição");
    return await resposta.json();
}

export async function getItensCarrinho(token) {
    return fetchComToken(API_ItensCarrinhos, {}, token)
}

export async function showItemCarrinho(itemId, token) {
    return fetchComToken(`${API_ItensCarrinhos}/${itemId}`, {}, token)
}

export async function addCarrinho(produtoId, token) {
    return fetchComToken(API_ItensCarrinhos, {
        method: 'POST',
        body: JSON.stringify({
            produto_id: produtoId,
            quantidade: 1
        })
    }, token)
}

export async function deleteItem(itemId, token) {
    return fetchComToken(`${API_ItensCarrinhos}/${itemId}`, {
        method: 'DELETE',
    }, token)
}

export async function updateItem(itemId, quantidade, token) {
    return fetchComToken(`${API_ItensCarrinhos}/${itemId}`, {
        method: 'PUT',
        body: JSON.stringify({ quantidade })
    }, token)
}