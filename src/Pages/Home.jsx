// src/pages/Home.jsx
import { Novidades } from '../Componentes/Novidades';
import { Categorias } from '../Componentes/Categorias';
import { Destaque } from '../Componentes/Destaque';

export function Home({onAdicionar}) {
    return (
        <main>
            <Novidades />
            <Categorias />
            <Destaque onAdicionar={onAdicionar}/>
        </main>
    );
}