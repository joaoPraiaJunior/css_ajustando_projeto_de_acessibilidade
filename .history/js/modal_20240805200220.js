function modal() {
    const elementos = {
        botaoModal: '[data-botao-modal]',
        tipoModal: '[data-tipo-modal]',
    }

    const botaoModal = document.querySelectorAll(elementos.botaoModal);
    const tipoModal = document.querySelectorAll(elementos.tipoModal);

    tipoModal.forEach(modal => {
        botaoModal.forEach(botao => {
            botao.addEventListener('click', () => {
                debugger;
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
        debugger
        const botaoClicado = botao.dataset.botaoModal;
        const tipoModalAtual = modal.dataset.tipoModal;
        if (botaoClicado === tipoModalAtual) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        } else {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
}

export default modal;