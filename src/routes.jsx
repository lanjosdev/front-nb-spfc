// Funcionalidades / Libs:
import { Routes, Route } from "react-router-dom";

// Pages:
import Inicio from "./pages/Inicio";
import PageDownload from "./pages/PageDownload";
import Final from "./pages/Final";

// Components:


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Inicio /> } />

            <Route path="/download" element={ <PageDownload /> } />

            <Route path="/previa" element={ <Final /> } />

        </Routes>
    )
}