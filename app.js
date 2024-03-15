function elementoGeneral (elemento, texto) {
    let tituloDePagina = document.querySelector(elemento)
    tituloDePagina.innerHTML = texto
    return;
}

elementoGeneral(`h1`,`Hora de dar todo en el desafío`)


function BotonConsole() {
    alert("El botón fue clicado")
}

function PreguntaCiudad() {
    let pregunta =prompt("¿Cuál es el nombre de una ciudad de brazil?")
    alert(`Estuve en ${pregunta} y me acordé de ti `)
}

function Alerta(){
    alert("Yo amo JS")
}

function Calculo(){
    let calculo =parseInt(prompt("Brinda un número aleatorio"))
    let calculoDos =parseInt(prompt("Brinda otro número aleatorio"))
    let resultado = parseInt(calculo + calculoDos)
    alert(`La suma de ${calculo} más ${calculoDos} es igual a ${resultado}`)
}