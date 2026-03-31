function mostrar(lenguaje) {

    let codigo = "";
    let resultado = "";
    let explicacion = "";

    if (lenguaje === "python") {
        codigo = `
nombre = "Blanca"
edad = 20
print(nombre)
        `;
        resultado = `
Blanca
20
        `;
        explicacion = "Python no necesita declarar tipos, todo es dinámico.";
    }

    else if (lenguaje === "java") {
        codigo = `
String nombre = "Blanca";
System.out.println(nombre);
        `;
        resultado = `
Blanca
        `;
        explicacion = "Java requiere declarar el tipo de dato antes de usarlo.";
    }

    else if (lenguaje === "javascript") {
        codigo = `
let nombre = "Blanca";
console.log(nombre);
        `;
        resultado = `
Blanca
        `;
        explicacion = "JavaScript es dinámico como Python, pero se usa mucho en web.";
    }

    else if (lenguaje === "cpp") {
        codigo = `
string nombre = "Blanca";
cout << nombre;
        `;
        resultado = `
Blanca
        `;
        explicacion = "C++ es rápido y requiere tipos definidos.";
    }

    else if (lenguaje === "kotlin") {
        codigo = `
val nombre: String = "Blanca"
println(nombre)
        `;
        resultado = `
Blanca
        `;
        explicacion = "Kotlin combina tipado fuerte con sintaxis moderna.";
    }

    document.getElementById("codigo").textContent = codigo;
    document.getElementById("resultado").textContent = resultado;
    document.getElementById("explicacion").textContent = explicacion;

    // aplicar colores
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
}