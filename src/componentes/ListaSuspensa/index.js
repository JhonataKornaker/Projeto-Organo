import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista'>
            <label>{props.texto}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

/*mapear sobre os itens fornecidos como propriedade (props.itens). Para cada item na lista, 
ele cria um elemento <option> no HTML. O atributo key={item} é utilizado para garantir a unicidade 
de cada opção na lista. O texto dentro de cada <option> é o valor do item. */

export default ListaSuspensa