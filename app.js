async function mostrar(lenguaje) {

  let ruta = "";
  let explicacion = "";
  let datos = [];

  if (lenguaje === "python") {
    ruta = "python/persona.py";
    explicacion = "Python detecta automáticamente los tipos.";
    datos = ["Nombre: Blanca", "Edad: 20", "Altura: 1.65", "Estudiante: True"];
  }

  else if (lenguaje === "java") {
    ruta = "java/Persona.java";
    explicacion = "Java usa tipos de datos obligatorios.";
    datos = ["Nombre: Blanca", "Edad: 20", "Altura: 1.65", "Estudiante: true"];
  }

  else if (lenguaje === "javascript") {
    ruta = "javascript/persona.js";
    explicacion = "JavaScript usa let.";
    datos = ["Nombre: Blanca", "Edad: 20", "Altura: 1.65", "Estudiante: true"];
  }

  else if (lenguaje === "cpp") {
    ruta = "cpp/persona.cpp";
    explicacion = "C++ usa cout y muestra true como 1.";
    datos = ["Nombre: Blanca", "Edad: 20", "Altura: 1.65", "Estudiante: 1"];
  }

  else if (lenguaje === "kotlin") {
    ruta = "kotlin/Persona.kt";
    explicacion = "Kotlin usa val.";
    datos = ["Nombre: Blanca", "Edad: 20", "Altura: 1.65", "Estudiante: true"];
  }

  // 🔥 Cargar archivo real
  let respuesta = await fetch(ruta);
  let codigo = await respuesta.text();

  document.getElementById("codigo").textContent = codigo;

  // 🔵 Mostrar lista
  let lista = document.getElementById("resultado");
  lista.innerHTML = "";

  datos.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });

  // 🧠 Explicación
  document.getElementById("explicacion").textContent = explicacion;
}