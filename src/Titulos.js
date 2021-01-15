import React, { useState } from "react";

function Titulos() {
  const [titulos, alterarTitulos] = useState([
    "Go Beyond",
    "Omelete",
    "Bivareocara",
    "React",
  ]);

  return (
    <>
      {titulos.map((title) => (
        <h1 key={title}>{title}</h1>
      ))}
    </>
  );
}

export default Titulos;
