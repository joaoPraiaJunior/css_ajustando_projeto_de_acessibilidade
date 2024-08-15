import { mensagensDeErro, tiposDeErro } from "./validacoes-do-formulario.js";

function formulario() {

    const elementos = {
        formularios: '[data-tipo-formulario]',
        camposDoFormulario: '[required]',
        elementoMensagemDeErro: '[data-js="mensagem-de-erro"]',
        mensagemErroSucesso: '[data-js="formulario-mensagem-erro-sucesso"]',
    }

    const formularios = document.querySelectorAll(elementos.formularios);

    formularios.forEach(formulario => {
        pegarCamposDoFromulario(formulario);
        enviarFormulario(formulario);
    });

    function pegarCamposDoFromulario(formulario) {
        const camposDoFormulario = formulario.querySelectorAll(elementos.camposDoFormulario);
        camposDoFormulario.forEach(campo => {
            campo.addEventListener('blur', (evento) => validaCampo(campo, evento, formulario));
            campo.addEventListener('invalid', (evento) => evento.preventDefault());
        });

    }

    function validaCampo(campo, evento) {
        let mensagemDeErroCustomizada = '';
        campo.setCustomValidity('');

        tiposDeErro.forEach(erro => {
            if (campo.validity[erro]) {
                mensagemDeErroCustomizada = mensagensDeErro[campo.name][erro];
            }
        });

        const validadorDeInput = campo.checkValidity();
        let campoAlvo = evento.target;

        while (campoAlvo.dataset.js !== 'container-campo') {
            campoAlvo = campoAlvo.parentElement;
        }

        const elementoMensagemDeErro = campoAlvo.querySelector(elementos.elementoMensagemDeErro);


        if (!validadorDeInput) {
            elementoMensagemDeErro.textContent = mensagemDeErroCustomizada;
            elementoMensagemDeErro.setAttribute('aria-hidden', 'false');
            elementoMensagemDeErro.setAttribute('role', 'alert');
            elementoMensagemDeErro.setAttribute('tabindex', '0');
        } else {
            elementoMensagemDeErro.textContent = '';
            elementoMensagemDeErro.setAttribute('aria-hidden', 'true');
            elementoMensagemDeErro.removeAttribute('role');
            elementoMensagemDeErro.removeAttribute('tabindex');
        }

    }

    function enviarFormulario(formulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();
            if (formulario.checkValidity()) {
                pegarDadosDoFormulario(formulario);
                formulario.reset();
                mensagemErroSucesso(formulario, true);
            } 
                mensagemErroSucesso(formulario, false);
        
        });
    }

    function pegarDadosDoFormulario(formulario) {
        const camposDoFormulario = formulario.querySelectorAll(elementos.camposDoFormulario);
        const dadosDeUsuarios = JSON.parse(localStorage.getItem(`${formulario.dataset.tipoFormulario}`)) || [];
        const dadosDoFormulario = new Object();

        camposDoFormulario.forEach(campo => {
            dadosDoFormulario[campo.name] = campo.value;
        });

        console.log(dadosDoFormulario);

        dadosDeUsuarios.push(dadosDoFormulario);

        localStorage.setItem(`${formulario.dataset.tipoFormulario}`, JSON.stringify(dadosDeUsuarios));
    }


    function mensagemErroSucesso(formulario, sucesso) {
        const mensagemErroSucesso = formulario.querySelector(elementos.mensagemErroSucesso);
        if (sucesso) {
            mensagemErroSucesso.textContent = `Formulario de ${formulario.dataset.tipoFormulario} enviado com sucesso!`;
            mensagemErroSucesso.style.color = 'green';
        } else {
            mensagemErroSucesso.textContent = `Erro ao enviar de ${formulario.dataset.tipoFormulario} o formulário, verifique os campos obrigatórios!`;
            mensagemErroSucesso.style.color = 'red';
        }

        mensagemErroSucesso.focus();

    }

}

export default formulario;