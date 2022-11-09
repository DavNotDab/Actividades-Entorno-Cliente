
//simula el lanzamiento aleatorio de dos dados
function lanzarDado() {
    return Math.ceil(Math.random() * 6);
}

//calcula la suma de los dos dados
function sumaDados() {
    return [lanzarDado(), lanzarDado()];
}

//calcula la probabilidad de que salga cada valor de la suma de los dos dados
function probabilidad() {
    let contador = {"1+1":0, "1+2":0, "1+3":0, "1+4":0, "1+5":0, "1+6":0,
                    "2+2":0, "2+3":0, "2+4":0, "2+5":0, "2+6":0,
                    "3+3":0, "3+4":0, "3+5":0, "3+6":0,
                    "4+4":0, "4+5":0, "4+6":0,
                    "5+5":0, "5+6":0,
                    "6+6":0};

    //lanzamos 1000000 veces los dados y contamos las veces que sale cada suma
    for (let i = 0; i < 1000000; i++) {
        let dados = sumaDados();
        let indice = dados[0] + "+" + dados[1];
        let indiceInv = dados[1] + "+" + dados[0];

        //Si existe la clave en el objeto contador, se incrementa su valor
        !isNaN(contador[indice]) ? contador[indice]++ : contador[indiceInv]++;
    }
    return contador;
}

// Calcula el porcentaje de veces que sale cada valor de la suma de los dos dados
function calcularPorcentaje(array) {
    let porcentaje = [];

    for (let clave in array) porcentaje.push((array[clave] / 10000).toFixed(2) + " %");

    return porcentaje;
}

let numeros = probabilidad();
let porcentajes = calcularPorcentaje(numeros);
let indice = 0;

for (let numero in numeros) {
    document.getElementById("numeros").innerHTML += numero + ": " + numeros[numero] + " --> " + porcentajes[indice] + "<br>";
    indice++;
}
