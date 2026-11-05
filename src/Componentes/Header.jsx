import style from "./Header.module.css";
import {Basket} from '@phosphor-icons/react';
import {NavLink, Link} from 'react-router-dom';

export function Header(){
    return(
        <div>
            <header className={style.header}>
                <div className={style.logo}>
                    Byte
                    <span>Store</span>
                </div>
                <nav className={style.nav}>
                    <NavLink 
                        to="/"
                        end
                        className={({isActive}) => isActive ? style.ativo : ''}
                    >
                        Início
                    </NavLink>
                    <NavLink
                        to="/catalogo"
                        className={({isActive}) => isActive ? style.ativo: ''}
                    >
                        Catálogo
                    </NavLink>
                </nav>
                <div className={style.carrinho}>
                    <Basket/>
                    <NavLink 
                        id={style.carrinholink}
                        to="/carrinho"
                        className={({isActive}) => isActive ? style.ativo: ''}
                    >
                        Carrinho
                    </NavLink>
                </div>
            </header>
        </div>
    );
}