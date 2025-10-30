import { useState } from "react";
import "./registro.css";

export default function Registrar() {
  const [name, setName] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");
    setSucesso("");

    if (senha !== confirmaSenha) {
      setErro("As senhas não coincidem!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          senha,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSucesso("Conta criada com sucesso!");
        setName("");
        setEmail("");
        setSenha("");
        setConfirmaSenha("");
      } else {
        setErro(data.message || "Erro ao registrar.");
      }
    } catch (erro) {
      setErro("Este email já está em uso")
    };
  
  }

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h1>Crie sua conta</h1>

        <label>Usuário</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu usuário"
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <label>Confirmar senha</label>
        <input
          type="password"
          value={confirmaSenha}
          onChange={(e) => setConfirmaSenha(e.target.value)}
          placeholder="Confirme sua senha"
          required
        />

        {erro && <p className="erro">{erro}</p>}
        {sucesso && <p className="sucesso">{sucesso}</p>}

        <button type="submit">Registrar</button>

        <div className="auth-footer">
          <p>Já tem uma conta?</p>
          <a href="/login">Entrar</a>
        </div>
      </form>
    </div>
  );
}
