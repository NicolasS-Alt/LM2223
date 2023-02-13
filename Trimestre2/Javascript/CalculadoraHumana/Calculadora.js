var contador = 0,
    prueba, examen, pregunta, opcion, opciones, p1, p2, p3, pcorrectas = 0;
var preguntas = [
    ["¿Cuánto es 10 + 4?", "13", "16", "14", "C"],
    ["¿Cuánto es 20 - 9?", "9", "11", "13", "B"],
    ["¿Cuánto es 7 x 4?", "28", "24", "25", "A"],
    ["¿Cuánto es 12 / 2?", "6", "4", "10", "A"]
    
];

function responder() {

    prueba = document.getElementById("examen");

    if (contador >= preguntas.length) {
        prueba.innerHTML = "<h2>Acertaste " + pcorrectas + " de " + preguntas.length + " preguntas</h2>";
        document.getElementById("estado").innerHTML = "Prueba completada";

        contador = 0;

        pcorrectas = 0;

        return false
    }

    document.getElementById("examen").innerHTML = "Pregunta " + (contador + 1) + " de " + preguntas.length;

    pregunta = preguntas[contador][0];
    p1 = preguntas[contador][1];
    p2 = preguntas[contador][2];
    p3 = preguntas[contador][3];

    prueba.innerHTML = "<h3>" + pregunta + "</h3>";

    prueba.innerHTML += "<input type='radio' name='opciones' value='A'> " + p1 + "<br>";
    prueba.innerHTML += "<input type='radio' name='opciones' value='B'> " + p2 + "<br>";
    prueba.innerHTML += "<input type='radio' name='opciones' value='C'> " + p3 + "<br>";
    prueba.innerHTML += "<button onclick='resultado()'>Introducir resultado</button>"

    

}

function resultado() {

    opciones = document.getElementsByName("opciones");
    for (var i = 0; i < opciones.length; i++) {

        if (opciones[i].checked) {
            opcion = opciones[i].value
        }
    }
    if (opcion == preguntas[contador][4]) {
        pcorrectas++
    }
    contador++;
    responder()
}

window.addEventListener("load", responder, false);