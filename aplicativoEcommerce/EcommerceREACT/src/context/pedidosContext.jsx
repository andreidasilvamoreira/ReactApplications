import { createContext, useState, useEffect } from "react";
import { getPedidos } from '../api/pedidos';

export const PedidoContext = createContext();

export function PedidosProvider({children}) {
    const [pedidos, setPedidos] = useState([]);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        async function carregarPedidos() {
            try {
                const data = await getPedidos();
                setPedidos(data);
            } catch {
                setErro("Não foi possível carregar os pedidos...");
            }
        }

        carregarPedidos();
    }, []);
    return (
        <PedidoContext.Provider value={{pedidos, setPedidos, erro}}>
            {children}
        </PedidoContext.Provider>
    )
}