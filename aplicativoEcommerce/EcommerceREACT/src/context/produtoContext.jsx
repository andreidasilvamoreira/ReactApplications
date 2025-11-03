import { createContext, useEffect, useState } from "react"
import { getProdutos } from '../api/produtos'

export const ProdutoContext = createContext()

export function ProdutoProvider({ children }) {
    const [produtos, setProdutos] = useState([])
    const [erro, setErro] = useState(null)
    
    useEffect(() => {
        async function carregarProdutos() {
            try {
                const data = await getProdutos();
                setProdutos(data)
            }catch {
                setErro("Não foi possivel carregar os produtos.")
            }
        }

        carregarProdutos();
    }, [])

    return (
        <ProdutoContext.Provider value={{produtos, setProdutos, erro}}>
            {children}
        </ProdutoContext.Provider>
    )
}