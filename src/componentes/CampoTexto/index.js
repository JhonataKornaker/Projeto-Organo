import './CampoTexto.css'

const CampoTexto = (pront) => {

    //PARA COLOCAR VARIAVEL QUE VEM COMO PARAMENTRO JUNTO COM STRING USA-SE O PADRAO ABAIXO
    const placeholderModificada = `${pront.placeholder}...`

//O useState é um hook do React que permite criar e gerenciar estados dentro de um 
//componente funcional. Ele retorna um array com duas posições: a primeira posição é 
//o valor do estado e a segunda posição é uma função para atualizar esse estado.
//   const [valor, setValor] = useState('')

    const aoDigitar = (evento) => {
        pront.aoAlterado(evento.target.value);
    }

    return (
        <div className='campo-texto'>
            <label>{pront.label}</label>
            <input value={pront.valor} onChange={aoDigitar} required={pront.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto;