function modal() {
    const elementos = {
        abrirModal: '[data-abrir-modal]',
        tipoModal: '[data-tipo-modal]',
        fecharModal: '[data-js="fechar-modal"]',
        conteudoModal: '[data-js="conteudo-modal"]',
        focoDeNavegacao: 'data-foco',
        mensagemDeErro: '[data-js="mensagem-de-erro"]',
        formulario: '[data-tipo-formulario]',
        mensagemErroSucesso: '[data-js="formulario-mensagem-erro-sucesso"]',
    }

    const abrirModal = document.querySelectorAll(elementos.abrirModal);
    const tipoModal = document.querySelectorAll(elementos.tipoModal);

    let ultimoBotaoAtivo = null;

    tipoModal.forEach(modal => {
        abrirModal.forEach(botao => {
            botao.addEventListener('click', () => {
                ultimoBotaoAtivo = document.activeElement;
                ativarModal(botao, modal, ultimoBotaoAtivo);
            });
        });
    });

    
    document.addEventListener('keydown', (evento) => {
        const tecla = evento.key;
        if (tecla === 'Escape') {
            tipoModal.forEach(modal => {
                if (modal.style.display === 'flex') {
                    atributosQueDesativamOModal(modal, ultimoBotaoAtivo);
                }
            });
        }
    });


    function ativarModal(botao, modal, ultimoBotaoAtivo) {
        const botaoClicado = botao.dataset.abrirModal;
        const tipoModalAtual = modal.dataset.tipoModal;
        const focoDeNavegacao = modal.querySelector(`[${elementos.focoDeNavegacao}]`);
        if (botaoClicado === tipoModalAtual) {
            atributosQueAtivamOModal(modal, focoDeNavegacao)
            desativarModal(modal, ultimoBotaoAtivo);
            focoSomenteNoModal(modal);
        }
    }

    function atributosQueAtivamOModal(modal, focoDeNavegacao) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        focoDeNavegacao.focus();
    }

    function desativarModal(modal, ultimoBotaoAtivo) {
        const botaoFecharModal = modal.querySelectorAll(elementos.fecharModal);
        botaoFecharModal.forEach(botao => {
            botao.addEventListener('click', () => {
                atributosQueDesativamOModal(modal, ultimoBotaoAtivo);
            });
        });
    }

    function atributosQueDesativamOModal(modal, ultimoBotaoAtivo) {
        const formularioModal = modal.querySelector(elementos.formulario);
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        ultimoBotaoAtivo.focus();
        if (formularioModal) {
            limparFormularioModal(formularioModal);
        }
    }

    function limparFormularioModal(formularioModal) {
        const mensagensDeErro = formularioModal.querySelectorAll(elementos.mensagemDeErro);
        const mensagemErroSucesso = formularioModal.querySelector(elementos.mensagemErroSucesso);
        mensagemErroSucesso.textContent = '';
        mensagemErroSucesso.classList.remove('contato__mensagem--ativo');
        formularioModal.reset();

        mensagensDeErro.forEach(mensagem => {
            mensagem.textContent = '';
        });
    }

    function focoSomenteNoModal(modal) {
        const containerDoModal = modal.querySelector(elementos.conteudoModal);
        const elementosDoModal = containerDoModal.getElementsByTagName('*');
        const primeiroElementoFocado = [...elementosDoModal].find(elemento => elemento.hasAttribute(elementos.focoDeNavegacao));
        const ultimoElementoFocado = elementosDoModal[elementosDoModal.length - 1];

        containerDoModal.addEventListener('keydown', (evento) => {
            const tecla = evento.key;
            if (tecla === 'Tab') {
                if (evento.shiftKey) {
                    // Se o shift+tab estiver pressionado e o foco estiver no primeiro llemento o foco vai para o último elemento
                    if (document.activeElement === primeiroElementoFocado) {
                        ultimoElementoFocado.focus();
                        evento.preventDefault();
                    }
                } else {
                    // Se o tab estiver pressionado e o foco estiver no último elemento o foco vai para o primeiro elemento
                    if (document.activeElement === ultimoElementoFocado) {
                        primeiroElementoFocado.focus();
                        evento.preventDefault();
                    }
                }
            }
        });
    }
}

export default modal;