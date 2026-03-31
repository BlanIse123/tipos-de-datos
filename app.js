function mostrar(lenguaje) {

    let contenido = "";

    if (lenguaje === "python") {
        contenido = `
📌 Declaración:
nombre = "Blanca"
edad = 20
altura = 1.65
es_estudiante = True

📌 Salida:
print("Nombre:", nombre)
print("Edad:", edad)
print("Altura:", altura)
print("¿Es estudiante?", es_estudiante)
        `;
    }

    else if (lenguaje === "java") {
        contenido = `
📌 Declaración:
String nombre = "Blanca";
int edad = 20;
double altura = 1.65;
boolean esEstudiante = true;

📌 Salida:
System.out.println("Nombre: " + nombre);
System.out.println("Edad: " + edad);
System.out.println("Altura: " + altura);
System.out.println("¿Es estudiante? " + esEstudiante);
        `;
    }

    else if (lenguaje === "javascript") {
        contenido = `
📌 Declaración:
let nombre = "Blanca";
let edad = 20;
let altura = 1.65;
let esEstudiante = true;

📌 Salida:
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Altura:", altura);
console.log("¿Es estudiante?", esEstudiante);
        `;
    }

    else if (lenguaje === "cpp") {
        contenido = `
📌 Declaración:
string nombre = "Blanca";
int edad = 20;
float altura = 1.65;
bool esEstudiante = true;

📌 Salida:
cout << "Nombre: " << nombre << endl;
cout << "Edad: " << edad << endl;
cout << "Altura: " << altura << endl;
cout << "¿Es estudiante? " << esEstudiante << endl;
        `;
    }

    else if (lenguaje === "kotlin") {
        contenido = `
📌 Declaración:
val nombre: String = "Blanca"
val edad: Int = 20
val altura: Double = 1.65
val esEstudiante: Boolean = true

📌 Salida:
println("Nombre: $nombre")
println("Edad: $edad")
println("Altura: $altura")
println("¿Es estudiante? $esEstudiante")
        `;
    }

    document.getElementById("resultado").textContent = contenido;
}