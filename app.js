function mostrar(lenguaje) {

    let contenido = "";

    if (lenguaje === "python") {
        contenido = `
nombre = "Blanca"
edad = 20
altura = 1.65
es_estudiante = True
        `;
    }

    else if (lenguaje === "java") {
        contenido = `
String nombre = "Blanca";
int edad = 20;
double altura = 1.65;
boolean esEstudiante = true;
        `;
    }

    else if (lenguaje === "javascript") {
        contenido = `
let nombre = "Blanca";
let edad = 20;
let altura = 1.65;
let esEstudiante = true;
        `;
    }

    else if (lenguaje === "cpp") {
        contenido = `
string nombre = "Blanca";
int edad = 20;
float altura = 1.65;
bool esEstudiante = true;
        `;
    }

    else if (lenguaje === "kotlin") {
        contenido = `
val nombre: String = "Blanca"
val edad: Int = 20
val altura: Double = 1.65
val esEstudiante: Boolean = true
        `;
    }

    document.getElementById("resultado").textContent = contenido;
}