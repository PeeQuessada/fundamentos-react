import React, { useState } from "react";

export default function Input() {
  const [nome, setNome] = useState("Pedro");

  return (
    <div>
        <h1>{nome}</h1>
      <input
        type="text"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      ></input>
    </div>
  );
}
