mostrarTablaReformas();

function mostrarTablaReformas() {
	
	$("#tablaListaReformas").remove();
	
	var tabla = $("<table></table>").attr("id", "tablaListaReformas");

    // Crear encabezado
    var encabezado = $("<thead></thead>");
    var encabezadoFila = $("<tr></tr>");

    // Agregar columnas al encabezado
    encabezadoFila.append($("<th></th>").text("Tipo"));
    encabezadoFila.append($("<th></th>").text("Nº reformas"));
    encabezadoFila.append($("<th></th>").text("Lugar"));
	encabezadoFila.append($("<th></th>").text("Presupuesto aproximado"));
    encabezadoFila.append($("<th></th>").text("Lugares"));
    encabezadoFila.append($("<th></th>").text("Motivo"));
	encabezadoFila.append($("<th></th>").text("Asesoria"));
    encabezadoFila.append($("<th></th>").text("Fecha"));
    encabezadoFila.append($("<th></th>").text("Otros"));

    // Agregar fila de encabezado al encabezado
    encabezado.append(encabezadoFila);

    // Agregar encabezado a la tabla
    tabla.append(encabezado);
	
	var tbody = $("<tbody></tbody>");
	
	var listaPresupuestoS = localStorage.getItem('listaPresupuesto');
	
	var listaPresupuesto = JSON.parse(listaPresupuestoS);
	
	listaPresupuesto.forEach(function(presupuesto) {
  
		var fila = $("<tr></tr>");
		
		fila.append($("<td></td>").text(presupuesto.vivienda));
		fila.append($("<td></td>").text(presupuesto.reformas));
		fila.append($("<td></td>").text(presupuesto.entornos));
		fila.append($("<td></td>").text(presupuesto.gastar));
		fila.append($("<td></td>").text(presupuesto.sitioReforma));
		fila.append($("<td></td>").text(presupuesto.motivosReforma));
		fila.append($("<td></td>").text(presupuesto.asesoria));
		fila.append($("<td></td>").text(presupuesto.fecha));
		fila.append($("<td></td>").text(presupuesto.sugerencia));
		
		tbody.append(fila);
		
	});
	
	tabla.append(tbody);
	
	// Agregar tabla al body
    $('#listados div.row').append(tabla);
	
}