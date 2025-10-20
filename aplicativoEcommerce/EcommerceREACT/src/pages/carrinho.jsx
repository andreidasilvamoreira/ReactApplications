import {useContext } from 'react'
import Pedidos from '../components/Pedidos/pedidos'
import { PedidoContext } from '../context/pedidosContext'

export default function Carrinho() {
    const {pedidos} = useContext(PedidoContext)

    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Data</th>
                            <th>Valor Total</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidos.map(pedido => (
                            <tr key={pedido.id}>
                                <td>{pedido.id}</td>
                                <td>{pedido.usuario?.nome || "Cliente não encontrado"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}