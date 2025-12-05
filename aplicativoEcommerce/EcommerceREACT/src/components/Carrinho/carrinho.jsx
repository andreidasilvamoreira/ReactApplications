import { PedidoContext } from '../../context/pedidosContext'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/authContext'
import './carrinho.css'
import { getItensCarrinho } from '../../api/itensCarrinho'

export default function Table() {
    const [ItensCarrinhos, setItensCarrinho] = useState([]);
    const { pedidos } = useContext(PedidoContext)
    const { token } = useContext(AuthContext);


    useEffect(() => {
        async function carregarItens() {
            try {
                const resposta = await getItensCarrinho(token);
                setItensCarrinho(resposta);
            } catch (erro) {
                console.error("Erro ao carregar itens do carrinho:", erro);
            }
        }
        carregarItens();
    }, [token]);

    const totalCarrinho = ItensCarrinhos.reduce((soma, item) => {
        const precoUnitario = Number(item.produto?.preco || 0);
        const quantidade = Number(item.quantidade || 1);
        return soma + precoUnitario * quantidade;
    }, 0);


    return (
        <>
            <h1 className='h1-carrinho'>🛒 Carrinho</h1>
            <div className='table-pai-de-todos'>
                <div className="cart-container">
                    <div className="cart-card">
                        <div className="cart-header-row">
                            <span>Produto</span>
                            <span>Preço</span>
                            <span>Quantidade</span>
                            <span>Valor Total</span>
                        </div>

                        {ItensCarrinhos.map(item => {

                            const nome = item.produto?.nome || "Produto não encontrado";
                            const precoUnitario = Number(item.produto?.preco || 0);
                            const quantidade = Number(item.quantidade || 1);
                            const total = precoUnitario * quantidade;

                            const handleChangeQuantidade = async (e) => {
                                const novaQtd = Number(e.target.value);

                                try {
                                    // Chama a API para atualizar no backend
                                    await updateItem(item.id, novaQtd, token);

                                    // Atualiza o estado local para refletir a mudança imediatamente
                                    setItensCarrinhos(prev =>
                                        prev.map(i => i.id === item.id ? { ...i, quantidade: novaQtd } : i)
                                    );
                                } catch (err) {
                                    console.error("Erro ao atualizar item:", err);
                                    alert("Não foi possível atualizar a quantidade.");
                                }
                            };

                            return (
                                <div className="cart-item-row" key={item.id}>

                                    <div className="cart-product">
                                        <img
                                            src={item.produto?.foto || "https://via.placeholder.com/50"}
                                            alt={nome}
                                        />
                                        <span>{nome}</span>
                                    </div>

                                    <span className="cart-price">
                                        R$ {precoUnitario.toFixed(2)}
                                    </span>

                                    <select
                                        className="cart-qty"
                                        value={quantidade}
                                        onChange={() => { }}
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                                            <option key={n} value={n}>{n}</option>
                                        ))}
                                    </select>

                                    <span className="cart-total">
                                        R$ {total.toFixed(2)}
                                    </span>

                                </div>
                            );
                        })}
                    </div>
                    <div className="cart-footer">
                        Escolher mais produtos
                    </div>
                </div>

                <div className='finalizar-compra'>
                    <div>
                        <h3 className='h3-resumo'>Resumo</h3>
                    </div>
                    <div className='linha-1'></div>
                    <div className='valores-finais'>
                        <div className='subtotal-div'>
                            <p className='subtotal'>Subtotal</p><p className='subtotal-valor'>R$ {totalCarrinho.toFixed(2)}</p>
                        </div>
                        <div className='frete-div'>
                            <p className='frete'>Frete</p><p className='frete-calcular'>calcular</p>
                        </div>
                    </div>
                    <div className='linha-2'></div>
                    <div>
                        <div className='total-div'><p>Total</p> <p className='precoTotal'>R$ {totalCarrinho.toFixed(2)}</p></div>
                        <button className='button-finalizar'>Finalizar compra</button>

                    </div>
                </div>
            </div>
        </>
    )
}