import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './Paginas/Inicio'
import Projetos from "./Paginas/Projetos"
import Conhecimentos from './Paginas/Conhecimentos'
import Header from './Componentes/Header'


export default function AppRoutes() {
  return(
    <div className="main">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/projetos" element={<Projetos />}/>
          <Route path="/conhecimentos" element={<Conhecimentos />}/>
          <Route path="*" element={<div>Página não encontrada</div>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
