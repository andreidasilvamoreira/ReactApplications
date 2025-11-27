import { API_Carrinhos } from "./config";


export async function getCarrinho(token) {
    const resposta = await fetch(API_Carrinhos, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if (!resposta.ok) throw new Error("Erro ao buscar carrinho");
    return await resposta.json();
}

export async function addCarrinho(produtoId, token) {
    const resposta = await fetch(API_Carrinhos, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            produto_id: produtoId,
            quantidade: 1
        })
    });

    if (!resposta.ok) throw new Error("Erro ao adicionar");
        return await resposta.json();
}



export async function fecharCarrinho(token) {
    const resposta = await fetch(`${API_Carrinhos}/fechar`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!resposta.ok) throw new Error("Erro ao finalizar");
}