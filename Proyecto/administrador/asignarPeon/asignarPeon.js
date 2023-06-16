//Rellenar combo peoness

rellenarComboPeones();
rellenarCombo();

function rellenarComboPeones(oEVento) {
    let oE = oEVento || window.event;
  
    $.get("asignarPeon/getPeon.php", null, rellenaComboPeones, 'xml');
}
  
function rellenaComboPeones(data, status, oXHRS) {
  
    console.log(data);
  
    var oOptions = data.querySelectorAll("peon");
    var sOptions="";
    console.log(oOptions);
    console.log(sOptions);
  
    //Cargar options
    for (var i = 0; i < oOptions.length; i++) {
        sOptions += '<option value="' + oOptions[i].querySelector("id").textContent;
        sOptions += '">' + oOptions[i].querySelector("nombre").textContent;
        sOptions += "</option>";
        
    }
  
    document.getElementById("txtIdAsignarPeon").innerHTML=sOptions;
}


//Rellenar combo citas
function rellenarCombo(oEVento) {
  let oE = oEVento || window.event;


  $.get("modificarCliente/getClientesModificar.php", null, rellenaComboClientes, 'xml');
  

}

function rellenaComboClientes(data, status, oXHRS) {

  console.log(data);


  var oOptions = data.querySelectorAll("cliente");
  var sOptions="";
  console.log(oOptions);
  console.log(sOptions);

  //Cargar options
  for (var i = 0; i < oOptions.length; i++) {
      sOptions += '<option value="' + oOptions[i].querySelector("id").textContent;
      sOptions += '">' + oOptions[i].querySelector("nombre").textContent;
      sOptions += "</option>";
      
  }
  

  document.getElementById("txtIDAsignarCliente").innerHTML=sOptions;

}

function objetoXHR() {
    if (window.XMLHttpRequest) {
      // El navegador implementa la interfaz XHR de forma nativa
      return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      var versionesIE = new Array(
        "MsXML2.XMLHTTP.5.0",
        "MsXML2.XMLHTTP.4.0",
        "MsXML2.XMLHTTP.3.0",
        "MsXML2.XMLHTTP",
        "Microsoft.XMLHTTP"
      );
      for (var i = 0; i < versionesIE.length; i++) {
        try {
          return new ActiveXObject(versionesIE[i]);
        } catch (errorControlado) {} //Capturamos el error,
      }
    }
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

$("#btnAsignarPeon").click(function() {
    var oAsignacion = {
        peon: frmAsignar.txtIdAsignarPeon.value.trim(),
        cliente: frmAsignar.txtIDAsignarCliente.value.trim()
    };
    var sParametros = "datosAsignar=" + JSON.stringify(oAsignacion);

    $.post("asignarPeon/asignarPeon.php", sParametros, procesoRespuestaAsignar, "json");
});

function procesoRespuestaAsignar(oDatos, sStatus, oXHR){
  console.log(oDatos);
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        frmAsignar.reset();
        $("#frmAsignar").hide();
    }
}

