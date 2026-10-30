import {Header} from './Componentes/Header';
import {Novidades} from './Componentes/Novidades';
import {Categorias} from './Componentes/Categorias';
import {Destaque} from './Componentes/Destaque';
import '../global.css';

export default function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <section>
        <Novidades/>
      </section>
      <section>
        <Categorias/>
      </section>
      <section>
        <Destaque />
      </section>
    </div>
  )
}
