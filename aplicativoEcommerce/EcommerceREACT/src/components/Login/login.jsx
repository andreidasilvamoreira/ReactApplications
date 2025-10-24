import { useState } from "react";
import { useNavigate } from "react-router-dom"
import './login.css';

export default function LoginForm() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        setErro("");

        try {
            const response = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: usuario,
                    password: senha,
                }),
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error("Credenciais inválidas");
            }
            const data = await response.json();
            console.log("Login realizado:", data);
            navigate('/home')
        } catch (error) {
            setErro(error.message);
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <form onSubmit={handleSubmit}>
                    <label>Usuário</label>
                    <input
                        type="user"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        placeholder="Digite seu e-mail"
                        required
                    />
                    <label>Senha</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Digite sua senha"
                        required
                    />
                    <button type="submit">Entrar</button>
                    {erro && <p style={{ color: "red", marginTop: "10px" }}>{erro}</p>}
                </form>
            </div>
        </div>
    );
}
