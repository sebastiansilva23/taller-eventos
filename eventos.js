document.addEventListener("DOMContentLoaded", function() {
    const miDiv = document.getElementById("miDiv");
    const btnSaludar = document.getElementById("miBoton");

    miDiv.addEventListener("click", function() {
        alert("Hola, soy el div!");
    });

    btnSaludar.addEventListener("click", function() {
        alert("Hola desde el botón!");
    });
});