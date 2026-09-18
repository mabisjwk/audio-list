import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import imgRainbow from "./assets/rainboww.jpg";
import musica from "./assets/sons/musica";

import { useState, useRef, useEffect } from "react";
import BotoesControle from "./components/BotoesControle";
import CapaMusica from "./components/CapaMusica";
import SeletorFaixas from "./components/SeletorFaixas";
import GerenciadorFaixa from "./components/GerenciadorFaixa";

function App() {

  const [taTocando, setTocando] = useState(false);
  const [faixaAtual, setFaixaAtual] = useState(0);
  const tagAudio = useRef(null);

  useEffect(() => {
    if(taTocando) {
      tocarFaixa();
    }
  }, [
    faixaAtual
  ])

  const infosAlbum = {
    nome: "Butterfly",
    autor: "Mariah Carey",
    totalFaixa: musica.length,
    capa: imgRainbow,
    faixas: musica,
    textoAlternativo: "Capa do álbum Butterfly de Mariah Carey",
  };

  function tocarFaixa() {
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

  const avancarFaixa = () => {
    if (infosAlbum.totalFaixa === faixaAtual + 1) {
      setFaixaAtual(0);
    } else {
      setFaixaAtual(faixaAtual + 1);
    }
  };

  const retrocederFaixa = () => {
    if (faixaAtual === 0) {
      setFaixaAtual(infosAlbum.totalFaixa - 1);
    } else {
      setFaixaAtual(faixaAtual - 1);
    }
  };

  const avancar15s = () => {
    tagAudio.current.currentTime += 15
  }

  const retroceder15s = () => {
    tagAudio.current.currentTime -= 15
  }

  return (
    <>
      <CapaMusica
        imgCapa={infosAlbum.capa}
        textoAlternativo={infosAlbum.textoAlternativo}
      />

      <SeletorFaixas capAtual={faixaAtual + 1} />

      <GerenciadorFaixa
        faixa={infosAlbum.faixas[faixaAtual]}
        referencia={tagAudio}
      />

      <BotoesControle
        taTocando={taTocando}
        tocarOuPausarFaixa={tocarOuPausarFaixa}
        avancarFaixa={avancarFaixa}
        retrocederFaixa={retrocederFaixa}
        avancar15s={avancar15s}
        retroceder15s={retroceder15s}
      />
    </>
  );
}

export default App;
