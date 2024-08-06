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
                alternaModal(botao, modal);
            });

            modal.addEventListener('keydown', (evento) => {
                const tecla = evento.key;
                if (tecla === 'Escape') {
                    alternaModal(false, modal);
                }
            });
        });
    });

    function alternaModal(botao, modal) {
        const botaoClicado = botao.dataset.botaoModal;
        const tipoModalAtual = modal.dataset.tipoModal;
        if (botaoClicado === tipoModalAtual) {
            modal.style.display = 'flex';
        } else {
            modal.style.display = 'none';
        }
    }
}

export default modal;