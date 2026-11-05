import style from './Novidades.module.css';
import fotodivulgacao from '../Imagens/foto-divulgacao.avif';
import {Link} from 'react-router-dom';

export function Novidades(){
    return(
        <div className={style.divulgacao}>
            <div className={style.conteudo}>
                <h1>Tecnologia e Performance para o seu Setup</h1>
                <p>Encontre os melhores periféricos, fones e monitores com qualidade premium, garantia e os melhores preços para transformar o seu espaço</p>
                        <div className={style.botoes}>
                            <Link className={style.btncatalogo} to="/catalogo">Explorar Catálogo ⇨</Link>
                            <a href="#" className={style.btndestaques}>Ver destaques</a>
                        </div>
            </div>
                <div>
                    <img className={style.fotodivulgacao}src={fotodivulgacao} alt="" />
                </div>
        </div>
    );
}