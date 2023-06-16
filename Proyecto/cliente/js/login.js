"use strict";

const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');
const boton = document.getElementById('inicio');

boton.addEventListener('click', (e) =>{
    e.preventDefault();

    if(usuario.value=="antoniotorres11@gmail.com" && contraseña.value=="antonio1"){
        alert("Bienvenido como administador");
        window.open("administrador/index.html", "_self");
    }
    
});
