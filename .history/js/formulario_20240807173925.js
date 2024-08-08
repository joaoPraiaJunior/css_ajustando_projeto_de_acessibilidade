
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
            if (campo.validity.valid) {
                console.log(campo.validity);
                campo.addEventListener('invalid', () => {
                });
            }
        });

    }
}


export default formulario;