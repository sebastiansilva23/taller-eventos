document.addEventListener("DOMContentLoaded", function() {
    const miDiv = document.getElementById("miDiv");
    const btnSaludar = document.getElementById("miBoton");

    miDiv.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });

    btnSaludar.addEventListener("click", function() {
        alert("Hola!");
    });
});