import { mensagensDeErro, tiposDeErro } from "./validacoes-do-formulario.js";

function formulario() {

    const elementos = {
        formularios: '[data-tipo-formulario]',
        camposDoFormulario: '[required]',
        elementoMensagemDeErro: '[data-js="mensagem-de-erro"]',
        mensagemErroSucesso: '[data-js="formulario-mensagem-erro-sucesso"]',
        focoDeNavegacao: '[data-foco]',
    }

    const formularios = document.querySelectorAll(elementos.formularios);
    let tempoDaMensagemNaTela = 15000;
    let intervaloDaAnimacaoMensagem = null;

    formularios.forEach(formulario => {
        pegarCamposDoFormulario(formulario);
        enviarFormulario(formulario);
        desativarMensagensDeErroPadrao(formulario);
    });

    function pegarCamposDoFormulario(formulario) {
        const camposDoFormulario = formulario.querySelectorAll(elementos.camposDoFormulario);
        camposDoFormulario.forEach(campo => {
            campo.addEventListener('blur', () => validaCampo(campo));
        });
    }

    function desativarMensagensDeErroPadrao(formulario) {
        formulario.addEventListener('invalid', (evento) => {
            evento.preventDefault();
            mensagemErroSucesso(formulario, false);
        }, true);
    }

    function validaCampo(campo) {
        let mensagemDeErroCustomizada = '';
        campo.setCustomValidity('');

        for (const erro of tiposDeErro) {
            if (campo.validity[erro]) {
                mensagemDeErroCustomizada = mensagensDeErro[campo.name][erro];
                break;
            }
        }

        atualizarMensagemDeErro(campo, mensagemDeErroCustomizada, campo.validity.valid);
    }

    function atualizarMensagemDeErro(campo, mensagemDeErroCustomizada, validadorDeInput) {

        const campoAlvo = encontrarElementoMensagemDeErro(campo);
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

    function encontrarElementoMensagemDeErro(campo) {
        let campoAlvo = campo;

        while (campoAlvo && campoAlvo.dataset.js !== 'container-campo') {
            campoAlvo = campoAlvo.parentElement;
        }

        return campoAlvo;
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
        const dadosDoFormulario = new Object();

        camposDoFormulario.forEach(campo => {
            dadosDoFormulario[campo.name] = campo.value;
        });

        console.log(dadosDoFormulario);

        salvarDadosDoUsuario(formulario, dadosDoFormulario);
    }


    function salvarDadosDoUsuario(formulario, dadosDoFormulario) {
        const dadosDeUsuarios = JSON.parse(localStorage.getItem(`${formulario.dataset.tipoFormulario}`)) || [];

        dadosDeUsuarios.push(dadosDoFormulario);

        localStorage.setItem(`${formulario.dataset.tipoFormulario}`, JSON.stringify(dadosDeUsuarios));
    }


    function mensagemErroSucesso(formulario, sucesso) {
        const mensagemErroSucesso = formulario.querySelector(elementos.mensagemErroSucesso);

        if (sucesso) {
            mensagemErroSucesso.textContent = `Formulário de ${formulario.dataset.tipoFormulario} enviado com sucesso!`;
            mensagemErroSucesso.style.color = '#008000';
        } else {
            mensagemErroSucesso.textContent = `Erro ao enviar o formulário de ${formulario.dataset.tipoFormulario}, verifique os campos obrigatórios!`;
            mensagemErroSucesso.style.color = '#bf0000';
        }

        resetarParaReiniciarAnimacao();
        atributosQueManipulamMensagem(formulario, mensagemErroSucesso);

    }

    function atributosQueManipulamMensagem(formulario, mensagemErroSucesso) {
        const focoDeNavegacao = formulario.querySelector(elementos.focoDeNavegacao);
        mensagemErroSucesso.setAttribute('aria-hidden', 'false');
        mensagemErroSucesso.setAttribute('role', 'alert');
        mensagemErroSucesso.classList.add('contato__mensagem--ativo');
        focoDeNavegacao.focus();

        animacaoDaMensagemDeErroSucesso(mensagemErroSucesso);
    }

    function animacaoDaMensagemDeErroSucesso(mensagemErroSucesso) {
        intervaloDaAnimacaoMensagem = setTimeout(() => {
            mensagemErroSucesso.textContent = '';
            mensagemErroSucesso.setAttribute('aria-hidden', 'true');
            mensagemErroSucesso.removeAttribute('role');
            mensagemErroSucesso.removeAttribute('tabindex');
            mensagemErroSucesso.classList.remove('contato__mensagem--ativo');
        }, tempoDaMensagemNaTela);
    }

    function resetarParaReiniciarAnimacao() {
        if (intervaloDaAnimacaoMensagem) {
            clearTimeout(intervaloDaAnimacaoMensagem);
            intervaloDaAnimacaoMensagem = null;
        }
    }
}

export default formulario;