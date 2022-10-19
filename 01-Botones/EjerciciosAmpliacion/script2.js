
var n1 = parseInt(window.prompt("Introduce el primer número"));
var n2 = parseInt(window.prompt("Introduce el segundo20 número"));

document.getElementById("var1").innerHTML = "El valor de la primera variable es: " + n1;
document.getElementById("var2").innerHTML = "El valor de la segunda variable es: " + n2;


var resultado_suma = n1 + n2;
var resultado_resta = n1 - n2;
var resultado_multiplicacion = n1 * n2;
var resultado_division = n1 / n2;

function suma() {
    document.getElementById("resultado_suma").innerHTML = "El resultado de la suma es " + resultado_suma;
}

function resta() {
    document.getElementById("resultado_resta").innerHTML = "El resultado de la resta es " + resultado_resta;
}

function multiplicacion() {
    document.getElementById("resultado_multiplicacion").innerHTML = "El resultado de la multiplicacion es " + resultado_multiplicacion;
}

function division() {
    document.getElementById("resultado_division").innerHTML = "El resultado de la division es " + resultado_division;
}