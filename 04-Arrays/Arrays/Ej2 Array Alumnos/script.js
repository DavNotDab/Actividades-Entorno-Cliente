
function crearAlumno() {

    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var edad = document.getElementById("edad");

    var alumno = {nombre:nombre.value, apellido:apellido.value, edad:edad.value};

    if (nombre.value.length > 0 && apellido.value.length > 0 && edad.value.length > 0) {
        alumnos.push(alumno);
        mostrarBoton();
        nombre.value = "";
        apellido.value = "";
        edad.value = "";
        nombre.placeholder = "";
        apellido.placeholder = "";
        edad.placeholder = "";
    }
    else {
        nombre.placeholder = "Rellena este campo";
        apellido.placeholder = "Rellena este campo";
        edad.placeholder = "Rellena este campo";
    }
    return alumnos;
}

function mostrarBoton() {
    var boton = document.getElementById("mostrar");
    boton.style.opacity = 100;
}

function mostrarAlumnos() {

    document.getElementById("alumnos").innerHTML = "";
    alumnos.forEach(alumno => {
        document.getElementById("alumnos").innerHTML += "Alumno " + alumno.nombre + " " + alumno.apellido + ". Edad: " + alumno.edad + "<br>";
    });
}

var alumnos = Array();
