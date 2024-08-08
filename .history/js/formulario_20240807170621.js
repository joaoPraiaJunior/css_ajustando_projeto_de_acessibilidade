
function formulario() {
    const elementos = {
        formularios: '[data-tipo-formulario"]',
    }

    const formularios = document.querySelectorAll(elementos.formularios);

    formularios.forEach(formulario => {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();
            validarFormulario(formulario);
        });
    });
}


export default formulario;