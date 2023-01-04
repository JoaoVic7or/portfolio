import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './Paginas/Inicio'
import Projetos from "./Paginas/Projetos"
import Conhecimentos from './Paginas/Conhecimentos'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Contato from "./Paginas/Contato";

export default function AppRoutes() {
  return(
    <div className="main">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio title="João Victor"/>}/>
          <Route path="/projetos" element={<Projetos title="João Victor | Projetos"/>}/>
          <Route path="/conhecimentos" element={<Conhecimentos title="João Victor | Conhecimentos"/>}/>
          <Route path="/contato" element={<Contato />}/>
          <Route path="*" element={<div>Página não encontrada</div>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
