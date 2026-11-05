import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header} from './Componentes/Header';
import {Footer} from './Componentes/Footer';
import {Home} from './Pages/Home';
import {Catalogo} from './Pages/Catalogo';
import {Carrinho} from './Pages/Carrinho';
import '../global.css';

export default function App() {
  return (
    <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo/>} />
            <Route path="/carrinho" element= {<Carrinho/>} />
          </Routes>
          <Footer/>
    </BrowserRouter>
  )
}
