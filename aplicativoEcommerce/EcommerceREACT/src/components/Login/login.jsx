import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/authContext";
import './login.css';

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate();

    const { setUsuario, setToken } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        setErro("");

        try {
            const response = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email,
                    senha: senha,
                }),
            });

            if (!response.ok) {
                throw new Error("Credenciais inválidas");
            }

            const data = await response.json();
            setUsuario(data.user);
            localStorage.setItem("token", data.token);
            setToken(data.token);

            navigate("/");

        } catch (error) {
            setErro(error.message);
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <form onSubmit={handleSubmit}>
                    <label className="login">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu E-mail"
                        required
                    />

                    <label className="login">Senha</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Digite sua senha"
                        required
                    />

                    <button type="submit">Entrar</button>

                    {erro && <div className="erro">{erro}</div>}

                    <div className="registre-se">
                        <p className="p-login">Não tem uma conta?</p>
                        <a href="/register" className="a-registre-se">Registre-se</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
