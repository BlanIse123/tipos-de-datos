async function mostrar(lenguaje) {

  let codigo = "";
  let explicacion = "";
  let datos = [];

  if (lenguaje === "python") {
    codigo = `
nombre = "Blanca"
edad = 20
altura = 1.65
estudiante = True

print("Nombre:", nombre)
print("Edad:", edad)
print("Altura:", altura)
print("Estudiante:", estudiante)
`;
    explicacion = "Python detecta automáticamente los tipos.";
    datos = ["Nombre: Blanca", "Edad: 20", "Altura: 1.65", "Estudiante: True"];
  }

  else if (lenguaje === "java") {
    codigo = `
public class Persona {
  public static void main(String[] args) {
    String nombre = "Blanca";
    int edad = 20;
    double altura = 1.65;
    boolean estudiante = true;

    System.out.println("Nombre: " + nombre);
    System.out.println("Edad: " + edad);
    System.out.println("Altura: " + altura);
    System.out.println("Estudiante: " + estudiante);
  }
}
`;
    explicacion = "Java usa tipos de datos obligatorios.";
    datos = ["Nombre: Blanca", "Edad: 20", "Altura: 1.65", "Estudiante: true"];
  }

  else if (lenguaje === "javascript") {
    codigo = `
let nombre = "Blanca";
let edad = 20;
let altura = 1.65;
let estudiante = true;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Altura:", altura);
console.log("Estudiante:", estudiante);
`;
    explicacion = "JavaScript usa let.";
    datos = ["Nombre: Blanca", "Edad: 20", "Altura: 1.65", "Estudiante: true"];
  }

  else if (lenguaje === "cpp") {
    codigo = `
#include <iostream>
using namespace std;

int main() {
  string nombre = "Blanca";
  int edad = 20;
  float altura = 1.65;
  bool estudiante = true;

  cout << "Nombre: " << nombre << endl;
  cout << "Edad: " << edad << endl;
  cout << "Altura: " << altura << endl;
  cout << "Estudiante: " << estudiante << endl;

  return 0;
}
`;
    explicacion = "C++ usa cout y muestra true como 1.";
    datos = ["Nombre: Blanca", "Edad: 20", "Altura: 1.65", "Estudiante: 1"];
  }

  else if (lenguaje === "kotlin") {
    codigo = `
fun main() {
  val nombre = "Blanca"
  val edad = 20
  val altura = 1.65
  val estudiante = true

  println("Nombre: $nombre")
  println("Edad: $edad")
  println("Altura: $altura")
  println("Estudiante: $estudiante")
}
`;
    explicacion = "Kotlin usa val.";
    datos = ["Nombre: Blanca", "Edad: 20", "Altura: 1.65", "Estudiante: true"];
  }

  // 🔥 Mostrar código
  document.getElementById("codigo").textContent = codigo;
  hljs.highlightAll();

  // 🔵 Mostrar resultado
  let lista = document.getElementById("salidaReal");
  lista.textContent = datos.join("\n");

  // 🧠 Explicación
  document.getElementById("explicacion").textContent = explicacion;
}


// 🚀 Cargar automáticamente
document.addEventListener("DOMContentLoaded", () => {
  mostrar("python");
});