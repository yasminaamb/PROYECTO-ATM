"use strict";

$(document).ready(function(){
	
	ocultarOpciones();
	
	$("#enviar").on("click", function (event) {
		
		event.preventDefault();
		
		escribirStorage();
		
	});
	
});

function ocultarOpciones(){
    try{
        $('#direccionForm').hide();
        $('#telefonoForm').hide();
    } catch (e) {}
}

function tipoCitaVisibility() {
    const tipoCita = document.querySelector('input[name="cita"]:checked').value;

    if(tipoCita == "presencial"){
        $('#direccionForm').show();
        $('#telefonoForm').hide();
    } else if(tipoCita == "telefonica"){
        $('#direccionForm').hide();
        $('#telefonoForm').show();
    }
}

function escribirStorage(){
	
	var cita = $("#formularioCitas input:radio[name=cita]:checked").val();
	
	var reforma = $("#formularioCitas #reformaArea").val();
	
	var objReforma;
	
	if ($('#direccionForm').css('display') === 'none') {
		
		var telefono = $('#telefono').val();
	
		objReforma = {
			cita : cita,
			telefono : telefono,
			reforma : reforma,
		}
		
	} else {
		
		var direccion = $('#direccion').val();
		
		objReforma = {
			cita : cita,
			direccion : direccion,
			reforma : reforma,
		}
		
	}
	
	var listaReformas;
	
	var listaReformasS = localStorage.getItem('listaReformas');
	
	if (listaReformasS == null) {
		
		listaReformas = [];
		
	} else {
		
		listaReformas = JSON.parse(listaReformasS);
		
	}
	
	listaReformas.push(objReforma);
	
	listaReformasS = JSON.stringify(listaReformas);
	
	localStorage.setItem('listaReformas', listaReformasS);
	
	$('#formularioCitas')[0].reset();
	
	alert("¡Cita enviada correctamente!");

	
}
