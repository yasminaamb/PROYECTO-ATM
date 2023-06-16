//mostrarTablaCitas();

$("#listados div.row").on("click", "#tablaListaCitas tbody tr",function () {
	
	$('#tablaListaCitas tbody tr').removeClass('filaSeleccionada');
	$(this).addClass('filaSeleccionada');
	
	$('#aceptar').css({
		'pointer-events': 'auto',
		'opacity': '1'
	});
	
	$('#denegar').css({
		'pointer-events': 'auto',
		'opacity': '1'
	});
	
	$('#pendiente').css({
		'pointer-events': 'auto',
		'opacity': '1'
	});
				
});

$("#listados div.row").on("click", "#aceptar", function () {
	
	despacharCita();
				
});

$("#listados div.row").on("click", "#denegar", function () {
	
	despacharCita();
				
});

mostrarTablaCitas();

function mostrarTablaCitas(){
	
	$("#tablaListaCitas").remove();
	
	$("#divBoton").remove();
	
	var tabla = $("<table></table>").attr("id", "tablaListaCitas");

    var encabezado = $("<thead></thead>");
    var encabezadoFila = $("<tr></tr>");

    encabezadoFila.append($("<th></th>").text("Cita"));
    encabezadoFila.append($("<th></th>").text("Telefono/Direccion"));
    encabezadoFila.append($("<th></th>").text("Lugar"));
	
    encabezado.append(encabezadoFila);
	
    tabla.append(encabezado);
	
	var tbody = $("<tbody></tbody>");
	
	var listaCitaS = localStorage.getItem('listaReformas');
	
	var listaCita = JSON.parse(listaCitaS);
	
	listaCita.forEach(function(cita) {
  
		var fila = $("<tr></tr>");
		
		fila.append($("<td></td>").text(cita.cita));
		
		if (cita.hasOwnProperty('telefono')) {
			
			fila.append($("<td></td>").text(cita.telefono));
			
		} else {
			
			fila.append($("<td></td>").text(cita.direccion));
			
		}
		
		fila.append($("<td></td>").text(cita.reforma));
		
		tbody.append(fila);
		
	});
	
	tabla.append(tbody);
	
    $('#listados div.row').append(tabla);
	
	var divBoton = $("<div id='divBoton' class='boton'></div>");

	var aceptar = $("<input type='button' id='aceptar' value='Aceptar'>");
	
	/*$('#aceptar').css({
		'pointer-events': 'none',
		'opacity': '0.5'
	});*/
	
	var denegar = $("<input type='button' id='denegar' value='Denegar'>");
	
	/*$('#denegar').css({
		'pointer-events': 'none',
		'opacity': '0.5'
	});*/
	
	var pendiente = $("<input type='button' id='pendiente' value='Pendiente'>");
	
	/*$('#pendiente').css({
		'pointer-events': 'none',
		'opacity': '0.5'
	});*/
    
	divBoton.append(aceptar);
	divBoton.append(denegar);
	divBoton.append(pendiente);
  
    $("#listados div.row").append(divBoton);
	
	$('#aceptar').css({
		'pointer-events': 'none',
		'opacity': '0.5'
	});
	
	$('#denegar').css({
		'pointer-events': 'none',
		'opacity': '0.5'
	});
	
	$('#pendiente').css({
		'pointer-events': 'none',
		'opacity': '0.5'
	});
	
}

function despacharCita(){
	
	var valor = $('.filaSeleccionada td:nth-child(3)').text();
	
	var listaCitaS = localStorage.getItem('listaReformas');
	
	var listaCita = JSON.parse(listaCitaS);
	
	listaCita = listaCita.filter(function(cita) {
		
		return cita.reforma !== valor;
		
	});
	
	listaCitaS = JSON.stringify(listaCita);
	
	localStorage.setItem('listaReformas', listaCitaS);
	
	mostrarTablaCitas();
	
}

