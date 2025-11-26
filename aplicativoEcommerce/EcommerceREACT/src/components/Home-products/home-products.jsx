import { useContext } from "react"
import { ProdutoContext } from "../../context/produtoContext"
import "./home-products.css"
import { useNavigate } from "react-router-dom";

export default function HomeProducts() {
    const { produtos, erro } = useContext(ProdutoContext);
    const navigate = useNavigate()
    if (erro) return <p className="error-page">{erro}</p>
    if (!produtos.length) return <p>Carregando Produtos...</p>
    return (
        <div>
            <ul className="produtoPAI">
                {produtos.map((p) => (
                    <li onClick={() => navigate(`/produto/${p.id}`)} className="produtoCARD" key={p.id}>
                        <img className="produtoIMG"src={p.imagem} alt={p.nome} />
                        <p className="produtoText">{p.nome}</p>
                        <p className="ProdutoPreco">R$ {p.preco}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}