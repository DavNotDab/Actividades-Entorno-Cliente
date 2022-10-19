
var n1 = parseInt(window.prompt("Introduce el primer número"));
var n2 = parseInt(window.prompt("Introduce el segundo20 número"));

document.getElementById("var1").innerHTML = "El valor de la primera variable es: " + n1;
document.getElementById("var2").innerHTML = "El valor de la segunda variable es: " + n2;

var resultado = n1 - n2;

function mayor() {

    if (resultado > 0)
        document.getElementById("resultado").innerHTML = "El primer número es mayor.";

    else if (resultado < 0)
        document.getElementById("resultado").innerHTML = "El segundo número es mayor.";
    else
        document.getElementById("resultado").innerHTML = "Los números son iguales.";

}
