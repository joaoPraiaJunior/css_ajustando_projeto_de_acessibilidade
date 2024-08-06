function modal() {
    const elementos = {
        botaoModal: '[data-modal]',
        tipoModal: '[data-tipo-modal]',
    }

    const botaoModal = document.querySelectorAll(elementos.botaoModal);

    botaoModal.forEach(botao => {
        botao.addEventListener('click', () => {
            const botaoClicado = botao.dataset.modal;
            alternaModal(botaoClicado);
        });
    });

    function alternaModal(botaoClicado) {
        if(botaoClicado === 'abrir') {
            
        }
    }
}

export default modal;