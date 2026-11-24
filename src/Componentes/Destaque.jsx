import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Destaque.module.css';
import fotofone from '../Imagens/fone-de-ouvido.avif';
import fotorelogio from '../Imagens/relogio.avif';
import fototeclado from '../Imagens/teclado.avif';
import fotomouse from '../Imagens/mouse.avif';
import { Info, ShoppingCartSimpleIcon, X } from '@phosphor-icons/react';

export function Destaque({ onAdicionar }) {
    const [produtoModal, setProdutoModal] = useState(null);

    const produtos = [
        {
            id: 1,
            nome: 'Headphone Bluetooth Pro Sound',
            categoria: 'Fones & Áudio',
            preco: 349.90,
            imagem: fotofone,
            descricao: 'Cancelamento ativo de ruído, bateria com até 40h de duração e almofadas confortáveis para longas sessões de uso.'
        },
        {
            id: 2,
            nome: 'SmartWatch Sport Active 2',
            categoria: 'Smartwatches',
            preco: 289.00,
            imagem: fotorelogio,
            descricao: 'Monitor cardíaco de precisão, mais de 30 modos de treino, GPS integrado e resistência à água de 5 ATM.'
        },
        {
            id: 3,
            nome: 'Teclado Mecanico RGB Wireless',
            categoria: 'Periféricos',
            preco: 419.90,
            imagem: fototeclado,
            descricao: 'Teclas mecânicas responsivas, layout ergonômico, conexão sem fio 2.4GHz e iluminação RGB personalizada.'
        },
        {
            id: 4,
            nome: 'Mouse Gamer Sem Fio Ultraleve',
            categoria: 'Periféricos',
            preco: 199.90,
            imagem: fotomouse,
            descricao: 'Sensor óptico de alta precisão de 26.000 DPI, design ultraleve de 58g e bateria recarregável com até 80h de duração.'
        }
    ];

    return (
        <section id="destaques" className={style.destaque}>
            <p>MAIS VENDIDOS</p>
            <div className={style.destaqueDesc}>
                <h1>Produtos em Destaque</h1>
                <Link to="/catalogo" className={style.btnCatalogoCompleto}>
                    Ver catálogo Completo ➜
                </Link>
            </div>

            <div className={style.destaqueBlocos}>
                {produtos.map((produto) => (
                    <div key={produto.id} className={style.blocos}>
                        <img className={style.destaqueImagem} src={produto.imagem} alt={produto.nome} />
                        <h2 className={style.destaqueName}>{produto.nome}</h2>
                        <p className={style.destaquePrice}>Preço</p>
                        <p className={style.destaquePriceStrong}>
                            R$ {produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                        <div className={style.destaqueButtons}>
                            <div className={style.detalhes} onClick={() => setProdutoModal(produto)}>
                                <Info size={18} />
                                <span>Detalhes</span>
                            </div>
                            <div
                                className={style.adicionar}
                                onClick={() => onAdicionar(produto)}
                            >
                                <ShoppingCartSimpleIcon color="#ffffff" weight="bold" size={18} />
                                <span>Adicionar</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {produtoModal && (
                <div className={style.modalFundo} onClick={() => setProdutoModal(null)}>
                    <div className={style.modalConteudo} onClick={(e) => e.stopPropagation()}>
                        <button className={style.btnFecharModal} onClick={() => setProdutoModal(null)}>
                            <X size={20} />
                        </button>
                        <img src={produtoModal.imagem} alt={produtoModal.nome} className={style.modalImagem} />
                        <div className={style.modalInfo}>
                            <span className={style.modalCategoria}>{produtoModal.categoria}</span>
                            <h2>{produtoModal.nome}</h2>
                            <p className={style.modalDescricao}>{produtoModal.descricao}</p>
                            <div className={style.modalPrecoBox}>
                                <p className={style.modalLabelPreco}>Preço</p>
                                <p className={style.modalPreco}>
                                    R$ {produtoModal.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                            </div>
                            <button
                                className={style.btnAdicionarModal}
                                onClick={() => {
                                    onAdicionar(produtoModal);
                                    setProdutoModal(null);
                                }}
                            >
                                <ShoppingCartSimpleIcon size={18} color="#ffffff" weight="bold" />
                                <span>Adicionar ao Carrinho</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
