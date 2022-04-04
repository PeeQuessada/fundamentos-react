import "./App.css";

import React from "react";

import Card from "./components/layout/Card";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'

export default function App(props) {
  return (
    <div className="App">

      <Card titulo="#9 input" color="#008BBA">
        <Input></Input>
      </Card>

      <Card titulo="#8 Comunicao indireta" color="#008BBA">
        <Super sobrenome="Freitas"></Super>
      </Card>
      
      <Card titulo="#7 Comunicao direta" color="#008BBA">
        <Pai sobrenome="Freitas"></Pai>
      </Card>

      <Card titulo="#6 Condicional v2" color="#FA6900">
        <CondicionalComIf numero={10}></CondicionalComIf>
      </Card>

      <Card titulo="#5 Condicional v1" color="#FA6900">
        <Condicional numero={1}></Condicional>
      </Card>

      <Card titulo="#4 Repeticao" color="#FA6900">
        <Repeticao></Repeticao>
      </Card>
      
      <Card titulo="#3 Componente com filhos" color="#E94C6F">
        <ComFilhos>
          <ul>
            <li>Pedro</li>
            <li>Joao</li>
            <li>Carlos</li>
            <li>Ines</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card titulo="#2 Componente com Parametros" color="#E94C6F">
        <ComParametro
          titulo="Esse eh o titlo"
          subtitulo="Esse eh o subtitulo"
        />
      </Card>

      <Card titulo="#1 Primeiro componente" color="#E94C6F">
        <Primeiro></Primeiro>
      </Card>
    </div>
  );
}
