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

  function removerItem(indexParaRemover){
      setCarrinho(carrinho.filter((_,index) => index !== indexParaRemover));
    }

  function limparCarrinho(){
    setCarrinho([]);
  }

  function adicionaraocarrinho(produto){
    setCarrinho([...carrinho, produto]);
  }
  return (
    <BrowserRouter>
          <Header itensNoCarrinho={carrinho.length} />
          <Routes>
            <Route path="/" element={<Home onAdicionar={adicionaraocarrinho}/>} />
            <Route path="/catalogo" element={<Catalogo/>} />
            <Route path="/carrinho" element= {<Carrinho 
            itens={carrinho}
            onRemoverItem={removerItem}
            onLimparCarrinho={limparCarrinho}
            />} />
          </Routes>
          <Footer/>
    </BrowserRouter>
  )
}
