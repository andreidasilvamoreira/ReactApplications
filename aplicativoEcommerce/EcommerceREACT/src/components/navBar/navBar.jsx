import { useState } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import iconLogin from "./../../assets/iconLogin.png";
import lupa from "./../../assets/lupa.png";
import logo from "./../../assets/logo.png"
export default function NavBar() {
    const [pesquisa, setPesquisa] = useState("");

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
                <Link to="/login" className="login">
                    <div className="login-img">
                        <img src={iconLogin} alt="Login" className="icon-login" />
                        Login
                    </div>
                </Link>
                <Link to="/carrinho">
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
            </div>
        </nav>
    );
}
