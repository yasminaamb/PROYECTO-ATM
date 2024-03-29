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
  </head>  

  <body> 

    <div id="container">

        <div class="div-nav">
            <a href="../index.html" class="a">
                <img class="imagen" id="home" width="30" heigth="30" src="../img/home.png">
            </a>
            <nav class="nav nav-bar">
                <a href="#">
                    <div id="nombre"><?php echo $_SESSION['usuario']['nombre'] ?></div></a>
                <a href="../sobrenosotros.html">SOBRE NOSOTROS</a>
                <a href="../informacion.html">INFORMACIÓN</a>
            </nav>
        </div>

        <div class="contenido">

            <button type="submit" id="solicitudCitas">Solicitar cita</button>
            <button type="submit" id="medirPresupuesto">Medir presupuesto</button>

        </div>   
        
        <div class="contenido">

            <form action="action_page.php" method="post">
              
                <div class="formulario-identificate">
                    <p class="titulo-cerrar">Espero que le haya gustado nuestra página ¡Hasta pronto!</p>
                    
                    <div>
                        <button type="submit" id="cerrar">Cerrar sesión</button>
                    </div>

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
                    <a href="http://facebook.com/mi-pagina-de-facebook">Facebook</a>
                    <a href="http://facebook.com/mi-pagina-de-facebook">Instagram</a>
                    <a href="http://facebook.com/mi-pagina-de-facebook">Tiktok</a>
                </div>
                <div> 
                    <h4>Iconos diseñados por</h4> 
                    <a href="https://www.flaticon.es/autores/nawicon" title="nawicon"> nawicon </a> from 
                    <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es'</a>
                    <a href="https://www.flaticon.es/iconos-gratis/fontanero" title="fontanero iconos">Fontanero iconos creados por Freepik - Flaticon</a>
                    <a href="https://www.flaticon.es/iconos-gratis/alicates" title="alicates iconos">Alicates iconos creados por Freepik - Flaticon</a>
                    <a href="https://www.flaticon.es/iconos-gratis/electricidad" title="electricidad iconos">Electricidad iconos creados por Flat Icons - Flaticon</a>
                    <a href="https://www.flaticon.es/iconos-gratis/carpinteria" title="carpintería iconos">Carpintería iconos creados por Futuer - Flaticon</a>
                    <a href="https://www.flaticon.es/iconos-gratis/construccion" title="construcción iconos">Construcción iconos creados por Eucalyp - Flaticon</a>
                    <a href="https://www.flaticon.es/iconos-gratis/albanil" title="albañil iconos">Albañil iconos creados por smalllikeart - Flaticon</a>
                </div>
            </footer>
        </div>
    </div>

    <script src="js/cerrar.js"></script>
    <script src="js/cliente.js"></script>
  </body>  
</html>