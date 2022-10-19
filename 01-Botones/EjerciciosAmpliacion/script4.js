
var nota = parseFloat(window.prompt("Introduce tu nota: "));

document.getElementById("nota").innerHTML = "Tu nota es " + nota + ":";


function calificacion() {

    if (nota >= 0 && nota < 5)
        document.getElementById("calificacion").innerHTML = "Suspenso.";

    else if (nota >= 5 && nota < 6)
        document.getElementById("calificacion").innerHTML = "Suficiente.";
    else if (nota >= 6 && nota < 7)
        document.getElementById("calificacion").innerHTML = "Bien.";
    else if (nota >= 7 && nota < 9)
        document.getElementById("calificacion").innerHTML = "Notable.";
    else if (nota >= 9 && nota <= 10)
        document.getElementById("calificacion").innerHTML = "Sobresaliente.";
    else 
        document.getElementById("calificacion").innerHTML = "Nota no válida.";

}

calificacion();