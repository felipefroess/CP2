import style from "./Header.module.css";
import {Basket} from '@phosphor-icons/react';

export function Header(){
    return(
        <div>
            <header className={style.header}>
                <div className={style.logo}>
                    Byte
                    <span>Store</span>
                </div>
                <nav className={style.nav}>
                    <a href="">Início</a>
                    <a href="">Catálogo</a>
                </nav>
                <div className={style.carrinho}>
                    <Basket/>
                    <a>Carrinho</a>
                </div>
            </header>
        </div>
    );
}