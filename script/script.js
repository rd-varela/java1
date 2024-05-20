let nombre = document.getElementsByName("nombre")[0].value;
let edad = document.getElementsByName("edad")[0].value;

function formularioEnviar(){
    event.preventDefault();
    nombre = document.getElementsByName("nombre")[0].value;
    edad = document.getElementsByName("edad")[0].value;

    document.getElementById("edadUs").innerHTML = nombre;
    document.getElementById("nombreUs").innerHTML = edad;

    document.getElementById("resumen").style.display = "block";
}