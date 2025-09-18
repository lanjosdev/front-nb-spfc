// Funcionalidades / Libs:
import { BrowserRouter } from 'react-router-dom';

// Components:
import AppRoutes from './routes'; //Config de rotas

// Estilo Global:
import './styles/global.scss';


export default function App() {

  return (
    <BrowserRouter>  

      <AppRoutes/>

    </BrowserRouter>
  )
}