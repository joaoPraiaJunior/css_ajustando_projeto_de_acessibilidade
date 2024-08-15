function modal() {
    const elementos = {
        abrirModal: '[data-abrir-modal]',
        tipoModal: '[data-tipo-modal]',
        fecharModal: '[data-js="fechar-modal"]',
        conteudoModal: '[data-js="conteudo-modal"]',
        tituloDoModal: 'data-titulo-modal',
        mensagemDeErro: '[data-js="mensagem-de-erro"]',
        formulario: '[data-tipo-formulario]',
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

            document.addEventListener('keydown', (evento) => {
                const tecla = evento.key;
                if (tecla === 'Escape') {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                    ultimoBotaoAtivo.focus();
                }
            });
        });
    });

    function ativarModal(botao, modal, ultimoBotaoAtivo) {
        const botaoClicado = botao.dataset.abrirModal;
        const tipoModalAtual = modal.dataset.tipoModal;
        const tituloDoModal = modal.querySelector(`[${elementos.tituloDoModal}]`);
        if (botaoClicado === tipoModalAtual) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            tituloDoModal.focus();
            desativarModal(modal, ultimoBotaoAtivo);
            focoSomenteNoModal(modal);
        }
    }

    function desativarModal(modal, ultimoBotaoAtivo) {
        const botaoFecharModal = modal.querySelectorAll(elementos.fecharModal);
        const formularioModal = modal.querySelector(elementos.formulario);
        botaoFecharModal.forEach(botao => {
            botao.addEventListener('click', () => {
                elementosQueDesativamOModal(modal, ultimoBotaoAtivo);
                if (formularioModal) {
                    limparFormuLarioModal(formularioModal);
                }
            });
        });
    }

    function elementosQueDesativamOModal(modal, ultimoBotaoAtivo) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        ultimoBotaoAtivo.focus();
    }

    function limparFormuLarioModal(formularioModal) {
        const mensagensDeErro = formularioModal.querySelectorAll(elementos.mensagemDeErro);
        formularioModal.reset();

        mensagensDeErro.forEach(mensagem => {
            mensagem.textContent = '';
        });
    }

    function focoSomenteNoModal(modal) {
        const containerDoModal = modal.querySelector(elementos.conteudoModal);
        const elementosDoModal = containerDoModal.getElementsByTagName('*');
        const primeiroElementoFocado = [...elementosDoModal].find(elemento => elemento.hasAttribute(elementos.tituloDoModal));
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
                        evento.preventDefault();;
                    }
                }
            }
        });
    }
}

export default modal;