import "./navBar.css";
import { Link } from "react-router";

export default function NavBar() {
    return (
        <nav className="nav navbar">
            <div className="logo">
                <Link className="logoAncora" to="/">Logo</Link></div>
            <input className="nav-input" type="text" />
            <div className="nav-opcoes">
                <Link to="/login" className="login">Login</Link>
                <Link to="/carrinho">
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
            </div>
        </nav>
    )
}