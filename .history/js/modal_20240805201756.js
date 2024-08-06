function modal() {
    const elementos = {
        botaoModal: '[data-botao-modal]',
        tipoModal: '[data-tipo-modal]',
        overlayModal: '[data-js="overlay-modal"]',
    }

    const botaoModal = document.querySelectorAll(elementos.botaoModal);
    const tipoModal = document.querySelectorAll(elementos.tipoModal);
    const overlayModal = document.querySelectorAll(elementos.overlayModal);

    tipoModal.forEach(modal => {
        botaoModal.forEach(botao => {
            botao.addEventListener('click', () => {
                alternaModal(botao, modal);
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

    function alternaModal(botao, modal) {
        const botaoClicado = botao.dataset.botaoModal;
        const tipoModalAtual = modal.dataset.tipoModal;
        if (botaoClicado === tipoModalAtual) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        } else {
            debugger;
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    overlayModal.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.parentElement.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
}

export default modal;