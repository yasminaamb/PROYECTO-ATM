"use strict";

const boton = document.getElementById('cerrar');

boton.addEventListener('click', (e) =>{
    e.preventDefault();

    window.open("../index.html", "_self");
    
});
