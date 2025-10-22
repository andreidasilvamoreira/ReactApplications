import { PedidoContext } from '../../context/pedidosContext'
import { useContext } from 'react'
import './carrinhoADM.css'

export default function Table() {
    const { pedidos } = useContext(PedidoContext)
    return (
        <div className="tabela-container">
            <div className="tabela-header">
                <h2>📦 Pedidos</h2>
                <button className="btn-novo">+ Novo Pedido</button>
            </div>
                <table className="tabela-pedidos">
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
                                <td>{pedido.data}</td>
                                <td>R$ {pedido.total}</td>
                                <td>{pedido.status_pagamento}</td>
                                <td>
                                    <button className="btn-editar">Editar</button>
                                    <button className="btn-excluir">Excluir</button>
                                    <button className="btn-ver">Ver</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            )
}