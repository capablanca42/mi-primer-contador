import React from "react";

function MensajePersonalizado(props) {
  return (
  <div style={{textAlign:'center', fontSize:'20px'}}>
    Hola tu nombres es {props.nombre}, y tu apellido es {props.apellido}
  </div>
  )
}

export default MensajePersonalizado;
