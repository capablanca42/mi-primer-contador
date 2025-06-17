import React, { useState } from 'react';

function Formulario(props) {
  const [nombre, setNombre] = useState('');
  
  const manejarCambio = (e) => {
    console.log(e.target.value);
    setNombre(e.target.value);
  }

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log(`Hola ${nombre}`);
  }

  return (
    <form onSubmit={manejarEnvio}>
      <input type="text" value={nombre} placeholder='Escribe tu nombre' onChange={manejarCambio} />
      <button type="submit">Enviar</button>
      <div>
        Hola, como estás {nombre}
      </div>
    </form>
  );
}

export default Formulario;