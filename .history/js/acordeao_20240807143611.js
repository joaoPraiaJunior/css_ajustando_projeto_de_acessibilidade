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
        const botaoDoAcordeonFechado = botao.getAttribute('aria-expanded') === false;

        if(botaoDoAcordeonFechado) {
            botaoAcordeonFechado.setAttribute('aria-expanded', true);
            botaoAcordeonFechado.nextElementSibling.setAttribute('aria-hidden', false);
            botaoAcordeonFechado.nextElementSibling.classList.add('expanded');
        }
    }
}

export default acordeao;