import { useEffect, useState } from "react";
import { getPedidos } from '../../api/pedidos';

export default function PedidosPage() {
  const [pedidos, setPedidos] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarPedidos() {
      try {
        const data = await getPedidos();
        setPedidos(data);
      } catch {
        setErro("Não foi possível carregar os pedidos.");
      }
    }

    carregarPedidos();
  }, []);

  if (erro) return <p>{erro}</p>;
  if (!pedidos.length) return <p>Carregando pedidos...</p>;

  return (
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
  );
}
