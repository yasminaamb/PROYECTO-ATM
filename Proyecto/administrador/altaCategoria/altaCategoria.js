"use strict"

document.querySelector("#btnAceptarAltaCategoria").addEventListener("click", validarAltaCategoria, false);

//Validación del formulario altaCategoria
function validarAltaCategoria(){
    let sErrores = "";
    let bValido = true; // en principio el formulario es válido

    // Validación de todos los campos
    let sNombre = frmAltaCategoria.txtNombre.value.trim();
    let sExperiencia = frmAltaCategoria.txtExperiencia.value.trim();

    var regexNombre = /^[A-Z]{1}[A-Za-z áéúíó ñ]{2,14}$/;

    if(!(regexNombre.test(sNombre))){
    	sErrores += "\nDebe añadir un nombre en el formato correcto";
    	bValido = false;
    }

    if(sExperiencia == ""){
    	sErrores += "\nDebe añadir una experiencia en años";
    	bValido = false;
    }

    if(!bValido){
    	alert(sErrores);
    }else{
    	altaCategoria();
    }
}

function altaCategoria(oEvento){
    var oCategoria = {
        nombre: frmAltaCategoria.txtNombre.value.trim(),
        experiencia: frmAltaCategoria.txtExperiencia.value.trim()
    };
    var sParametros = "datosCategoria=" + JSON.stringify(oCategoria);

    $.post("altaCategoria/altaCategoria.php", sParametros, procesoRespuestaaltaCategoria, "json");
}

function procesoRespuestaaltaCategoria(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        frmAltaCategoria.reset();
        $("#frmAltaCategoria").hide();
    }
}