import {Link} from 'react-router-dom';
import style from './Carrinho.module.css';
import {Tote} from '@phosphor-icons/react';

export function Carrinho(){
    return(
        <main className={style.container}>
            <div className={style.carrinho}>
                <Tote size={40} color='#4f46e5' className={style.tote}/>
                <h2>Seu carrinho está vazio</h2>
                <p className={style.carrinhodesc}>Você ainda não adicionou nenhum item. Que tal explorar os nossos produtos e encontrar algo incrível?</p>
                <Link className={style.btncatalogo} to="/catalogo">Explorar Catálogo →</Link>
            </div>
        </main>
    )
}