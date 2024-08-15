import { mensagensDeErro, tiposDeErro } from "./validacoes-do-formulario.js";

function formulario() {

    const elementos = {
        formularios: '[data-tipo-formulario]',
        camposDoFormulario: '[required]',
        elementoMensagemDeErro: '[data-js="mensagem-de-erro"]',
        mensagemErroSucesso: '[data-js="formulario-mensagem-erro-sucesso"]',
        tituloDoFormulario: '[data-titulo-modal]',
    }

    const formularios = document.querySelectorAll(elementos.formularios);

    formularios.forEach(formulario => {
        pegarCamposDoFromulario(formulario);
        enviarFormulario(formulario);
        desativarMensagensDeErroPadrao(formulario);
    });

    function pegarCamposDoFromulario(formulario) {
        const camposDoFormulario = formulario.querySelectorAll(elementos.camposDoFormulario);
        camposDoFormulario.forEach(campo => {
            campo.addEventListener('blur', (evento) => validaCampo(campo, evento));
        });
    }

    function desativarMensagensDeErroPadrao(formulario) {
        formulario.addEventListener('invalid', (evento) => {
            evento.preventDefault();
            mensagemErroSucesso(formulario, false);
        }, true);
    }

    function validaCampo(campo, evento) {
        let mensagemDeErroCustomizada = '';
        campo.setCustomValidity('');

        tiposDeErro.forEach(erro => {
            if (campo.validity[erro]) {
                mensagemDeErroCustomizada = mensagensDeErro[campo.name][erro];
            }
        });

        const validadorDeInput = campo.validity.valid;
        let campoAlvo = evento.target;

        while (campoAlvo.dataset.js !== 'container-campo') {
            campoAlvo = campoAlvo.parentElement;
        }

        const elementoMensagemDeErro = campoAlvo.querySelector(elementos.elementoMensagemDeErro);


        if (!validadorDeInput) {
            elementoMensagemDeErro.textContent = mensagemDeErroCustomizada;
            elementoMensagemDeErro.setAttribute('tabindex', '0');
            elementoMensagemDeErro.setAttribute('aria-hidden', 'false');
            elementoMensagemDeErro.setAttribute('role', 'alert');

        } else {
            elementoMensagemDeErro.textContent = '';
            elementoMensagemDeErro.setAttribute('aria-disabled', 'true');
            elementoMensagemDeErro.removeAttribute('role');
            elementoMensagemDeErro.setAttribute('tabindex', '-1');
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
            mensagemErroSucesso.textContent = `Erro ao enviar o formulário de ${formulario.dataset.tipoFormulario}, verifique os campos obrigatórios!`;
            mensagemErroSucesso.style.color = 'red';
        }

        elementosQueManipulamMensagem(mensagemErroSucesso, formulario);

    }

    function elementosQueManipulamMensagem(mensagemErroSucesso, formulario) {
        const tituloFormulario = formulario.querySelector(elementos.tituloDoFormulario);
        mensagemErroSucesso.setAttribute('aria-hidden', 'false');
        mensagemErroSucesso.setAttribute('role', 'alert');
        mensagemErroSucesso.classList.add('contato__mensagem--ativo');
        tituloFormulario.focus();

        setTimeout(() => {
            mensagemErroSucesso.textContent = '';
            mensagemErroSucesso.setAttribute('aria-hidden', 'true');
            mensagemErroSucesso.removeAttribute('role');
            mensagemErroSucesso.removeAttribute('tabindex');
            mensagemErroSucesso.classList.remove('contato__mensagem--ativo');
        }, 10000);
    }

}

export default formulario;