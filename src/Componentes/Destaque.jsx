import style from './Destaque.module.css';
import fotofone from '../Imagens/fone-de-ouvido.avif'
import fotorelogio from '../Imagens/relogio.avif'
import fototeclado from '../Imagens/teclado.avif'
import fotomouse from '../Imagens/mouse.avif'
import {Info} from '@phosphor-icons/react'
import {ShoppingCartSimpleIcon} from '@phosphor-icons/react'

export function Destaque({onAdicionar}){
    return(
        <section className={style.destaque}>
            <p>MAIS VENDIDOS</p>
            <div className={style.destaqueDesc}>
                <h1>Produtos em Destaque</h1>
                <p>Ver catálogo Completo ➜</p>
            </div>
            <div className={style.destaqueBlocos}>
                <div className={style.blocos}>
                        <img className={style.destaqueImagem} src={fotofone} alt="" />
                        <h2 className={style.destaqueName}>Headphone Bluetooth Pro Sound</h2>
                        <p className={style.destaquePrice}>Preço</p>
                        <p className={style.destaquePriceStrong}>R$349,90</p>
                        <div className={style.destaqueButtons}>
                            <div className={style.detalhes}>
                                <Info/>
                                <a href="#">Detalhes</a>
                            </div>
                            <div 
                                 className={style.adicionar}
                                 onClick={() => onAdicionar({
                                    id: 1,
                                    nome: "Headphone Bluetooth Pro Sound",
                                    preco: 349.90,
                                    imagem: fotofone
                                 })}
                            >
                                <ShoppingCartSimpleIcon color="#ffff" weight="bold"/>
                                <a>Adicionar</a>
                            </div>
                        </div>
                </div>
                <div className={style.blocos}>
                        <img className={style.destaqueImagem} src={fotorelogio} alt="" />
                        <h2 className={style.destaqueName}>SmartWatch Sport Active 2</h2>
                        <p className={style.destaquePrice}>Preço</p>
                        <p className={style.destaquePriceStrong}>R$289,00</p>
                        <div className={style.destaqueButtons}>
                            <div className={style.detalhes}>
                                <Info/>
                                <a href="#">Detalhes</a>
                            </div>
                            <div className={style.adicionar}
                                onClick={() => onAdicionar({
                                    id:2,
                                    nome: "SmartWatch Sport Active 2",
                                    preco: 289.00,
                                    imagem: fotorelogio
                                })}
                            >
                                <ShoppingCartSimpleIcon color="#ffff" weight="bold"/>
                                <a>Adicionar</a>
                            </div>
                        </div>
                </div>
                <div className={style.blocos}>
                        <img className={style.destaqueImagem} src={fototeclado} alt="" />
                        <h2 className={style.destaqueName}>Teclado Mecanico RGB Wireless</h2>
                        <p className={style.destaquePrice}>Preço</p>
                        <p className={style.destaquePriceStrong}>R$419,90</p>
                        <div className={style.destaqueButtons}>
                            <div className={style.detalhes}>
                                <Info/>
                                <a>Detalhes</a>
                            </div>
                            <div className={style.adicionar}
                                onClick={() => onAdicionar({
                                    id: 3,
                                    nome: "Teclado Mecanico RBG Wirelss",
                                    preco: 419.00,
                                    imagem: fototeclado
                                })}     
                            >
                                <ShoppingCartSimpleIcon color="#ffff" weight="bold"/>
                                <a>Adicionar</a>
                            </div>
                        </div>
                </div>
                <div className={style.blocos}>
                        <img className={style.destaqueImagem} src={fotomouse} alt="" />
                        <h2 className={style.destaqueName}>Mouse Gamer Sem Fio Ultraleve</h2>
                        <p className={style.destaquePrice}>Preço</p>
                        <p className={style.destaquePriceStrong}>R$199,90</p>
                        <div className={style.destaqueButtons}>
                            <div className={style.detalhes}>
                                <Info/>
                                <a href="#">Detalhes</a>
                            </div>
                            <div className={style.adicionar}
                                onClick={() => onAdicionar ({
                                    id: 4, 
                                    nome: "Mouse Gamer Sem Fio Ultraleve",
                                    preco: 199.90,
                                    imagem: fotomouse
                                })}
                            >
                                <ShoppingCartSimpleIcon color="#ffff" weight="bold"/>
                                <a>Adicionar</a>
                            </div>
                        </div>
                </div>                                                
            </div>
        </section>
    );
}