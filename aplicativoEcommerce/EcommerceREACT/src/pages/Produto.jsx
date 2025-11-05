import { useContext, useState } from "react";
import { ProdutoContext } from "../context/produtoContext";
import { useParams } from "react-router-dom";
import "./produto.css"

export default function Produto() {
    const { produtos, erro } = useContext(ProdutoContext);
    const { id } = useParams()
    const [coracao, setCoracao] = useState(false)
    if (erro) return <p>{erro}</p>
    if (!produtos.length) return <p>Carregando...</p>

    const produto = produtos.find(p => p.id == id)

    if (!produto) return <p>Produto não encontrado.</p>

    return (
        <>
            <div className="div-pai-produtos">
                <img src={produto.imagem} alt="" />

                <div >
                    <div className="titulo-icone">
                        <div className="div-filho-produtos">
                            <i onClick={() => setCoracao(!coracao)} className={`icone-fav ${coracao ? "fa-solid" : "fa-regular"} fa-heart`}
                            ></i></div>
                        <h1 className="titulo-produto">{produto.nome}</h1>
                    </div>
                    <div className="preco-produto"><p className="h2-preco-produto">R${produto.preco}</p></div>
                    <div className="div-botoes">
                        <button className="botao-comprar">Compre Agora</button>
                        <button className="botao-adicionar-carrinho">Adicionar Ao Carrinho<i class="fa-solid fa-cart-plus"></i></button>
                    </div>
                </div>
            </div>
            <div className="paragrafo-produto"><p>{produto.descricao}</p></div>
            
        </>
    )
}