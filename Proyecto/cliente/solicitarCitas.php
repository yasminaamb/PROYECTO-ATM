<!DOCTYPE html>
<?php
    session_start();
?>
<html lang="es">  
  <head>    
    <title>REFORMAS ATM</title>    
    <meta charset="UTF-8">
    <meta name="title" content="REFORMAS ATM">
    <link rel="icon" href="../img/logo.png">
    <link href="../style.css" rel="stylesheet" type="text/css"/>    
    <link rel="stylesheet" type="text/css" media="print" href="../responsive.css"> 
    <script src="js/solicitudCitas.js"></script>
  </head>  

  <body> 

    <div id="container">

        <div class="div-nav">
            <a href="../index.html" class="a">
                <img class="imagen" id="home" width="30" heigth="30" src="../img/home.png">
            </a>
            <nav class="nav nav-bar">
                <a href="cerrarsesion.php">
                    <div id="nombre"><?php echo $_SESSION['usuario']['nombre']; ?></div></a>
                <a href="../sobrenosotros.html">SOBRE NOSOTROS</a>
                <a href="../informacion.html">INFORMACIÓN</a>
            </nav>
        </div>
        
        <div class="contenidoCitas">

            <form method="post" id="formularioCitas" enctype="text/plain">

                <fieldset>
                    <legend align="center">Cita</legend>
                    <div>
                        <input onchange="tipoCitaVisibility();" type="radio" name="cita" id="presencial" value="presencial"><label for="presencial">Presencial</label>
                        <input onchange="tipoCitaVisibility();" type="radio" name="cita" id="telefonica" value="telefonica"><label for="telefonica">Telefónica</label>
                    </div>

                    <input type="hidden" name="nombre" value="<?= $_SESSION['usuario']['nombre'] . ' ' . $_SESSION['usuario']['apellido'] ?>" />

					<div id="direccionForm" class="form-group">
						<label for="direccion">Dirección</label>
                        <input type="text" name="direccion" id="direccion" placeholder="Indique su dirección">
					</div>
					
					<div id="telefonoForm" class="form-group">
						<label for="telefono">Teléfono</label>
                        <input type="text" name="telefono" id="telefono" placeholder="Indique su teléfono">
					</div>	

                    <div>
                        <label for="reforma">Reforma que desea relizar:</label>
                        <textarea type="text" name="reforma" id="reformaArea" placeholder="..."></textarea>
                    </div>
                </fieldset>
                <div class="boton">
                    <input type="reset" value="Cancelar">
                    <input type="submit" value="Enviar" id="enviar">
                </div>
        </form>

        </div>   
        
        <div class="footer">
            <footer>
                <div>
                    <h4>Avisos legales</h4>
                    <a href="http://dominio.com/aviso-legal">Política de cookies</a>
                </div>
                <div>
                    <h4>Redes sociales</h4>
                    <a href="http://facebook.com/mi-pagina-de-facebook">Facebook</a> <span> - </span>
                    <a href="http://facebook.com/mi-pagina-de-facebook">Instagram</a> <span> - </span>
                    <a href="http://facebook.com/mi-pagina-de-facebook">Tiktok</a>
                </div>
                <div> 
                    <h4>Iconos diseñados por</h4> 
                    <a href="https://www.flaticon.es/autores/nawicon" title="nawicon"> nawicon </a> from
                    <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es'</a> <span>/</span>
                    <a href="https://www.flaticon.es/iconos-gratis/fontanero" title="fontanero iconos">Fontanero iconos creados por Freepik - Flaticon</a> <span>/</span>
                    <a href="https://www.flaticon.es/iconos-gratis/alicates" title="alicates iconos">Alicates iconos creados por Freepik - Flaticon</a> <span>/</span>
                    <a href="https://www.flaticon.es/iconos-gratis/electricidad" title="electricidad iconos">Electricidad iconos creados por Flat Icons - Flaticon</a> <span>/</span>
                    <a href="https://www.flaticon.es/iconos-gratis/carpinteria" title="carpintería iconos">Carpintería iconos creados por Futuer - Flaticon</a> <span>/</span>
                    <a href="https://www.flaticon.es/iconos-gratis/construccion" title="construcción iconos">Construcción iconos creados por Eucalyp - Flaticon</a> <span>/</span>
                    <a href="https://www.flaticon.es/iconos-gratis/albanil" title="albañil iconos">Albañil iconos creados por smalllikeart - Flaticon</a>
                </div>
            </footer>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="js/solicitarCita.js"></script>
  </body>  
</html>