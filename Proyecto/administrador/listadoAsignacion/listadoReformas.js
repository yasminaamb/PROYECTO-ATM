"use strict"

getLista();

function getLista(){
    $.get(
        "listadoReformas/listadoReformas.php",
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

document.querySelector("#mnuListaReformas").addEventListener("click", getLista, false);