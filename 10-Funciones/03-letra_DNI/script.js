
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function calcularLetraDNI(dni) {
    return letras[dni % 23];
}

function comprobarDni(dni) {
    dni = dni.value;

    const letra = dni.slice(-1);
    const numero = parseInt(dni.slice(0, -1));
    let resultado = document.getElementById("resultado");

    if(11111111 > numero || numero > 99999999) {
        resultado.innerHTML = "Número de DNI no válido";
        return false;
    }

    resultado.innerHTML = (letra === calcularLetraDNI(numero)) ? "DNI correcto" : "DNI incorrecto, la letra no es válida";
    return true;
}
