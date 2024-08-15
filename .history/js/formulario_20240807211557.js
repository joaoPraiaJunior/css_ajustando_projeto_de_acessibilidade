import { mensagensDeErro, tiposDeErro } from "./validacoes-do-formulario.js";

function formulario() {

    const elementos = {
        formularios: '[data-tipo-formulario]',
        camposDoFormulario: '[required]',
        elementoMensagemDeErro: '[data-js="mensagem-de-erro"]'
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
            if (campo.validity[erro]) {
                mensagemDeErroCustomizada = mensagensDeErro[campo.name][erro];
            }
        });

        const validadorDeInput = campo.checkValidity();
        const elementoMensagemDeErro = campo.parentElement.querySelector(elementos.elementoMensagemDeErro);
        console.log(campo.validity);

        if (!validadorDeInput) {
            elementoMensagemDeErro.textContent = mensagemDeErroCustomizada;
            elementoMensagemDeErro.setAttribute('role', 'alert');
            elementoMensagemDeErro.setAttribute('aria-hidden', 'false');
            elementoMensagemDeErro.setAttribute('tabindex', '0');
        } else {
            elementoMensagemDeErro.textContent = '';
        }

    }

}


export default formulario;