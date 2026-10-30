import style from './Footer.module.css';
import {Truck} from '@phosphor-icons/react';
import {ShieldCheckIcon} from '@phosphor-icons/react';
import {Headphones} from '@phosphor-icons/react';

export function Footer(){
    return(
        <footer>
            <div className={style.conteudo}>
                <div className={style.frete}>
                    <Truck className={style.icon}/>
                    <div className={style.title}>
                        <h2 className={style.subtitle}>Frete Rápido</h2>
                        <p className={style.desc}>Envio para todo o Brasil com código de rastreio</p>
                    </div>
                </div>
                <div className={style.garantia}>
                    <ShieldCheckIcon className={style.icon}/>
                    <div className={style.title}>
                        <h2 className={style.subtitle}>Garantia Total</h2>
                        <p className={style.desc}>Produtos 100% originais e com nota fiscal</p>
                    </div>
                </div>
                <div className={style.garantia}>
                    <Headphones className={style.icon}/>
                    <div className={style.title}>
                        <h2 className={style.subtitle}>Suporte Especializado</h2>
                        <p className={style.desc}>Atendimento rápido e equipe pronta para ajudar</p>
                    </div>
                </div>                
            </div>
        </footer>
    );
}