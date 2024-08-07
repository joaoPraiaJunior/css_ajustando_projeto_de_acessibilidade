function acordeao() {

    const elementos = {
        botaoDoAcordeao: '[data-js="acordeao"]',
    }

    const botaoDoAcordeao = document.querySelectorAll(elementos.botaoDoAcordeao);

    botaoDoAcordeao.forEach(botao => {
        botao.addEventListener('click', () => {
            manipulacaoDoAcordeon(botao);
        });
    });

    function manipulacaoDoAcordeon(botao) {
        const mostrarConteudo = botao.nextElementSibling;
        mostrarConteudo.classList.add('expanded');

    }
}

export default acordeao;