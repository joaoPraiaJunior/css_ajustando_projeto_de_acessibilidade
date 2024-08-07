function acordeao() {

    const elementos = {
        botoesDoAcordeao: '[data-js="acordeao"]',
    }

    const botoesDoAcordeao = document.querySelectorAll(elementos.botoesDoAcordeao);

    botoesDoAcordeao.forEach(botao => {
        botao.addEventListener('click', () => {
            manipulacaoDoAcordeon(botao);
        });
    });

    function manipulacaoDoAcordeon(botao) {
        const botaoDoAcordeaoFechado = botao.getAttribute('aria-expanded');

        botoesDoAcordeao.forEach(botaoDoAcordeaoAberto => {
            botaoDoAcordeaoAberto.setAttribute('aria-expanded', 'false');
            botaoDoAcordeaoAberto.nextElementSibling.setAttribute('aria-hidden', 'true');
            botaoDoAcordeaoAberto.nextElementSibling.classList.remove('expandido');
        });

        if(botaoDoAcordeaoFechado === 'false') {
            botao.setAttribute('aria-expanded', 'true');
            botao.nextElementSibling.setAttribute('aria-hidden', 'false');
            botao.nextElementSibling.classList.add('expandido');
        }
    }
}

export default acordeao;