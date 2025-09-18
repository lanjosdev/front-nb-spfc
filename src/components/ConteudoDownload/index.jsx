// Funcionalidades / Libs:

// Components:

// Assets:
import camisa from '../../assets/camisa2.gif';
import logoNB from '../../assets/NBLogo.png';
import escudo from '../../assets/EscudoEscrito.png';
import loadingBar from '../../assets/Loading.gif';

// Estilos:
import './download.scss';


export function ConteudoDownload() {


    return (
        <div className='Download-container'>
            <div className="grid">
            
            <div className="title-escudo">
                <h2>Baixando <br /> a imagem...</h2>
                <img src={escudo} alt="" />
            </div>

            <div className="camisa-logo">
                <img className='camisa' src={camisa} alt="" />
                <img className='logoNB' src={logoNB} alt="" />
            </div>

            {/* Usar position absolute para sobrepor no centro */}
            <div className="loading-geral">
                <div className='loading-aviso'>

                    <div className="loading-bar">
                        <h4>Loading Bar:</h4>
                        {/* Irá inserir uma barra animada */}
                        <img src={loadingBar} alt="" />
                    </div>

                    <div className="aviso">
                        <h4>aviso:</h4>
                        <p>Essa camisa carrega <br /> o peso de três Mundiais. <br />Seu dispositivo tem espaço pra tanta história? <br />_</p>
                    </div>

                </div>
            </div>

            </div>
        </div>
    )
}