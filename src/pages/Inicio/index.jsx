// Funcionalidades / Libs:
// import { useState, useEffect } from 'react';

// Components:
import { Cabecalho } from '../../components/Elements/Cabecalho';
import { Rodape } from '../../components/Elements/Rodape';
import { ConteudoInicial } from '../../components/ConteudoInicial';

// Assets:


export default function Inicio() {


  return (
    <div className='Inicio-container'>
      <Cabecalho />

      <div className="content">
        <ConteudoInicial />
      </div>

      <Rodape />
    </div>
  )
}