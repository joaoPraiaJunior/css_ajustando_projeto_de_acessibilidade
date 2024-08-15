
function formulario() {

    const elementos = {
        formularios: '[data-tipo-formulario]',
        camposDoFormulario: '[required]',
    }

    const formularios = document.querySelectorAll(elementos.formularios);

    formularios.forEach(formulario => {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();
            pegarCamposDoFromulario(formulario);
        });
    });

    function pegarCamposDoFromulario(formulario) {
        const camposDoFormulario = formulario.querySelectorAll(elementos.camposDoFormulario);
        camposDoFormulario.forEach(campo => {
            campo.addEventListener('blur', () => validaCampo(campo));
            campo.addEventListener('invalid', (evento) => evento.preventDefault());
        });

    }

    function validaCampo(campo) {
        console.log(campo.validity);

    }
}


export default formulario;