import { useEffect, useState } from "react";
import { getPedidos } from '../api/pedidos';

export default function PedidosPage() {
  const [pedidos, setPedidos] = useState([]); // Armazena os pedidos
  const [erro, setErro] = useState(null);     // Guarda mensagens de erro

  useEffect(() => {
    async function carregarPedidos() {
      const data = await getPedidos(); // Chama sua função
      if (data) {
        setPedidos(data); // Atualiza o estado
      } else {
        setErro("Não foi possível carregar os pedidos.");
      }
    }

    carregarPedidos();
  }, []); // Executa apenas 1x ao carregar o componente

  if (erro) return <p>{erro}</p>;

  return (
    <div>
      <h2>📦 Lista de Pedidos</h2>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>
            Pedido #{pedido.id} — {pedido.status} — R$ {pedido.total}
          </li>
        ))}
      </ul>
    </div>
  );
}