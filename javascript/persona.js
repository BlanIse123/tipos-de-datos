function mostrarJS() {
    let nombre = "Blanca";
    let edad = 20;
    let altura = 1.65;
    let esEstudiante = true;

    document.getElementById("resultado").innerHTML =
        "Nombre: " + nombre + "<br>" +
        "Edad: " + edad + "<br>" +
        "Altura: " + altura + "<br>" +
        "¿Es estudiante? " + esEstudiante;
}