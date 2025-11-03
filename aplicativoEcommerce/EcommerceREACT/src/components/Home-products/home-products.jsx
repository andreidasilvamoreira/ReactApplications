import { useContext } from "react"
import { ProdutoContext } from "../../context/produtoContext"
import "./home-products.css"

export default function HomeProducts() {
    const { produtos, erro } = useContext(ProdutoContext);

    if (erro) return <p>{erro}</p>
    if (!produtos.length) return <p>Carregando Produtos...</p>
    return (
        <div>
            <ul className="produtoPAI">
                {produtos.map((p) => (
                    <li className="produtoCARD" key={p.id}>
                        <img className="produtoIMG"src={p.imagem} alt={p.nome} />
                        <p className="produtoText">{p.nome}</p>
                        <p className="ProdutoPreco">R$ {p.preco}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}