function modal() {
    const elementos = {
        botaoModal: '[data-modal]',
        tipoModal: '[data-tipo-modal]',
    }

    const botaoModal = document.querySelectorAll(elementos.botaoModal);
    const tipoModal = document.querySelectorAll(elementos.tipoModal);

    tipoModal.forEach(tipo => {
        botaoModal.forEach(botao => {
            botao.addEventListener('click', () => {
                const botaoClicado = botao.dataset.modal;
                alternaModal(botaoClicado);
            });
        });
    });

    function alternaModal(botaoClicado) {
        if (botaoClicado === 'abrir') {

        }
    }
}

export default modal;