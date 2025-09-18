// Funcionalidades / Libs:
import { useState, useEffect } from 'react';

// Components:
import { Cabecalho } from '../../components/Elements/Cabecalho';
import { Rodape } from '../../components/Elements/Rodape';
import { ConteudoDownload } from '../../components/ConteudoDownload';
import { Popup } from '../../components/Popup';

// Assets:

export default function PageDownload() {
  const [downloadLiberado, setDownloadLiberado] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Simulando download:
  useEffect(()=> {        
    setDownloadLiberado(false);
    setTimeout(()=> {
      setShowPopup(true);
    }, 5000);    
  }, []);


  return (
    <div className='PageDownload-container'>
      <Cabecalho />

      <div className="content">
        <ConteudoDownload />
      </div>

      <Rodape />     

      {showPopup ? <Popup liberado={downloadLiberado} closePopup={()=>setShowPopup(false)} /> : null }
    </div>
  )
}