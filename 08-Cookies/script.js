// Funcion que crea la cookie
function crearNombre(nombre) {
    
    // Solo la crea si no está creada ya
    if(nombre.value != "") document.cookie = encodeURIComponent(nombre.value)+";"+"max-age=10";

    // Si la cookie está creada oculta el botón de crear y llama a la función que la muestra
    if (document.cookie) {
        var crear = document.getElementById("crear");
        crear.style.opacity = 0
        
        mostrarNombre(document.cookie);
    }
}

// Función que muestra la cookie
function mostrarNombre(nombre) {
    var bienvenida = document.getElementById("bienvenida");
    bienvenida.innerHTML = "Bienvenido " + decodeURIComponent(nombre);
    
    // Al mostrar la cookie también mostramos el botón para poder borrarla y los ajustes de la página
    borrar.style.opacity = 100;
    ajustes.style.opacity = 100;
}

// Función que borra la cookie
function borrarNombre(nombre) {

    // Solo la borra si existe
    if (document.cookie) document.cookie = encodeURIComponent(nombre.value) + ";" + "max-age=0";

    // Oculta el botón de borrarla y muestra el de crear una nueva
    borrar.style.opacity = 0;
    ajustes.style.opacity = 0;
    crear.style.opacity = 100;

    // Muestra la cookie borrada (no muestra nada)
    bienvenida.innerHTML = document.cookie;
    
    // Restablece el input para introducir una cookie nueva
    nombre.value = "";
}

var crear = document.getElementById("crear");
var borrar = document.getElementById("borrar");
var ajustes = document.getElementById("ajustes");

// Solo si no hay cookie muestra el botón de crear una
if (!document.cookie) crear.style.opacity = 100;

// Si hay una cookie la muestra directamente
else mostrarNombre(document.cookie);

// Funcion que comprueba si una cookie existe dado su nombre
function leerCookie(nombre) {
    
    nombre = " " + nombre;
    var cookies = document.cookie.split(";");
    var existe = false;
    cookies.forEach(cookie => {
        var nombre_valor = cookie.split("=");
        console.log(nombre_valor);
        console.log(nombre_valor[0] == nombre);
        if (nombre_valor[0] == nombre) existe = true;
    });
    return existe;
}


function cambiarFondo(fondo) {

    var elementos = document.body.getElementsByTagName("*");
    document.body.style.backgroundColor = fondo.value;
    
    Array.prototype.forEach.call(elementos, elemento => {
        if (elemento.type != "submit") elemento.style.backgroundColor = fondo.value;
    });
}

function cambiarParrafo(fondo) {
    var elementos = document.body.getElementsByTagName("p");

    Array.prototype.forEach.call(elementos, elemento => {
        elemento.style.backgroundColor = fondo.value;
    });
}