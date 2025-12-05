import { API_Login } from "./config";
import { API_Registro } from "./config";


export async function login(email, senha) {
    const response = await fetch(API_Login, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
    });

    if (!response.ok) {
        throw new Error("Credenciais inválidas");
    }

    return await response.json();
}

export async function registro(name, email, senha) {
    const response = await fetch(API_Registro, {
        method: "POST",
        headers: {
            "Content-Type": "application/json,"
        },
        body: JSON.stringify({ name, email, senha })
    });
    if (!response.ok) {
        throw new Error("Erro ao registrar usuário");
    }
    
    return await response.json();
}