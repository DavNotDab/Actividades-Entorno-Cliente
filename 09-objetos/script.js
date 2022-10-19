
function coche(modelo, color, kms, combustible) {
    this.modelo = modelo;
    this.color = color;
    this.kms = kms;
    this.combustible = combustible;

    this.setmodelo = function(nuevomodelo) {
        this.modelo = nuevomodelo;
    }
    this.getmodelo = function() {
        return this.modelo;
    }
}

var caja = document.getElementById("parrafo");

var suma = new Function("a","b", "for (i=0;i<5;i++){a+=b;} return a+b;");

//caja.innerHTML = suma(2,3);

function resta(a,b) {return a-b;}

// Es igual que:
var rest = (a,b) => a-b;

var saluda = () => "Hola chicos";

var matriz = [1,4,2,6];
var doble=matriz.map(n=>n*2);


//RECURSIVIDAD

function factorial(numero) {
    if (numero < 0) return null;
    if (numero == 1) return 1;
    return factorial(numero-1)*numero;
}

//caja.innerHTML = factorial(4);


//Func sin parametros:

function sum(a,b) {
    if(b===undefined) return "Faltan parámetros";
    return a+b;
}

a = 1;
b = 2;
console.log(sum(b));

//Función fibonacci

function fibonacci(numero) {  
    // Si el número es 1 solo devuelve los dos primeros valores
    if (numero <= 1) return [0, 1];  
    total = fibonacci(numero-1);  
    total.push(total[total.length-1] + total[total.length-2]);  
    return total;  
}

function fib() {
    var numero = document.getElementById("numero").value;
    sucesion = fibonacci(numero);

    sucesion.forEach(numero => {
        caja2.innerHTML += numero + "<br>";
    });
}

caja2 = document.getElementById("fibonacci");
caja.innerHTML += "<h2>Sucesión de fibonacci:</h2>";


