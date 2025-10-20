import { useState } from "react"
import './login.css'

export default function LoginForm() {

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    function handleChangeUser(e) {
        setUsuario(e.target.value)
    }
    function handleChangePassword(e) {
        setSenha(e.target.value)
    }

     function handleSubmit(e) {
        e.preventDefault();
        console.log({ usuario, senha });
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <form onSubmit={handleSubmit}>
                    <label>Usuário</label>
                    <input
                        type="text"
                        value={usuario}
                        onChange={handleChangeUser}
                        placeholder="Digite seu usuário"
                    />
                    <label>Senha</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={handleChangePassword}
                        placeholder="Digite sua senha"
                    />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
}