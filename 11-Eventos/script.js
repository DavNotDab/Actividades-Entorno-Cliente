
// Función que cambia el color de la celda en la que se ha producido el evento mousemove
// Dependiendo de la tecla pulsada pinta un color u otro (o borra)
function pintar(element) {
    if (element.ctrlKey) {
        if (element.target.tagName.toLowerCase() == 'td') {
            element.target.style.backgroundColor = 'red';
        }
    }
    else if (element.shiftKey) {
        if (element.target.tagName.toLowerCase() == 'td') {
            element.target.style.backgroundColor = 'blue';
        }
    }
    else if (element.altKey) {
        if (element.target.tagName.toLowerCase() == 'td') {
            element.target.style.backgroundColor = 'lightgrey';
        }
    }

}

// Limpia el canvas borrando todas las celdas de la tabla
function limpiarCanvas() {
    let tabla = document.getElementById('tabla');
    let celdas = tabla.getElementsByTagName('td');
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].style.backgroundColor = 'lightgrey';
    }
}

// Función que crea la tabla dado un número de filas
function crearTabla(filas, columnas) {
    let tabla = document.getElementById('tabla');

    for (let fila=0; fila < filas; fila++) {
        let fila = document.createElement("tr");
        for (let columna=0; columna<columnas; columna++) {
            let td = document.createElement("td");
            fila.appendChild(td);
        }
        tabla.appendChild(fila);
    }
}

let tabla = document.getElementById('tabla');

tabla.addEventListener('mousemove', pintar);