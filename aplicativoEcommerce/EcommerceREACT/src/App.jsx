import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/navBar'
import Home from './pages/Home'
import Carrinho from './pages/carrinho'
import Login from './pages/Login'
import { PedidosProvider } from './context/pedidosContext'

function App() {

  return (
    <BrowserRouter>
      <PedidosProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </PedidosProvider>
    </BrowserRouter>
  )
}

export default App
