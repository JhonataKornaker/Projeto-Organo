import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'


const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setimagem] = useState('');
    const [time, setTime] = useState('');

 /*
Para evitar que o comportamento padrão de submissão do formulário ocorra, 
que geralmente é o recarregamento da página.
Dessa forma, ao chamar o preventDefault() dentro da função aoSalvar, 
estamos impedindo que a página seja recarregada quando o formulário é submetido. 
Isso é útil quando queremos realizar algum processamento adicional antes de enviar os 
dados do formulário, como fazer uma requisição assíncrona ou realizar validações.
 */   
    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.colaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setimagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>    
            <CampoTexto 
            obrigatorio={true} 
            label="Nome" 
            placeholder="Digite o seu nome"
            valor={nome}
            aoAlterado={valor => setNome(valor)} />
            <CampoTexto 
            obrigatorio={true} 
            label="Cargo" 
            placeholder="Digite o seu cargo"
            valor={cargo}
            aoAlterado={valor => setCargo(valor)} />
            <CampoTexto 
            obrigatorio={true} 
            label="Imagem" 
            placeholder="Digite o endereço da imagem"
            valor={imagem}
            aoAlterado={valor => setimagem(valor)} />
            <ListaSuspensa 
            texto="Time" 
            itens = {props.times}
            valor={time}
            aoAlterado={valor => setTime(valor)} />
            <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Formulario;