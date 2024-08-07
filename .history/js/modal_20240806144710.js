function modal() {
    const elementos = {
        abrirModal: '[data-abrir-modal]',
        tipoModal: '[data-tipo-modal]',
        fecharModal: '[data-js="fechar-modal"]',
    }

    const abrirModal = document.querySelectorAll(elementos.abrirModal);
    const tipoModal = document.querySelectorAll(elementos.tipoModal);

    tipoModal.forEach(modal => {
        abrirModal.forEach(botao => {
            botao.addEventListener('click', () => {
                const ultimoBotaoAtivo = document.activeElement;
                mostrarModal(botao, modal, ultimoBotaoAtivo);
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

    function mostrarModal(botao, modal, ultimoBotaoAtivo) {
        const botaoClicado = botao.dataset.abrirModal;
        const tipoModalAtual = modal.dataset.tipoModal;
        if (botaoClicado === tipoModalAtual) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        fecharModal(modal, ultimoBotaoAtivo);
    }

    function fecharModal(modal, ultimoBotaoAtivo) {
        const botaoFecharModar = modal.querySelectorAll(elementos.fecharModal);
        botaoFecharModar.forEach(botao => {
            botao.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                ultimoBotaoAtivo.focus();
            });
        });
    }
}

export default modal;