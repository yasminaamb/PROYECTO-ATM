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
    <script src="js/medirPresupuestos.js"></script>
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
        
        <div class="contenido" style="margin-top: -20px;">
            <form method="post" id="formularioPresupuesto" action="mailto:antoniotorres11@gmail.com">
                <fieldset>
                    <legend align="center">Vivienda</legend>
                    <div>
                        <label for="vivienda">Tipo de vivienda:</label>
                        <select name="tipoVivienda">
                            <option value="casa">Casa</option>
                            <option value="piso">Piso</option>
                            <option value="duplex">Duplex</option>
                            <option value="atico">Ático</option>
                            <option value="chalet">Chalet</option>
                            <option value="apartamento">Apartamento</option>
                        </select>
                    </div>
                    <div>
                        <span>¿Cuántas reformas desea realizar?</span>
						<label><input type="radio" name="numeroReformas" value="una">Solo una</label>
                        <label><input type="radio" name="numeroReformas" value="varias">Varias</label>
                    </div>
                    <div>
                        <span>¿Donde quiere realizar la reforma?</span>
                        <label><input type="checkbox" name="entorno" value="exterior">Exterior</label>
                        <label><input type="checkbox" name="entorno" value="interior">Interior</label>
                    </div>
                    <div>
                        <label for="dinero">¿Cuánto estás dispuesto a gastarte? <input type="number" id="dinero" min="0" max="10000"></label>
                    </div>
                    <div>
                        <label for="sitio">¿En que lugar concreto desea realizar la reforma?</label>
						<br>
						<label for="cocina"><input type="checkbox" name="sitio" id="cocina" value="cocina"> Cocina</label>
                        <label for="baño"><input type="checkbox" name="sitio" id="baño" value="baño"> Baño</label>
                        <label for="dormitorio"><input type="checkbox" name="sitio" id="dormitorio" value="dormitorio"> Dormitorio</label>
                        <label for="salon"><input type="checkbox" name="sitio" id="salon" value="salon">Salón</label>
                        <label for="jardin"><input type="checkbox" name="sitio" id="jardin" value="jardin">Jardín</label>
                        <label for="patio"><input type="checkbox" name="sitio" id="patio" value="patio">Patio</label>
                        <label for="cochera"><input type="checkbox" name="sitio" id="cochera" value="cochera">Cochera</label>
                        <label for="azotea"><input type="checkbox" name="sitio" id="azotea" value="azotea">Azotea</label>
                    </div>
                    <div>
                        <label for="estado">¿Porqué desea realizar la reforma?</label>
						<br>
                        <label for="roto"><input type="checkbox" name="estado" id="roto" value="roto">Está roto</label>
                        <label for="antiguo"><input type="checkbox" name="estado" id="antiguo" value="antiguo">Es antiguo</label>
                        <label for="cambio"><input type="checkbox" name="estado" id="cambio" value="cambio">Necesito un cambio</label>
                    </div>
                    <div>
                        <label for="asesoria">¿Desea asesoria para los materiales?</label>
                        <select name="asesoria" id="asesoria">
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                            <option value="meinteresa">Me puede interesar</option>
                        </select>
                    </div>
                    <div>
						<label for="fecha">¿Cuándo le gustaría realizar la reforma? <input type="date" id="fecha" name="fechaReforma"/></label>
					</div>
					<div>
    					<label for="comentario">¿Quiere añadir algo más?</label>
   	 					<textarea name="sugerencia" id="sugerencia" placeholder="Añada cualquier sugerencia..."></textarea>
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

    <script src="js/cliente.js"></script>
  </body>  
</html>