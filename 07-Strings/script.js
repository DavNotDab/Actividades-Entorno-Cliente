
// EJ 1
// A) Invertir cadena letra a letra

function invertirCadena(cadena) {
    // Convertimos la cadena en array, lo invertimos, y lo volvemos a unir en una cadena nueva
    var invertida = cadena.value.split("").reverse().join("");
    
    document.getElementById("invertida").innerHTML = invertida;
}


// B) Invertir cadena palabra a palabra

function invertirCadena2(cadena) {
    // Hacemos lo mismo que ne apartado anterior pero dividiendo el string solo por los espacios
    var invertida = cadena.value.split(" ").reverse().join(" ");

    document.getElementById("invertida2").innerHTML = invertida;
}


// C) Encontrar palabra más larga

function encontrarPalabraLarga(cadena) {
    // Dividimos el string por palabras y lo guardamos en un array
    var palabras = cadena.value.split(" ");

    var larga = "";

    // recorremos el array y determinamos qué palabra es la más larga
    palabras.forEach(palabra => {
        if (palabra.length > larga.length) larga = palabra;
    });

    document.getElementById("palabraLarga").innerHTML = "La palabra más larga es \"" + larga + "\"";
}


// D) Encontrar palabras más largas que un valor dado

function filtrarPalabrasMasLargas(cadena, longitud) {
    // Dividimos el string por palabras y lo guardamos en un array
    var palabras = cadena.value.split(" ");

    var largas = 0;
    // Comparamos la longitud de cada palabra con la longitud dada y aumentamos el número de palabras encontradas cada vez que se encuentre una
    palabras.forEach(palabra => {
        if (palabra.length > longitud.value) largas += 1;
    });

    document.getElementById("palabrasLargas").innerHTML = "Hay " + largas + " palabras con más de " + longitud.value + " letras.";
}


// E) Cadena bien formada

function bienFormada(cadena) {
    // Separamos la primera letra de la cadena (deberá ser mayúscula) de todo lo demás (irá en minúscula).
    primera = cadena.value[0].toUpperCase();
    segunda =  cadena.value.slice(1, cadena.value.length).toLowerCase();

    resultado = primera + segunda;

    document.getElementById("bienFormada").innerHTML = "La cadena bien formada es: \"" + resultado + "\"";
}


// Ej 3: Localizar subcadenas

function localizar(cadena, buscada) {

    var encontrada = -1;
    var indice = 0;
    cadena = " "+cadena;

    // recorremos la cadena mientras el indice sea inferior que la longitud de la cadena
    while (indice >= 0 && indice <= cadena.length-buscada.length) {
        
        // Si se encuentra la subcadena se suma 1 a las veces que se ha encontrado
        if(cadena.includes(buscada, indice)) {
            encontrada++;

            // Se aumenta el índice a partir del cual seguir buscando según la longitud de la cadena buscada
            indice = cadena.indexOf(buscada, indice+buscada.length);
        }
        else
            break;
    }

    if (encontrada == 0) document.getElementById("localizada").innerHTML = "La cadena a buscar no se encuentra en la otra cadena.";
    else
        document.getElementById("localizada").innerHTML = "La cadena a buscar se ha encontrado " + encontrada + " veces.";

}


// Ej 7: Comprobar palíndromo.

function palindromo(cadena) {
    // Se cambian los caracteres que no sean letras o numeros para facilitar la comprobación del palíndromo
    cadena = cadena.replace(/[^\w]/gi, "");
    var long = cadena.length;

    // Se divide la cadena por la mitad
    var principio = cadena.substr(0, long/2);
    var final = "";

    // En funcion si la longitud de la cadena es par o impar, se incluye o no el carácter central de la cadena
    (long % 2 != 0) ? final = cadena.substr(long/2+1) : final = cadena.substr(long/2);

    // Se invierte una parte de la cadena
    final = final.split("").reverse().join("");
    var esPalindromo = "";

    // Se comprueban que ambas partes sean iguales
    (principio == final) ? esPalindromo = "SI" : esPalindromo = "NO";

    document.getElementById("palindromo").innerHTML = "La cadena " + esPalindromo +" es un palindromo";
}


// Ej 9: Palabra formateada.
//
// *****ESTOS COMENTARIOS SON MI PLANTEAMIENTO DEL PROBLEMA ANTES DE HACER EL CODIGO, SE PUEDEN IGNORAR*****
//
// si long es 1 solo añado un td a cabecera A
// si long es 2 añado 2 td a cabecera A,B y un tr con dos td B, A
// si long es 3 añado 3 td a cabecera A,B,C y dos tr el primero con B, ,B el segundo con C,B,A
// si long es 4 añado 4 td a cabecera A,B,C,D y tres tr el primero con B, , ,C el segundo con C, , ,B y el tercero con D,C,B,A
// si long es 5 añado 5 td a cabecera A,B,C,D,E y cuatro tr el primero con B, , , D el segundo con C, , , ,C 
// el tercero con D, , , ,B y el cuarto con E,D,C,B,A
// si long es 6 añado 6 td a cabecera A,B,C,D,E,F y cinco tr el primero con B, , , , ,E el segundo con C, , , , ,D 
// el tercero con D, , , , ,C el cuarto con E, , , , ,B y el quinto con F,E,D,C,B,A
//
// Siendo long del string n:
// Si long == 1 se hace un if a parte
// Else nuevos td = n, nuevos tr = n-1
// en los nuevos tr: 
// tr[0] string[1+(i)] + long-2 espacios blancos + string[-2-(j)] se repite long-2 veces y se va incrementando i y j
// en el ultimo tr siempre se añaden n td pero se invierten respecto a tr cabecera
//

function formatear(cadena) {
    // La cadena se transforma a mayúsculas para mejorar legibilidad
    cadena = cadena.toUpperCase();
    var long = cadena.length;
    var tabla = document.getElementById("tabla");

    // Se limpia la tabla en caso de que hubiera una (para que los resultados no se amontonen)
    while (tabla.firstChild) tabla.removeChild(tabla.firstChild);

    if(long == 0) return false;     //Formateo fallido. No hay cadena

    if(long == 1) {  
        var nuevo = document.createElement("td");
        nuevo.innerHTML = cadena;
        tabla.appendChild(nuevo);
        return true;                //Formateo realizado. Se muestra la única letra de la cadena
    }

    // Primera fila de la tabla
    var filaPrimera = document.createElement("tr");
    for (i=0; i<long; i++) {
        var td = document.createElement("td");
        td.innerHTML = cadena[i];
        filaPrimera.appendChild(td);
    }
    tabla.appendChild(filaPrimera);                     // Añadimos la primera fila a la tabla 

    // Filas de la segunda a la penúltima
    for (i=0; i<long-2; i++) {
        var tr = document.createElement("tr");          // Esta será la fila

        var tdPrimero = document.createElement("td");   // Primera columna dentro de la fila
        tdPrimero.innerHTML = cadena[i+1];
        tr.appendChild(tdPrimero);

        for (j=0; j<long-2; j++) {                      // Columnas de la segunda a la penúltima
            var td = document.createElement("td");
            td.jnnerHTML = " ";
            tr.appendChild(td);
        }

        var tdUltimo = document.createElement("td");    // Última columna
        tdUltimo.innerHTML = cadena[long-2-i];
        tr.appendChild(tdUltimo);

        tabla.appendChild(tr);                          // Añadimos la fila a la tabla
    }

    // Última fila de la tabla
    var filaUltima = document.createElement("tr");
    for (i=long-1; i>=0; i--) {
        var td = document.createElement("td");
        td.innerHTML = cadena[i];
        filaUltima.appendChild(td);                     
    }
    tabla.appendChild(filaUltima);                      // Añadimos la última fila a la tabla 

    document.getElementById("cadena9").value = "";      // Limpia el campo de texto para poder introducir otra palabra
    return true;   // Formateo realizado

}