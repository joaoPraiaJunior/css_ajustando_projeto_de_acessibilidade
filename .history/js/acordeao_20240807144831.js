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
        const botaoDoAcordeonFechado = botao.getAttribute('aria-expanded') === 'false';
        console.log(botaoDoAcordeonFechado);    

        if(botaoDoAcordeonFechado) {
            botaoAcordeonFechado.nextElementSibling.setAttribute('aria-hidden', 'false');
            botaoAcordeonFechado.nextElementSibling.classList.add('expanded');
        }
    }
}

export default acordeao;