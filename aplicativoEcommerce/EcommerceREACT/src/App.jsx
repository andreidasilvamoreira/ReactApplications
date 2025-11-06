import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navBar/navBar'
import Home from './pages/Home/Home'
import Login from './pages/Login'
import { PedidosProvider } from './context/pedidosContext'
import CarrinhoADM from './PagesADM/CarrinhoADM/carrinhoADM'
import Carrinho from './pages/carrinho'
import Register from './pages/register'
import { ProdutoProvider } from './context/produtoContext'
import Produto from './pages/Produto/Produto'

function App() {

  return (
    <BrowserRouter>
      <ProdutoProvider>
        <PedidosProvider>
          <NavBar />
          <Routes>
            <Route path="/produto/:id" element={<Produto />}></Route>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="adm/carrinho" element={<CarrinhoADM />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </PedidosProvider>
      </ProdutoProvider>
    </BrowserRouter>
  )
}

export default App
