import { mensagensDeErro, tiposDeErro } from "./validacoes-do-formulario";

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
        mensagemDeErroCustomizada = '';
        campo.setCustomValidity('');

        tiposDeErro.forEach(erro => {
            if(campo.validity[erro]) {
                mensagemDeErroCustomizada = mensagensDeErro[campo.name][erro];
            }
        });

    }
}


export default formulario;