
let parrafos = ["Es importante cuidar al paciente, ser seguido por el médico, pero es un momento de mucho dolor y sufrimiento. " +
                "Porque para llegar al más mínimo detalle, nadie debe practicar ningún tipo de trabajo a menos que obtenga algún " +
                "beneficio de él. No te enojes con el dolor en la reprimenda en el placer que quiere ser un cabello del dolor en " +
                "la esperanza de que no haya crianza. A menos que estén cegados por la lujuria, no salen, están en falta quienes " +
                "abandonan sus deberes y ablandan su corazón, eso es trabajo.",
                "En el año 1872, la casa número 7 de Saville Row, Burlington Gardens -donde " +
                "murió Sheridan en 1814- estaba habitada por Phileas Fogg, quien a pesar de " +
                "que parecía haber tomado el partido de no hacer nada que pudiese llamar la " +
                "atención, era uno de los miembros más notables y singulares del ReformClub de Londres.",
                "El hombre que se había convertido en un hombre de negocios, y que había " +
                "pasado de ser un hombre de negocios a un hombre de negocios, era un hombre de negocios.",
                "Por consiguiente, Phileas Fogg, personaje enigmático y del cual sólo se sabía " +
                "que era un hombre muy galante y de los más cumplidos gentlemen de la alta " +
                "sociedad inglesa, sucedía a uno de los más grandes oradores que honran a Inglaterra.",
                "Decíase que se daba un aire a lo Byron- su cabeza, se entiende, porque, en " +
                "cuanto a los pies, no tenía defecto alguno-, pero a un Byron de bigote y " +
                "patillas, a un Byron impasible, que hubiera vivido mil años sin envejecer.",
                "Al que hubiese extrañado que un gentleman tan misterioso alternase con los " +
                "miembros de esta digna asociación, se le podría haber respondido que entró " +
                "en ella recomendado por los señores Baring Hermanos. De aquí cierta " +
                "reputación debida a la regularidad con que sus cheques eran pagados a la " +
                "vista por el saldo de su cuenta corriente, invariablemente acreedor."];

function aleatorio() {
    return Math.floor(Math.random() * parrafos.length);
}

function mostrarParrafos(numero) {
    let cantidad = numero.value;
    let parrafo = document.getElementById("parrafos");
    parrafo.innerHTML = "";
    for(let i = 0; i < cantidad; i++) {
        parrafo.innerHTML += parrafos[aleatorio()] + "<br><br>";
    }
}