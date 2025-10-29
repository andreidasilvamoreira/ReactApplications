import { useState } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {

    const [pesquisa, setPesquisa] = useState("")

    return (
        <nav className="nav navbar">
            <div className="logo">
                <Link className="logoAncora" to="/home">Logo</Link></div>
            <input className="nav-input" onChange={(e) => setPesquisa(e.target.value)}type="text" placeholder="O que você está procurando? "/>
            <div className="nav-opcoes">
                <Link to="/login" className="login">Login</Link>
                <Link to="/carrinho">
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
            </div>
        </nav>
    )
}