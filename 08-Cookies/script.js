
// Funcion que crea la cookie
function crearCookie(nombre, valor, edad = 20) {
    let cookie = encodeURIComponent(nombre) + "=" + encodeURIComponent(valor);
    // Solo la crea si no está creada ya
    if(valor !== "" && !leerCookie(cookie)) {
        document.cookie = cookie + ";" + "max-age=" + edad;
    }

    // Si la cookie es el nombre del usuario, la muestra y oculta el botón de crearla
    if (nombre === "nombre") {
        if (leerCookie(cookie)) {
            let crear = document.getElementById("crear");
            crear.style.opacity = 0

            mostrarNombre(cookie);
        }
    }
}

// Funcion que comprueba si una cookie dada existe
function leerCookie(nombre) {
    console.log(nombre);
    let cookies = document.cookie.split(";");
    let existe = false;
    cookies.forEach(cookie => {if (cookie == nombre) existe = true;});
    return existe;
}

// Función que muestra la cookie nombre
function mostrarNombre(cookie) {
    let nombre = cookie.split("=")[1];
    bienvenida.innerHTML = "Bienvenido " + decodeURIComponent(nombre);
    
    // Al mostrar la cookie también mostramos el botón para poder borrarla y los ajustes de la página
    borrar.style.opacity = 100;
    ajustes.style.opacity = 100;
}

// Función que muestra todas las cookies
function mostrarCookies(cookies) {
    cookies = cookies.split(";");
    console.log(cookies);
    let nombre = cookies[0];
    if (cookies.length == 2) {
        if (cookies[1].split("=")[0] === "fondo") {
            let fondo = decodeURIComponent(cookies[1].split("=")[1]);
            cambiarFondo("fondo", fondo);
        }
        else if (cookies[1].split("=")[0] === "parrafo"){
            let parrafo = decodeURIComponent(cookies[1].split("=")[1]);
            cambiarParrafo("parrafo", parrafo);
        }
    }
    mostrarNombre(nombre);
}

// Función que borra las cookies
function borrarCookies() {
    let cookies = document.cookie.split(";");
    console.log(cookies);
    // Solo la borra si existe
    cookies.forEach(cookie => {
        document.cookie = cookie + ";max-age=0";
    });

    colorFondo("#d3d3d3");

    // Oculta el botón de borrarla y muestra el de crear una nueva
    borrar.style.opacity = 0;
    ajustes.style.opacity = 0;
    crear.style.opacity = 100;

    // Muestra la cookie borrada (no muestra nada)
    bienvenida.innerHTML = "";
    
    // Restablece el input para introducir una cookie nueva
    crear = "";
}

// Comprueba si existe la cookie, si no existe la crea y llama a la función que cambia el fondo
function cambiarFondo(nombre, color) {
    let cookie = nombre + "=" + color;
    if (!leerCookie(cookie)) crearCookie(nombre, color);

    colorFondo(color);
}

// Cambia el color de fondo de la página y todos sus elementos
function colorFondo(color) {
    let elementos = document.body.getElementsByTagName("*");
    document.body.style.backgroundColor = color;
    Array.prototype.forEach.call(elementos, elemento => {
        if (elemento.type !== "submit") elemento.style.backgroundColor = color;
    });
    document.getElementById("fondo").value = color;
    document.getElementById("parrafo").value = color;
}

// Cambia el color de fondo del párrafo
function cambiarParrafo(nombre, color) {
    // Si no existe la cookie la crea
    let cookie = nombre + "=" + color;
    if (!leerCookie(cookie)) crearCookie(nombre, color);

    let elementos = document.body.getElementsByTagName("p");

    Array.prototype.forEach.call(elementos, elemento => {
        elemento.style.backgroundColor = color;
    });

    document.getElementById("parrafo").value = color;
}

let bienvenida = document.getElementById("bienvenida");
let crear = document.getElementById("crear");
let borrar = document.getElementById("borrar");
let ajustes = document.getElementById("ajustes");

// Solo si no hay cookie nombre muestra el botón de crear una
if (!document.cookie) crear.style.opacity = 100;

// Si hay una cookie nombre la muestra directamente junto a sus ajustes
else {
    mostrarCookies(document.cookie);
}
