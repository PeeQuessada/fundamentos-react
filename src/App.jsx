import "./App.css";

import React from "react";

import Primeiro from "./components/Primeiro";
import ComParametro from "./components/ComParametro";
import ComFilhos from "./components/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional";
import CondicionalComIf from "./components/CondicionalComIf";

export default function App(props) {
  return (
    <div className="App">
      
      <Card titulo="#5 Condicional v2">
        <CondicionalComIf numero={10}></CondicionalComIf>
      </Card>

      <Card titulo="#5 Condicional v1">
        <Condicional numero={1}></Condicional>
      </Card>

      <Card titulo="#4 Repeticao">
        <Repeticao></Repeticao>
      </Card>
      
      <Card titulo="#3 Componente com filhos">
        <ComFilhos>
          <ul>
            <li>Pedro</li>
            <li>Joao</li>
            <li>Carlos</li>
            <li>Ines</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card titulo="#2 Componente com Parametros">
        <ComParametro
          titulo="Esse eh o titlo"
          subtitulo="Esse eh o subtitulo"
        />
      </Card>

      <Card titulo="#1 Primeiro componente">
        <Primeiro></Primeiro>
      </Card>
    </div>
  );
}
