import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header} from './Componentes/Header';
import {Footer} from './Componentes/Footer';
import {Home} from './Pages/Home';
import {Catalogo} from './Pages/Catalogo';
import {Carrinho} from './Pages/Carrinho';
import '../global.css';

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionaraocarrinho(produto){
    setCarrinho([...carrinho, produto]);
    alert(`${produto.nome} adicionado ao carrinho!`);
  }
  return (
    <BrowserRouter>
          <Header itensNoCarrinho={carrinho.length} />
          <Routes>
            <Route path="/" element={<Home onAdicionar={adicionaraocarrinho}/>} />
            <Route path="/catalogo" element={<Catalogo/>} />
            <Route path="/carrinho" element= {<Carrinho itens={carrinho}/>} />
          </Routes>
          <Footer/>
    </BrowserRouter>
  )
}
