// Funcionalidades / Libs:
import { useNavigate } from 'react-router-dom';

// Assets:
// import aviso from '../../assets/aviso.png';
import camisa from '../../assets/camisa.gif';

// Estilos:
import './inicial.scss';


export function ConteudoInicial() {
    const navigate = useNavigate();


    function handleDownload() {
        setTimeout(()=> {
            navigate('/download');
        }, 300);
    }

    return (
        <div className='ConteudoInicial-container'>
            <div className='faixa-lancamento'>
                <p>{'{'} _Lançamento oficial_ &lt; <span>em breve</span> &gt; {'}'}</p>
            </div>

            <div className="content-main">
                <div className="grid">

                <div className='text'>
                    <h2>Não aguenta esperar <br className='br-text'/> até o dia do lançamento?</h2>
                    <h3>Tente baixar a foto de <br className='br2-text'/> divulgação dela aqui.</h3>
                    <p>
                        _ Mas avisamos: <br />
                        talvez ela seja <br className='br3-text'/> 
                        {'< pesada_demais >'} <br />
                        para o seu a aparelho.
                    </p>
                </div>
                
                <div className='camisa'>
                    <img src={camisa} alt="Silheta da camisa nova" />
                </div>

                <button className='btn-primary' onClick={handleDownload}>
                    <span>Baixe aqui</span>
                </button>

                </div>
            </div>
        </div>
  )
}