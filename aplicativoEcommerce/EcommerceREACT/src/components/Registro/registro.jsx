import { useState } from "react";
import "./registro.css";
import { registro } from "../../api/auth";

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
      const response = await registro(name, email, senha)

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

        <label className="registro usuario">Usuário</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu usuário"
          required
        />

        <label className="registro email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          required
        />

        <label className="registro senha">Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          required
        />

        <label className="registro confirmar-senha">Confirmar senha</label>
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
          <p className="p-registro">Já tem uma conta?</p>
          <br/>
          <a href="/login" className="label-entrar">Entrar</a>
        </div>
      </form>
    </div>
  );
}
