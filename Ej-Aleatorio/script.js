
// INSERT YOUR OPTIONS HERE
var alumnos=["1,2,3,4,5,6,7,8,9,10"];

function aleatorio() {
    var num = Math.floor(Math.random()*alumnos.length);
    if (num == anterior) num = Math.floor(Math.random()*alumnos.length);
    anterior = num;
    return num;
}

function spin() {
    var alumno = aleatorio();
    console.log(alumno);
    voluntario.innerHTML = alumnos[alumno];
}

function parar() {
    if (!parando) {
        parando = true;
        setTimeout(clearInterval, 500, bucle);
        setTimeout(() => {
            var bucle = setInterval(spin, 150);
            setTimeout(clearInterval, 900, bucle);
            setTimeout(() => {
                var bucle = setInterval(spin, 250);
                setTimeout(clearInterval, 1500, bucle);
                setTimeout(() => {
                    var bucle = setInterval(spin, 400);
                    setTimeout(clearInterval, 1200, bucle);
                    setTimeout(() => {
                        var bucle = setInterval(spin, 700);
                        setTimeout(clearInterval, 1400, bucle);
                        setTimeout(() => {
                            setTimeout(clearInterval, 1000, bucle);
                            document.body.style.backgroundImage = "url('confetti.gif')";
                            setTimeout(() => {
                                document.body.style.backgroundImage = "";
                                parando = false;
                            }, 5000);
                        }, 1400);
                    }, 1200);
                }, 1500);
            }, 900);
        }, 500);
    }
    
}

var bucle = setInterval(spin, 100);
var voluntario = document.getElementById("spin");
var anterior = 0;
var parando = false;