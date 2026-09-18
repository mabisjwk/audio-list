function SeletorFaixas(props) {
    return (
        <button className='seletor'>
            <i className='bi bi-list-task'></i>
            <p>{`Faixa ${props.capAtual}`}</p>
        </button>
    )
}

export default SeletorFaixas;