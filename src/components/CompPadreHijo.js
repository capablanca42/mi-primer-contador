import React from "react";
function Saludo(props){
  return (
    <h1>Hola, {props.nombre}</h1>
  )
}


function CompPadreHijo(props) {
  return (
    <div>
      <h2>Universidad Católica</h2>
      <Saludo nombre="Juan" />
    </div>
  );
}

export default CompPadreHijo;
