import './App.css'
import { useState } from 'react'
import Temporizador from './components/useEffectTemporizador'
import { ThemeContext } from './context/themaContext'
import {ContagemContext} from './context/contagemContext'
import Contador from './components/contador'

function App() {
  const [tema, setTema] = useState("dark")

  function alternarTema() {
    setTema((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <>
      <div className={tema === "dark" ? "dark-theme" : "light-theme"}>
        <h1>React Hooks</h1>

        <ThemeContext.Provider value={{ tema, alternarTema }}>
          <ContagemContext.Provider value={{}}>
            <Contador />
            <Temporizador />
            </ContagemContext.Provider>
            <h1>Tema atual {tema}</h1>
            <button onClick={alternarTema}>Mudar tema</button>
        </ThemeContext.Provider>
        <h1>renderizou</h1>
      </div>
    </>
  )
}

export default App
