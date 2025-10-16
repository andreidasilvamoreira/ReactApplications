import './errorPage.css';

export function ErrorBoundary() {
  return (
    <main className="error-container">
      <div className="error-icon">
        <i className="fas fa-exclamation-triangle"></i>
      </div>
      <h1>Ops! Algo deu errado.</h1>
      <p>Não conseguimos processar sua solicitação agora. Por favor, tente novamente mais tarde.</p>
      <button onClick={() => window.location.reload()}>Tentar novamente</button>
    </main>
  )};