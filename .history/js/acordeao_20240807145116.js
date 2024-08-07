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
        const botaoDoAcordeaoFechado = botao.getAttribute('aria-expanded') === 'true';
        console.log(botaoDoAcordeaoFechado);

        if(!botaoDoAcordeaoFechado) {
            botao.setAttribute('aria-expanded', 'true');
        }
    }


}

export default acordeao;