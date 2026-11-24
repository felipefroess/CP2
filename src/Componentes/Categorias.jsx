import { Link } from 'react-router-dom';
import style from './Categorias.module.css';
import { Headphones, Watch, Keyboard, Monitor } from '@phosphor-icons/react';

export function Categorias() {
    return (
        <section className={style.categorias}>
            <p>NAVEGUE POR DEPARTAMENTO</p>
            <div className={style.categoriasDesc}>
                <h1>Categorias</h1>
                <p>Escolha uma categoria para filtrar rapidamente os produtos no catálogo.</p>
            </div>
            <div className={style.containerBlocos}>
                <div className={style.blocos}>
                    <Headphones className={style.blocosLogo} size={30} color="#4f46e5" weight="bold" />
                    <h2 className={style.blocosTitle}>Fones & Áudio</h2>
                    <p className={style.blocosDesc}>Headphones, TWS e Caixas de som</p>
                    <Link to="/catalogo?categoria=Fones & Áudio" className={style.blocosButton}>Ver produtos ➜</Link>
                </div>
                <div className={style.blocos}>
                    <Watch className={style.blocosLogo} size={30} color="#4f46e5" weight="bold" />
                    <h2 className={style.blocosTitle}>SmartWatches</h2>
                    <p className={style.blocosDesc}>Relógios inteligentes para o seu dia a dia</p>
                    <Link to="/catalogo?categoria=Smartwatches" className={style.blocosButton}>Ver produtos ➜</Link>
                </div>
                <div className={style.blocos}>
                    <Keyboard className={style.blocosLogo} size={30} color="#4f46e5" weight="bold" />
                    <h2 className={style.blocosTitle}>Periféricos</h2>
                    <p className={style.blocosDesc}>Mouses e teclados de alta precisao</p>
                    <Link to="/catalogo?categoria=Periféricos" className={style.blocosButton}>Ver produtos ➜</Link>
                </div>
                <div className={style.blocos}>
                    <Monitor className={style.blocosLogo} size={30} color="#4f46e5" weight="bold" />
                    <h2 className={style.blocosTitle}>Monitores</h2>
                    <p className={style.blocosDesc}>Telas gamers e profissionais</p>
                    <Link to="/catalogo?categoria=Monitores" className={style.blocosButton}>Ver produtos ➜</Link>
                </div>
            </div>
        </section>
    );
}
