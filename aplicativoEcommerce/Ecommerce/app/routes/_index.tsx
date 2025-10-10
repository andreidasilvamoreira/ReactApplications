import "./index.css";

export default function Home() {
  return (
    <div className="div-pai-de-todos">
      <nav className="nav navbar">
        <div className="logo">LOGO</div>
        <input className="nav-input"  type="text" />
        <div className="nav-opcoes">
          <a href="#" className="login">Login</a>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </nav>
      <body> <h1>Corpo</h1>
      </body>
      <footer>
        <h1>rodape</h1>
      </footer>
    </div>
  );
}