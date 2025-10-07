import Botao from "./botao";
import { useContagem } from "../context/contagemContext"
function Contador() {
    const { contador, incrementar, decrementar, resetar } = useContagem();

    return (
        <div>
            <h1>{contador}</h1>
            <Botao text="-" onClick={decrementar} />
            <Botao text="+" onClick={incrementar} />
            <Botao text="resetar" onClick={resetar} />
        </div>
    )
}

export default Contador;
