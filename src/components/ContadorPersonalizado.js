import React, { useState } from "react";

function ContadorPersonalizado({valor}) {
  const [contador, setContador] = useState(Number(valor));
  
  const handleIncrementar = () => {
    setContador( contador + 1);
    console.log("El valor del contador: ", contador);
  }
  
  const handleDecrementar = () => {
    if(contador >-10)
      setContador( contador - 1);
    console.log("El valor del contador: ", contador);
  }

  return <div style={{textAlign:'center', fontSize:'22px'}}>
    <h2>Este es el valor del Contador: {contador}</h2>
    <button onClick={handleIncrementar}>Incrementar</button>
    <button onClick={handleDecrementar} >Decrementar</button>
  </div>;
}

export default ContadorPersonalizado;
