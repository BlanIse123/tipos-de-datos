async function mostrar(lenguaje) {

  let ruta = "";
  let explicacion = "";
  let datos = [];

  if (lenguaje === "python") {
    ruta = "Python/persona.py";
    explicacion = "Python detecta automáticamente los tipos.";
    datos = ["Nombre: Blanca", "Edad: 20", "Altura: 1.65", "Estudiante: True"];
  }

  // ... (los demás igual)

  // 🔥 Cargar archivo real
  try {
    let respuesta = await fetch(ruta);
    let codigo = await respuesta.text();
    document.getElementById("codigo").textContent = codigo;
  } catch (error) {
    document.getElementById("codigo").textContent = "Error al cargar el archivo";
  }

  // 🔵 Lista
  let lista = document.getElementById("resultado");
  lista.innerHTML = "";

  datos.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });

  document.getElementById("explicacion").textContent = explicacion;
}