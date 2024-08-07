function modal() {
    const elementos = {
        abrirModal: '[data-abrir-modal]',
        tipoModal: '[data-tipo-modal]',
        fecharModal: '[data-js="fechar-modal"]',
        conteudoModal: '[data-js="conteudo-modal"]',
    }

    const abrirModal = document.querySelectorAll(elementos.abrirModal);
    const tipoModal = document.querySelectorAll(elementos.tipoModal);

    tipoModal.forEach(modal => {
        abrirModal.forEach(botao => {
            botao.addEventListener('click', () => {
                const ultimoBotaoAtivo = document.activeElement;
                ativarModal(botao, modal, ultimoBotaoAtivo);
            });

            document.addEventListener('keydown', (evento) => {
                const tecla = evento.key;
                if (tecla === 'Escape') {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        });
    });

    function ativarModal(botao, modal, ultimoBotaoAtivo) {
        const botaoClicado = botao.dataset.abrirModal;
        const tipoModalAtual = modal.dataset.tipoModal;
        if (botaoClicado === tipoModalAtual) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            console.log(modal)
            desativarModal(modal, ultimoBotaoAtivo);
            focoSomenteNoModal(modal);
        }

    }

    function desativarModal(modal, ultimoBotaoAtivo) {
        const botaoFecharModar = modal.querySelectorAll(elementos.fecharModal);
        botaoFecharModar.forEach(botao => {
            botao.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                ultimoBotaoAtivo.focus();
            });
        });
    }

    function focoSomenteNoModal(modal) {
        const containerDoModal = modal.querySelector(elementos.conteudoModal);
        const elementosDoModal = containerDoModal.getElementsByTagName('*');
        const primeiroElementoFocado = elementosDoModal[0];
        const ultimoElementoFocado = elementosDoModal[elementosDoModal.length - 1];

        containerDoModal.addEventListener('keydown', (evento) => {
            const tecla = evento.key;
            if (tecla === 'Tab') {
                if (evento.shiftKey) {
                    if (document.activeElement === primeiroElementoFocado) {
                        evento.preventDefault();
                        ultimoElementoFocado.focus();
                    }
                } else {
                    if (document.activeElement === ultimoElementoFocado) {
                        evento.preventDefault();
                        primeiroElementoFocado.focus();
                    }
                }
            }
        });

    }
}

export default modal;