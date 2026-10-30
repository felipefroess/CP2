import style from './Destaque.module.css';
import fotofone from '../Imagens/fone-de-ouvido.avif'
import {Eyes} from '@phosphor-icons/react'
import {ShoppingCartSimpleIcon} from '@phosphor-icons/react'

export function Destaque(){
    return(
        <section className={style.destaque}>
            <p>MAIS VENDIDOS</p>
            <div className={style.destaqueDesc}>
                <h1>Produtos em Destaque</h1>
                <p>Ver catálogo Completo</p>
            </div>
            <div className={style.destaqueBlocos}>
                <div className={style.blocos}>
                        <img className={style.destaqueImagem} src={fotofone} alt="" />
                        <h2 className={style.destaqueName}>Headphone Bluetooth Pro Sound</h2>
                        <p className={style.destaquePrice}>Preço</p>
                        <p className={style.destaquePriceStrong}>R$349,90</p>
                        <div className={style.destaqueButtons}>
                            <div className={style.detalhes}>
                                <Eyes/>
                                <a href="#">Detalhes</a>
                            </div>
                            <div className={style.adicionar}>
                                <ShoppingCartSimpleIcon color="#ffff" weight="bold"/>
                                <a href="#">Adicionar</a>
                            </div>
                        </div>
                </div>
                <div className={style.blocos}>
                        <h2>SmartWatches</h2>
                        <p>Relógios inteligentes para o seu dia a dia</p>
                </div>
                <div className={style.blocos}>
                        <h2>Periféricos</h2>
                        <p>Mouses e teclados de alta precisao</p>
                </div>
                <div className={style.blocos}>
                        <h2>Monitores</h2>
                        <p>Telas gamers e profissionais</p>
                </div>                                                
            </div>
        </section>
    );
}