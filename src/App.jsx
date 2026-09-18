import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import imgRainbow from "./assets/rainboww.jpg";
import musica from './assets/sons/musica';

import { useState, useRef } from "react";
import BotoesControle from "./components/BotoesControle";
import CapaMusica from "./components/CapaMusica";
import SeletorFaixas from "./components/SeletorFaixas";
import GerenciadorFaixa from "./components/GerenciadorFaixa";

function App() {
  const [taTocando, setTocando] = useState(false);
  const [faixaAtual, setFaixaAtual] = useState(0);
  const tagAudio = useRef(null);

  const infosLivro = {
    nome: "Butterfly",
    autor: "Mariah Carey",
    totalCap: 12,
    capa: imgRainbow,
    faixas: musica,
    textoAlternativo: "Capa do álbum Butterfly de Mariah Carey",
  };

  const tocarFaixa = () => {
    tagAudio.current.play();
    setTocando(true);
  };

  const pausarFaixa = () => {
    tagAudio.current.pause();
    setTocando(false);
  };

  const tocarOuPausarFaixa = () => {
    if (taTocando) {
      pausarFaixa();
    } else {
      tocarFaixa();
    }
  };

  return (
    <>
      <CapaMusica
        imgCapa={infosLivro.capa}
        textoAlternativo={infosLivro.textoAlternativo}
      />

      <SeletorFaixas capAtual={faixaAtual + 1} />

      <GerenciadorFaixa faixa={infosLivro.faixas[faixaAtual]} referencia={tagAudio}/>

      <BotoesControle
        taTocando={taTocando}
        tocarOuPausarFaixa={tocarOuPausarFaixa}
      />
    </>
  );
}

export default App;
