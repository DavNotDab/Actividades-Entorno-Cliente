
function dibujarRombo() {
    var tamaño = document.getElementById("tamaño").value;

    if (tamaño%2 == 0 || tamaño < 0 || tamaño > 499)
        return null;
    
    tamaño = parseInt(tamaño/2);

    var rombo = "&nbsp;".repeat(tamaño*2+2) + "*<br>";
    var asteriscos = 1;
    var espacios = tamaño*2;
    var huecos = 2;


    for (fila = 1; fila <= tamaño; fila++) {
        rombo += "&nbsp;".repeat(espacios) + "*" + "&nbsp;".repeat(huecos) + "*" + "<br/>";

        espacios -= 2;
        huecos += 4;
    }

    for (fila = 0; fila <= tamaño; fila++) {
        rombo += "&nbsp;".repeat(espacios) + "*" + "&nbsp;".repeat(huecos) + "*" + "<br/>";

        espacios += 2;
        huecos -= 4;
    }

    for (fila = 1; fila <= tamaño; fila++) {
        rombo += "&nbsp;".repeat(espacios) + "*".repeat(asteriscos) + "<br/>";

        espacios -= 2;
        asteriscos += 2;
    }

    for (fila = 0; fila <= tamaño; fila++) {
        rombo += "&nbsp;".repeat(espacios) + "*".repeat(asteriscos) + "<br/>";

        espacios += 2;
        asteriscos -= 2;
    }

    console.log(rombo);
    document.getElementById("rombo").innerHTML = rombo;
}
