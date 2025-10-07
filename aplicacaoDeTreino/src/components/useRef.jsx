import { useRef } from "react";

function InputUseRef() {
    const inputRef = useRef();

    function focarInput() {
        inputRef.current.focus();
    }

    return(
        <div>
        <input ref={inputRef} placeholder="digite aqui" />
        <button onClick={focarInput}>focar input</button>
        </div>
    )
}

export default InputUseRef;