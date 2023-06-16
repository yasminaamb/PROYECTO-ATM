rellenarCombo();

document.querySelector("#btnAceptarAltaPeon").addEventListener("click", validarAltaPeon, false);

//Validación del formulario AltaPeon
function validarAltaPeon(){
	let sErrores = "";
    let bValido = true; // en principio el formulario es válido

    // Validación de todos los campos
    let sTxtNombre = frmAltaPeon.txtNombrePeon.value.trim();
    let sTxtApellido = frmAltaPeon.txtApellidoPeon.value.trim();
    let sTxtTelefono = frmAltaPeon.txtTelefonoPeon.value.trim();
    let sTxtEmail = frmAltaPeon.txtEmail.value.trim();
    let sTxtCategoria = frmAltaPeon.txtCategoria.value.trim();

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

    if(sTxtCategoria == ""){
    	sErrores += "\nDebe añadir una categoría";
    	bValido = false;
    }

    if(!bValido){
    	alert(sErrores);
    }else{
    	altaPeon();
      rellenarCombo();
    }
}

function altaPeon(oEvento){
    var oPeon = {
        nombre: frmAltaPeon.txtNombrePeon.value.trim(),
        apellido: frmAltaPeon.txtApellidoPeon.value.trim(),
        telefono: frmAltaPeon.txtTelefonoPeon.value.trim(),
        email: frmAltaPeon.txtEmail.value.trim(),
        categoria: frmAltaPeon.txtCategoria.value.trim()
    };
    var sParametros = "datosPeon=" + JSON.stringify(oPeon);

    $.get("altaPeon/altaPeon.php", sParametros, procesoRespuestaAltaPeon, "json");
}

function procesoRespuestaAltaPeon(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        frmAltaPeon.reset();
        $("#frmAltaPeon").parent().hide("normal");
    }
}

function rellenarCombo(oEVento) {
  let oE = oEVento || window.event;


  $.get("altaPeon/getCategorias.php", null, rellenaComboCategorias, 'xml');
  

}

function rellenaComboCategorias(data, status, oXHRS) {

  console.log(data);


  var oOptions = data.querySelectorAll("categoria");
  var sOptions="";
  console.log(oOptions);
  console.log(sOptions);

  //Cargar options
  for (var i = 0; i < oOptions.length; i++) {
      sOptions += '<option value="' + oOptions[i].querySelector("id").textContent;
      sOptions += '">' + oOptions[i].querySelector("nombre").textContent;
      sOptions += "</option>";
      
  }
  

  document.getElementById("txtCategoria").innerHTML=sOptions;

}