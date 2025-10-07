function Botao({text, onClick, quantidade}) {
    return <button onClick={onClick}>{text}{quantidade}</button>
}
export default Botao;