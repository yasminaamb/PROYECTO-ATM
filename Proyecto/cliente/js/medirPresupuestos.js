/*"use strict";*/


$(document).ready(function(){
	
	$("#enviar").on("click", function (event) {
		
		event.preventDefault();
		
		escribirStorage();
		
	});
	
});

function escribirStorage() {
	
	//alert("inicio");
	
	var vivienda = $("#formularioPresupuesto select[name='tipoVivienda']").val();
	var nReformas = $("#formularioPresupuesto input:radio[name=numeroReformas]:checked").val();
	
	var entornos = [];
	
	$('#formularioPresupuesto input[name="entorno"]:checked').each(function(){
		
		entornos.push(this.value);
	
	});
	
	var gastar = $("#formularioPresupuesto input[type='number']").val();
	
	var sitioReforma = [];
	
	$('#formularioPresupuesto input:checkbox[name=sitio]:checked').each(function(){
		
		sitioReforma.push(this.value);
	
	});
	
	var motivosReforma = [];
	
	$('#formularioPresupuesto input:checkbox[name=estado]:checked').each(function(){
		
		motivosReforma.push(this.value);
	
	});
	
	var asesoria = $("#formularioPresupuesto select[name='asesoria']").val();
	
	var fecha = $("#formularioPresupuesto input[type='date']").val();
	
	var sugerencia = $("#formularioPresupuesto #sugerencia").val();
	
	var objPresupuestos = {
		vivienda: vivienda,
		reformas: nReformas,
		entornos: entornos,
		gastar: gastar,
		sitioReforma: sitioReforma,
		motivosReforma: motivosReforma,
		asesoria: asesoria,
		fecha: fecha,
		sugerencia: sugerencia
	}
	
	var listaPresupuesto;
	
	var listaPresupuestoS = localStorage.getItem('listaPresupuesto');
	
	if (listaPresupuestoS == null) {
		
		listaPresupuesto = [];
		
	} else {
		
		listaPresupuesto = JSON.parse(listaPresupuestoS);
		
	}
	
	listaPresupuesto.push(objPresupuestos);
	
	listaPresupuestoS = JSON.stringify(listaPresupuesto);
	
	localStorage.setItem('listaPresupuesto', listaPresupuestoS);
	
	$('#formularioPresupuesto')[0].reset();
	
	alert("¡Presupuesto enviado correctamente!");
	
	//alert("fin");
	
}

