"use strict"

getLista();

function getLista(){
    $.get(
        "listarReformas/listadoReformas.php",
        null,
        procesoRespuesta,
        "html"
    );
}

function procesoRespuesta(datos, textStatus, jqXHR){
    let divL = document.querySelector('#listados');
    divL.innerHTML = "";
    divL.innerHTML = datos;
}

document.querySelector("#mnuListaReform").addEventListener("click", getLista, false);