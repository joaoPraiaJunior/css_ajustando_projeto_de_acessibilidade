import { mensagensDeErro, tiposDeErro } from "./validacoes-do-formulario.js";

function formulario() {

    const elementos = {
        formularios: '[data-tipo-formulario]',
        camposDoFormulario: '[required]',
    }

    const formularios = document.querySelectorAll(elementos.formularios);

    formularios.forEach(formulario => {
            pegarCamposDoFromulario(formulario);
    });

    function pegarCamposDoFromulario(formulario) {
        const camposDoFormulario = formulario.querySelectorAll(elementos.camposDoFormulario);
        camposDoFormulario.forEach(campo => {
            campo.addEventListener('blur', () => validaCampo(campo));
            campo.addEventListener('invalid', (evento) => evento.preventDefault());
        });

    }

    function validaCampo(campo) {
       let mensagemDeErroCustomizada = '';
        campo.setCustomValidity('');

        tiposDeErro.forEach(erro => {
            if(campo.validity[erro]) {
                mensagemDeErroCustomizada = mensagensDeErro[campo.name][erro];
            }
        });

        const validadorDeInput = campo.checkValidity();

        if(!validadorDeInput) {
            campo.nextElementSibling.mensagemDeErroDoCampo(mensagemDeErroCustomizada);
        } else {
            campo.nextElementSibling.innerHTML = '';
        }

    }

    function mensagemDeErroDoCampo(mensagemDeErroCustomizada) {
        const span = document.createElement('span');
        span.textContent = mensagemDeErroCustomizada;
        span.classList.add('mensagem-de-erro');
        return span;
    }
}


export default formulario;