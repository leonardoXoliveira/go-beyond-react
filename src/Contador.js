import React, { useState } from "react";

import "./Contador.css";

function Contador() {
  const [contagem, alterarContagem] = useState(0);

  function diminuir() {
    alterarContagem(contagem - 1);
  }

  function aumentar() {
    alterarContagem(contagem + 1);
  }

  return (
    <>
      <button onClick={diminuir}>Diminuir</button>
      <div>{contagem}</div>
      <button onClick={aumentar}>Aumentar</button>
    </>
  );
}

export default Contador;
