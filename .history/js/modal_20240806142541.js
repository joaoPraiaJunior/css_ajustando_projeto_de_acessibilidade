function modal() {
    const elementos = {
        abrirModal: '[data-abrir-modal]',
        tipoModal: '[data-tipo-modal]',
        fechaModal: '[data-js="fechar-modal"]',
    }

    const abrirModal = document.querySelectorAll(elementos.abrirModal);
    const tipoModal = document.querySelectorAll(elementos.tipoModal);

    tipoModal.forEach(modal => {
        abrirModal.forEach(botao => {
            botao.addEventListener('click', () => {
                const ultimoBotaoAttivo = botao.activeElement;
                mostrarModal(botao, modal, ultimoBotaoAttivo);
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

    function mostrarModal(botao, modal, ultimoBotaoAttivo) {
        const botaoClicado = botao.dataset.botaoModal;
        const tipoModalAtual = modal.dataset.tipoModal;
        if (botaoClicado === tipoModalAtual) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        } else {
            fecharModal(modal);
            ultimoBotaoAttivo.focus();
        }
    }

    function fecharModal(modal) {
        const botaoFecharModar = modal.querySelectorAll(elementos.fechaModal);
        botaoFecharModar.forEach(botao => {
            botao.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        });
    }
}

export default modal;