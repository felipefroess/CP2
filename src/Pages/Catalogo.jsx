import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import style from './Catalogo.module.css';
import { MagnifyingGlass, SlidersHorizontal, Eye, ShoppingCartSimpleIcon, X } from '@phosphor-icons/react';

import fotofone from '../Imagens/fone-de-ouvido.avif';
import fotorelogio from '../Imagens/relogio.avif';
import fototeclado from '../Imagens/teclado.avif';
import fotomouse from '../Imagens/mouse.avif';
import fotomonitorgamer from '../Imagens/monitor-gamer.avif';
import fotofonetws from '../Imagens/fone-tws.avif';
import fotocaixasom from '../Imagens/caixa-som.avif';
import fotomonitorultrawide from '../Imagens/monitor-ultrawide.avif';

export function Catalogo({ onAdicionar }) {
    const [searchParams] = useSearchParams();
    const categoriaUrl = searchParams.get('categoria');

    const [busca, setBusca] = useState('');
    const [categoriaAtiva, setCategoriaAtiva] = useState(categoriaUrl || 'Todos');
    const [produtoModal, setProdutoModal] = useState(null);

    useEffect(() => {
        if (categoriaUrl) {
            setCategoriaAtiva(categoriaUrl);
        }
    }, [categoriaUrl]);

    const categorias = ['Todos', 'Fones & Áudio', 'Smartwatches', 'Periféricos', 'Monitores'];

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
            nome: 'Smartwatch Sport Active 2',
            categoria: 'Smartwatches',
            preco: 289.00,
            imagem: fotorelogio,
            descricao: 'Monitor cardíaco de precisão, mais de 30 modos de treino, GPS integrado e resistência à água de 5 ATM.'
        },
        {
            id: 3,
            nome: 'Teclado Mecânico RGB Wireless',
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
        },
        {
            id: 5,
            nome: 'Monitor Gamer 27" Curvo 165Hz',
            categoria: 'Monitores',
            preco: 1199.00,
            imagem: fotomonitorgamer,
            descricao: 'Painel curvo imersivo 1500R, taxa de 165Hz, 1ms de resposta e tecnologia AMD FreeSync para máxima fluidez em jogos.'
        },
        {
            id: 6,
            nome: 'Fone TWS Earbuds Bass Edition',
            categoria: 'Fones & Áudio',
            preco: 159.90,
            imagem: fotofonetws,
            descricao: 'Graves potentes, case de carregamento compacto, pareamento instantâneo via Bluetooth 5.3 e autonomia de 24 horas.'
        },
        {
            id: 7,
            nome: "Caixa de Som Portátil à Prova D'água",
            categoria: 'Fones & Áudio',
            preco: 249.90,
            imagem: fotocaixasom,
            descricao: 'Proteção IPX7 à prova dágua, som 360 graus de 30W RMS e bateria de até 12 horas para levar a música a qualquer lugar.'
        },
        {
            id: 8,
            nome: 'Monitor Ultrawide 34" IPS 100Hz',
            categoria: 'Monitores',
            preco: 1890.00,
            imagem: fotomonitorultrawide,
            descricao: 'Proporção 21:9 para máxima produtividade, resolução UWQHD, cores sRGB 99% e suporte ajustável de altura.'
        }
    ];

    const produtosFiltrados = produtos.filter((produto) => {
        const bateuCategoria = categoriaAtiva === 'Todos' || produto.categoria === categoriaAtiva;
        const bateuBusca = produto.nome.toLowerCase().includes(busca.toLowerCase());
        return bateuCategoria && bateuBusca;
    });

    return (
        <main className={style.container}>
            <div className={style.cabecalho}>
                <h1>Catálogo de Produtos</h1>
                <p>Explore nossa linha completa de tecnologia com as melhores opções para você.</p>
            </div>

            <div className={style.boxFiltros}>
                <div className={style.barraBusca}>
                    <MagnifyingGlass size={20} color="#94a3b8" />
                    <input
                        type="text"
                        placeholder="Buscar produtos por nome ou descrição..."
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                    />
                </div>

                <div className={style.filtroCategorias}>
                    <div className={style.filtroTitulo}>
                        <SlidersHorizontal size={18} color="#64748b" />
                        <span>Categorias:</span>
                    </div>

                    <div className={style.listaCategorias}>
                        {categorias.map((cat) => (
                            <button
                                key={cat}
                                className={categoriaAtiva === cat ? style.btnCategoriaAtivo : style.btnCategoria}
                                onClick={() => setCategoriaAtiva(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <p className={style.contador}>
                Exibindo {produtosFiltrados.length} produtos
            </p>

            <div className={style.gradeProdutos}>
                {produtosFiltrados.map((produto) => (
                    <div key={produto.id} className={style.card}>
                        <div className={style.imagemContainer}>
                            <span className={style.tagCategoria}>{produto.categoria}</span>
                            <img src={produto.imagem} alt={produto.nome} className={style.imagem} />
                        </div>

                        <div className={style.info}>
                            <h3 className={style.nome}>{produto.nome}</h3>
                            <p className={style.labelPreco}>Preço</p>
                            <p className={style.preco}>
                                R$ {produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </p>

                            <div className={style.botoes}>
                                <button className={style.btnDetalhes} onClick={() => setProdutoModal(produto)}>
                                    <Eye size={16} />
                                    <span>Detalhes</span>
                                </button>
                                <button
                                    className={style.btnAdicionar}
                                    onClick={() => onAdicionar(produto)}
                                >
                                    <ShoppingCartSimpleIcon size={16} color="#ffffff" weight="bold" />
                                    <span>Adicionar</span>
                                </button>
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
        </main>
    );
}
