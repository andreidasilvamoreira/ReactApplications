import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navBar/navBar'
import Home from './pages/Home'
import Login from './pages/Login'
import { PedidosProvider } from './context/pedidosContext'
import CarrinhoADM from './PagesADM/CarrinhoADM/carrinhoADM'
import Carrinho from './pages/carrinho'
import Register from './pages/register'

function App() {

  return (
    <BrowserRouter>
      <PedidosProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="adm/carrinho" element={<CarrinhoADM />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          </Routes>
      </PedidosProvider>
    </BrowserRouter>
  )
}

export default App
