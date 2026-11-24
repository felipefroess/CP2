import {Link} from 'react-router-dom';
import style from './Carrinho.module.css';
import {Tote, Trash} from '@phosphor-icons/react';

export function Carrinho({itens, onRemoverItem, onLimparCarrinho}){
    if(!itens || itens.length === 0){
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
    const total = itens.reduce((acumulador, produto) => acumulador + produto.preco, 0);
    return(
        <main className={style.container}>
            <section className={style.produtosList}>
                <div className={style.limparCarrinho}>
                <h2>Seu Carrinho ({itens.length} {itens.length === 1 ? 'item' : 'itens'})</h2>
                <button onClick={onLimparCarrinho} className={style.btnLimpar}>
                    Limpar carrinho
                </button>
                </div>
                <div>
                    {itens.map((produto, index) => (
                        <div key={index} className={style.produtos}>
                            <img className={style.imagemprodutos} src={produto.imagem} alt={produto.nome} />
                            <div>
                                <h4>{produto.nome}</h4>
                                <p>R$ {produto.preco.toFixed(2)}</p>
                            </div>
                            <button onClick={() => onRemoverItem(index)} className={style.btnRemover} title="Remover produto">
                                <Trash size={20} color="#ef4444"/>
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            <div className={style.pedido}>
                <h2>Resumo do Pedido</h2>
                <div className={style.linhaResumo}>
                    <span>Subtotal dos produtos</span>
                    <strong>R${total.toFixed(2)}</strong>
                </div>
                <div className={style.linhaResumo}>
                    <span>Frete</span>
                    <span className={style.freteGratis}>Grátis</span>
                </div>
                <div>
                    <span className={style.badgeFrete}>✓ Voce ganhou Frete Grátis!</span>
                </div>
                <hr className={style.divisor}/>
                <div className={style.linhaTotal}>
                    <span>Total</span>
                    <strong className={style.valorTotal}>R$ {total.toFixed(2)}</strong>
                </div>
                <button className={style.btnFinalizar}>
                    Finalizar Compra →
                </button>
            </div>
        </main>
    );
}