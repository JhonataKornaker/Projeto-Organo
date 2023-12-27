import Colaborador from '../colaborador'
import './Time.css'

const Time = (props) => {

    const css = {backgroundColor: props.corSecundaria}

    return (
        props.colaboradores.length > 0 ? <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
        : ''
    )
}
/*Se ? a condição > 00 for verdadeira, devolva a <section>, se não for verdade, devolva a string vazia ''. */
export default Time