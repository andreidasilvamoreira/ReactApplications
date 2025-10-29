import "./registro.css";

export default function Registrar() {
  return (
    <div className="auth-container">
      <form className="auth-box">
        <h1>Crie sua conta</h1>

        <label>Usuário</label>
        <input type="text" placeholder="Digite seu usuário" required />

        <label>Email</label>
        <input type="email" placeholder="Digite seu e-mail" required />

        <label>Senha</label>
        <input type="password" placeholder="Digite sua senha" required />

        <label>Confirmar senha</label>
        <input type="password" placeholder="Confirme sua senha" required />

        <button type="submit">Registrar</button>

        <div className="auth-footer">
          <p>Já tem uma conta?</p>
          <a href="/login">Entrar</a>
        </div>
      </form>
    </div>
  );
}
