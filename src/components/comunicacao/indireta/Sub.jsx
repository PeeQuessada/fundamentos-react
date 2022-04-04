import React from "react";

export default function Sub(props) {
  function Alterar2(event) {
    props.onQuandoClicar(Math.random(), 'Gerado')
  }
 
  return (
    <div>
      <div>
        <button
          onClick={() => {
            props.onQuandoClicar(Math.random(), 'Gerado');
          }}
        >
          Alterar 1
        </button>
      </div>
      <div>
        <button onClick={Alterar2}>Alterar 2</button>
      </div>
    </div>
  );
}
