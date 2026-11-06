import {Link} from 'react-router-dom';
import style from './Carrinho.module.css';
import {Tote} from '@phosphor-icons/react';

export function Carrinho({itens}){
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
    return(
        <main className={style.container}>
            <h2>Seu Carrinho ({itens.length} {itens.length === 1 ? 'item' : 'itens'})</h2>
            <div>
                {itens.map((produto, index) => (
                    <div key={index} className={style.produtos}>
                        <img className={style.imagemprodutos} src={produto.imagem} alt={produto.nome} />
                        <div>
                            <h4>{produto.nome}</h4>
                            <p>R$ {produto.preco.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}