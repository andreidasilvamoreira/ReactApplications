import { useContext } from "react";
import { ProdutoContext } from "../context/produtoContext";

export default function Produto() {
    const { produtos, erro } = useContext(ProdutoContext);

    return (
        <div>
            <img src="" alt="" />

            <div>
                <i class="fa-solid fa-cart-plus"></i>
                <h2>Titulo do produto</h2>
                <p>Descição do produto</p>
                <h1>preço do produto</h1>
                <button>Compre Agora</button>
                <i className="fa-regular fa-heart"></i>

            </div>
        </div>
    )
}