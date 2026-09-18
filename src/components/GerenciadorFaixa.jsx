const GerenciadorFaixa = ({
  faixa,
  referencia,
  definirTempoAtual,
  definirTempoDuracao,
}) => {
  return (
    <audio
      src={faixa}
      ref={referencia}
      onLoadedMetadata={() => definirTempoDuracao(referencia.current.duration)}
      onTimeUpdate={() => definirTempoAtual(referencia.current.currentTime)}
    ></audio>
  );
};

export default GerenciadorFaixa;
