import { useContext, useEffect, useState } from "react";
import { getPedidos } from '../../api/pedidos';
import { PedidoContext } from "../../context/pedidosContext";

export default function PedidosPage() {
  
  const{pedidos, erro} = useContext(PedidoContext)

  if (erro) return <p>{erro}</p>;
  if (!pedidos.length) return <p>Carregando pedidos...</p>;

  return (
    <PedidoContext.Provider value={{pedidos, setPedidos}}>
      <div>
        <h2>📦 Lista de Pedidos</h2>

        {pedidos.map(pedido => (
          <div key={pedido.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <p><strong>Cliente:</strong> {pedido.usuario?.nome || "Cliente não encontrado"}</p>
            <p><strong>Status pagamento:</strong> {pedido.status_pagamento}</p>
            <p><strong>Total:</strong> R$ {pedido.total}</p>

            <h4>Itens do Pedido:</h4>
            <ul>
              {pedido.itens_pedido?.map(item => (
                <li key={item.id}>
                  {item.produto?.nome || "Produto não encontrado"} — Qtd: {item.quantidade} — Subtotal: R$ {item.subtotal}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PedidoContext.Provider>
  );
}
