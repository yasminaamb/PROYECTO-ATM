"use strict"

document.querySelector("#btnAceptarAltaPersona").addEventListener("click", validarAltaCliente, false);

//Validación del formulario AltaCliente
function validarAltaCliente(){
	let sErrores = "";
    let bValido = true; // en principio el formulario es válido

    // Validación de todos los campos
    let sTxtNombre = frmAltaCliente.txtNombreCliente.value.trim();
    let sTxtApellido = frmAltaCliente.txtApellidoCliente.value.trim();
    let sTxtTelefono = frmAltaCliente.txtTelefonoCliente.value.trim();
    let sTxtEmail = frmAltaCliente.txtEmail.value.trim();
    let sTxtDireccion = frmAltaCliente.txtDireccionCliente.value.trim();
    
    var regexNombre = /^[A-Z]{1}[A-Za-z áéúíó ñ]{2,14}$/;
    var regexTlf = /^[679]{1}[0-9]{8}$/;
    var regexEmail = /^(.+)@(\\S+)$/;

    if(!(regexNombre.test(sTxtNombre))){
    	sErrores += "\nDebe añadir un nombre en el formato correcto";
    	bValido = false;
    }

    if(!(regexNombre.test(sTxtApellido))){
    	sErrores += "\nDebe añadir un apellido en el formato correcto";
    	bValido = false;
    }

    if(!(regexTlf.test(sTxtTelefono))){
    	sErrores += "\nDebe añadir un teléfono en el formato correcto";
    	bValido = false;
    }

    if(!(regexEmail.test(sTxtEmail))){
    	sErrores += "\nDebe añadir un email en el formato correcto";
    	bValido = false;
    }

    if(sTxtDireccion == ""){
    	sErrores += "\nDebe añadir una direccion en el formato correcto";
    	bValido = false;
    }

    if(!bValido){
    	alert(sErrores);
    }else{
    	altaCliente();
    }
}

function altaCliente(oEvento){
    var oCliente = {
        nombre: frmAltaCliente.txtNombreCliente.value.trim(),
        apellido: frmAltaCliente.txtApellidoCliente.value.trim(),
        telefono: frmAltaCliente.txtTelefonoCliente.value.trim(),
        email: frmAltaCliente.txtEmail.value.trim(),
        direccion: frmAltaCliente.txtDireccionCliente.value.trim()
    };
    var sParametros = "datosCliente=" + JSON.stringify(oCliente);

    $.get("altaCliente/altaCliente.php", sParametros, procesoRespuestaAltaCliente, "json");
}

function procesoRespuestaAltaCliente(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
        frmAltaCliente.reset();
    }else{
        alert(oDatos.mensaje);
        frmAltaCliente.reset();
        $("#frmAltaCliente").parent().hide("normal");
    }
}

//instanciaXHR
function instanciarXHR() {
    var xhttp = null;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else // code for IE5 and IE6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return xhttp;
}