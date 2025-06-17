import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contador from "./Contador";
import Formulario from "./Formulario";
import ContadorPersonalizado from "./ContadorPersonalizado";

function Inicio() {
  return <h2>Página de inicio</h2>
}

function Acercade() {
  return <h2>Elaborado por Kléber R.</h2>
}

function Navegacion(props) {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/contador">Contador</Link> | 
        <Link to="/form">Registra tu nombre</Link> | <Link to="/contadorpers">Contador Personalizado</Link> |
        <Link to="/acercade">Acerca de</Link>
      </nav>
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="/contador" element={ <Contador /> } />
        <Route path="/form" element={ <Formulario /> } />
        <Route path="/contadorpers" element={ <ContadorPersonalizado valor="5"/> } />
        <Route path="/acercade" element={ <Acercade /> } />
      </Routes>
    </Router>
  );
}

export default Navegacion;
