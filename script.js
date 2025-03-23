document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("consulta-form");
    const mensaje = document.getElementById("mensaje-confirmacion");
    const botonEstilo = document.getElementById("cambiar-estilo");
    let invertido = false;

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const tipoConsulta = document.getElementById("tipo-consulta").value;

        if (nombre === "" || email === "" || tipoConsulta === "") {
            alert("Por favor, completa todos los campos.");
        } else {
            mensaje.style.display = "block";
            form.reset(); 
        }
    });

    botonEstilo.addEventListener("click", function() {
        if (!invertido) {
            document.body.style.filter = "invert(1)";
        } else {
            document.body.style.filter = "invert(0)";
        }
        invertido = !invertido;
    });
});