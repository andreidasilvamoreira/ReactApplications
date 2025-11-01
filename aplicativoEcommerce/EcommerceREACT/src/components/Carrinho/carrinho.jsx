import { PedidoContext } from '../../context/pedidosContext'
import { useContext } from 'react'
import './carrinho.css'

export default function Table() {
    const { pedidos } = useContext(PedidoContext)
    return (
        <>
            <h1 className='h1-carrinho'>🛒 Carrinho</h1>
            <div className="tabela-container">
                <table className="tabela-pedidos">
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Valor Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidos.map(pedido => {
                            pedido.itens_pedido?.map(item => (
                                <tr key={item.id}>
                                    <td>{item.produto?.nome || "Produto não encontrado"}</td>
                                    <td>{item.quantidade}</td>
                                    <td>{pedido.total}</td>
                                    <td>R$ {pedido.total}</td>

                                </tr>
                            ))
                        }
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}