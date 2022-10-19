
function guardarNombre() {
    var nombre = document.getElementById("nombre");
    if (nombre.value.length > 0) {
        nombres.push(nombre.value);
        mostrarBoton();
        nombre.value = "";
        nombre.placeholder = "";
    }
    else 
        nombre.placeholder = "Rellena este campo";
    return nombres;
}

function mostrarBoton() {
    var boton = document.getElementById("mostrar");
    var boton2 = document.getElementById("borrar");
    boton.style.opacity = 100;
    boton2.style.opacity = 100;
}

function borrarUltimo() {
    nombres.pop();
    mostrarNombres();
    if (nombres.length == 0) {
        var boton = document.getElementById("mostrar");
        var boton2 = document.getElementById("borrar");
        boton.style.opacity = 0;
        boton2.style.opacity = 0;
    }
}

function mostrarNombres() {
    document.getElementById("nombres").innerHTML = "";
    nombres.sort().forEach(nombre => {
        document.getElementById("nombres").innerHTML += nombre + "<br>";
    });
}

var nombres = Array();
