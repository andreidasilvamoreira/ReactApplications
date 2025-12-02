import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext";
import './login.css';

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate()
    const { setUsuario } = useContext(AuthContext);

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
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error("Credenciais inválidas");
            }
            const data = await response.json();
            console.log("Login realizado:", data);
            setUsuario(data.user);
            navigate('/')
        } catch (error) {
            setErro(error.message);
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <form onSubmit={handleSubmit}>
                    <label className="login label-email">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu E-mail"
                        required
                    />
                    <label className="login label-senha">Senha</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Digite sua senha"
                        required
                    />
                    <button type="submit" >Entrar</button>
                    {erro && <div className="erro">{erro}</div>}
                    <div className="registre-se">
                        <p className="p-login">Não tem uma conta?</p>
                        <a className="a" href="/register">Registre-se</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
