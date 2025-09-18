// Funcionalidades / Libs:

// Assets:
import estrelas from '../../../assets/estrelas.png';

// Estilo:
import './cabecalho.scss';


export function Cabecalho() {
   
    return (
        <div className="top">
            <div className="grid">

            <img src={estrelas} alt="Títulos São Paulo Futebol Clube" />
            <h1>
            Vem aí a nova camisa do São Paulo F.C. <br />
            Tão pesada quanto <br id='br'/> a história do clube.
            </h1>

            </div>
        </div>
    )
}