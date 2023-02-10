         var totalf = new Array();

totalf[0] = "s0.jpg";

totalf[1] = "s1.jpg";

totalf[2] = "s2.jpg";

totalf[3] = "s3.jpg";

totalf[4] = "s4.jpg";

var contador = 0;

var contFotos;
function siguiente() {
    contFotos = totalf.length;
    if (contador == contFotos - 1) {
        contador = 0
    } else {
        contador = contador + 1
    }
    document.getElementById("visualizacion").src = "s" + contador + ".jpg"
}
function atras() {
    if (contador > 0) {
        contador = contador - 1
    } else {
        contador = totalf.length - 1
    }
    document.getElementById("visualizacion").src = "s" + contador + ".jpg"
}

