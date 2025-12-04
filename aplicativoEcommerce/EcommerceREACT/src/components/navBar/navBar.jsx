import { useState, useContext } from "react";
import "./navBar.css";
import { Link, useNavigate } from "react-router-dom";
import iconLogin from "./../../assets/iconLogin.png";
import lupa from "./../../assets/lupa.png";
import logo from "./../../assets/logo.png"
import { AuthContext } from "../../context/authContext";

export default function NavBar() {
    const navigate = useNavigate();
    const { usuario, logout } = useContext(AuthContext);
    const [pesquisa, setPesquisa] = useState("");
    function doubleFunction() {
        logout(),
        navigate("/login")
    }
    return (
        <nav className="nav navbar">
            <div className="logo">
                <Link className="logoAncora" to="/"><img className="img-logo" src={logo} alt="logo" /></Link>
            </div>

            <div className="input-container">
                <input
                    className="nav-input"
                    onChange={(e) => setPesquisa(e.target.value)}
                    type="text"
                    placeholder="O que você está procurando?"
                />
                <img src={lupa} alt="lupa" className="iconLupa" />
            </div>

            <div className="nav-opcoes">
                {usuario ? (
                    <div className="login">
                        <div className="login-img">
                            <img src={iconLogin} alt="Usuário" className="icon-login" />
                            {usuario.name}
                        </div>
                    </div>
                ) : (
                    <Link to="/login" className="login">
                        <div className="login-img">
                            <img src={iconLogin} alt="Login" className="icon-login" />
                            Login
                        </div>
                    </Link>
                )}

                <Link to="/carrinho">
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                {usuario && (
                    <button onClick={doubleFunction} className="botao-logout">
                        Sair
                    </button>
                )}
            </div>
        </nav>
    );
}
