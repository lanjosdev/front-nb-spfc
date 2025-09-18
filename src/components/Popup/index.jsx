// Funcionalidades / Libs:
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Assets:
// import { FiX, FiCheckCircle } from 'react-icons/fi';

// Estilo:
import './popup.scss';


export function Popup({ liberado=true , closePopup }) {
    const [clicou, setClicou] = useState(false);
    const [confirmaPrevia, setConfirmaPrevia] = useState(false);

    const nomeRef = useRef('');
    const emailRef = useRef('');

    const navigate = useNavigate();


    function handleClose() {
        if(liberado) {
            closePopup();
        } else {
            if(confirmaPrevia) {
                navigate('/previa'); //prossiga para previa
            } else {
                navigate('/'); // volta pra tela inicial OU outra pagina qualquer
            }
        }
    }

    async function handleSubmitEmail(e) {
        e.preventDefault();
        
        const nome = nomeRef.current?.value;
        const email = emailRef.current?.value;

        if(nome !== '' && email !== '') {
            console.log(nome);
            console.log(email);

            // Colocar aqui o codigo de envio dos dados (nome + email)!

            handleClose();
        } else {
            console.log('ERRO: Form Incompleto!');
        }             
    }


    return (
        <div className="Popup-container">

            <div className="popup-window">
                <div className="top-close">
                    <button onClick={handleClose} type="button">X</button>
                </div>

                {liberado ? (
                <>
                <div className="aviso-parabens">
                    <h3>Parabéns, torcedor.</h3>
                    <p>
                        A imagem era pesada,
                        mas o seu dispositivo
                        não pipocou.
                    </p>
                </div>
                <div className="instrucoes">
                    <p>
                        Para visualizar os metadados no seu
                        dispositivo mobile, basta selecionar <br />
                        a foto e procurar por {"''Detalhes''"} no app <br /> 
                        de galeria de imagens do sistema operacional.
                    </p>
                </div>
                </>
                ) : (
                    !clicou ? (
                    <>
                    <div className="aviso-notDownload">
                        <p>
                            *Seu dispositivo não aguentou <br /> 
                            o peso de <span>{'{tanta_história}'}</span> <br />
                            {` e não conseguiu baixar a foto.`}
                        </p>
                    </div>
    
                    <div className="pergunta-spoiler">
                        <p>Deseja receber um detalhe <br /> da camisa?</p>
                    </div>
    
                    <div className="buttons">
                        <button 
                        className="btn-Sim" 
                        onClick={()=> {
                            setClicou(true);
                            setConfirmaPrevia(true);
                        }}>
                            SIM
                        </button>
    
                        <button 
                        className="btn-Nao"
                        onClick={()=> {
                            setClicou(true);
                            setConfirmaPrevia(false);
                        }}
                        >
                            NÃO
                        </button>
                    </div>
                    </>                    
                    ) : (
                    <>
                    <div className="aviso-receberEmail">
                        <p>
                            Para receber a foto  <br />
                            e o vídeo da camisa 
                            no dia do lançamento,
                            cadastre seu e-mail:
                        </p>
                    </div>
    
                    <form onSubmit={handleSubmitEmail}>
                        <div className="inputs-group">
                            <div className="input-div">
                                <label htmlFor="nome">Nome:</label>
                                <input type="text" id="nome" ref={nomeRef} required />
                            </div>
                            <div className="input-div">
                                <label htmlFor="email">E-mail:</label>
                                <input type="email" id="email" ref={emailRef} required />
                            </div>
                        </div>

                        <div className="buttons">
                            <button 
                            className="btn-Sim" 
                            >
                                SIM
                            </button>
        
                            <button 
                            className="btn-Nao"
                            type="button"
                            onClick={handleClose}
                            >
                                NÃO
                            </button>
                        </div>
                    </form>
                    </>
                    )
                )}
            </div>

        </div>
    )
}

// Modal.propTypes = {
//     closePopup: PropTypes.func.isRequired,
// }