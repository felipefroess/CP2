// src/pages/Home.jsx
import { Novidades } from '../Componentes/Novidades';
import { Categorias } from '../Componentes/Categorias';
import { Destaque } from '../Componentes/Destaque';

export function Home() {
    return (
        <main>
            <Novidades />
            <Categorias />
            <Destaque />
        </main>
    );
}