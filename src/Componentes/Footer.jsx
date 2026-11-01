import style from './Footer.module.css';
import {Truck} from '@phosphor-icons/react';
import {ShieldCheckIcon} from '@phosphor-icons/react';
import {Headphones} from '@phosphor-icons/react';
import FotoPix from '../Imagens/pix.png';
import FotoVisa from '../Imagens/visa.webp';
import FotoMaster from '../Imagens/mastercard.webp';
import FotoCompraSegura from '../Imagens/comprasegura.webp';

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
            <div className={style.sobre}>
                <div>
                    <div className={style.logo}>
                        <span id={style.byte}>Byte</span>
                        <span>Store</span>
                    </div>
                    <p>Sua loja especializada em periféricos, gadgets e tecnologia de ponta. Levando inovação e máxima performance para o seu setup.</p>
                </div>
                <div className={style.pagamento}>
                    <span>Pagamento & Segurança</span>
                    <div className={style.bancos}>
                        <img className={style.fotopix} src={FotoPix} alt="" />
                        <img className={style.fotovisa} src={FotoVisa} alt="" />
                        <img className={style.fotomaster}src={FotoMaster} alt="" />
                    </div>
                    <div>
                        <img className={style.fotocompra} src={FotoCompraSegura} alt="" />
                    </div>
                </div>
            </div>
            <div className={style.subfooter}>
                <p>Projeto Trainee desenvolvido por Felipe Fróes para a CP2eJr</p>
            </div>
        </footer>
    );
}