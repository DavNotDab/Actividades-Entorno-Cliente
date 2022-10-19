
// EJERCICIO 5

document.getElementById("botonEs").onclick = function(){
    document.getElementById("bienvenida").innerHTML = "Bienvenido a la página!";
    document.getElementById("bienvenida").className = "red";
}

document.getElementById("botonEn").onclick = function(){
    document.getElementById("bienvenida").innerHTML = "Welcome to the site!";
    document.getElementById("bienvenida").className = "green";
}

document.getElementById("botonRu").onclick = function(){
    document.getElementById("bienvenida").innerHTML = "Добро пожаловать на страницу!";
    document.getElementById("bienvenida").className = "blue";
}


// EJERCICIO 6

document.getElementById("botonEs2").onclick = function(){
    alert("BIENVENIDO A LA PÁGINA!");
}

document.getElementById("botonEn2").onclick = function(){
    alert("WELCOME TO THE PAGE!");
}

document.getElementById("botonRu2").onclick = function(){
    alert("ДОБРО ПОЖАЛОВАТЬ НА СТРАНИЦУ!");
}


// EJERCICIO 7

document.getElementById("botonEs3").onclick = function(){
    console.log("Bienvenido a la página!");
}

document.getElementById("botonEn3").onclick = function(){
    console.log("Welcome to the site!");
}

document.getElementById("botonRu3").onclick = function(){
    console.log("Добро пожаловать на страницу!");
}


// EJERCICIO 8

document.getElementById("botonEs4").onclick = function(){
    document.write("Bienvenido a la página!");
}

document.getElementById("botonEn4").onclick = function(){
    document.write("Welcome to the site!");
}

document.getElementById("botonRu4").onclick = function(){
    document.write("Добро пожаловать на страницу!");
}

/*
   *NOTA* Busqué acerca de document.write limpiando la pagina y es debido a
   que el método write llama implicitamente a document.open, el cual abre 
   nuevo documento y por tanto borra todo lo que había. No se puede evitar.
   El método write es antiguo y está en desuso, por lo que no se recomienda
   mucho su utilización y se debería evitar.
*/

// EJERCICIO EXTRA

document.getElementById("extra_link").onclick = function(){
    var imagen = document.getElementById("extra_image");
    if (imagen.style.backgroundImage.match("picsum")) {
        imagen.style.backgroundImage = "url(https://www.turismecv.com/wp-content/uploads/sites/13/2020/07/photo-camera-250x250.png)";
    } else {
        imagen.style.backgroundImage = "url(https://picsum.photos/250/250?random=3)";
    }

}