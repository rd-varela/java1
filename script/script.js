let nombre = document.getElementsByName("nombre")[0];
let edad = document.getElementsByName("edad")[0];

function formularioEnviar(){
    event.preventDefault();
    nombre = document.getElementsByName("nombre")[0].value;
    edad = document.getElementsByName("edad")[0].value;

    document.getElementById("edadUs").innerHTML = nombre;
    document.getElementById("nombreUs").innerHTML = edad;

    document.getElementById("resumen").style.display = "block";
}

function insert(num){
    document.calc.calcView.value = document.calc.calcView.value + num;
}

function checkEnter(event) {
    if (event.keyCode === 13) {
      equal();
    }
}

function equal(){
    event.preventDefault();
    let res = document.calc.calcView.value;
    if(res){
        //document.calc.calcView.value = eval(res)
        document.calc.calcView.value = Math.floor(Math.random()*(9999-1)+1)
    }
    else{
        document.calc.calcView.value = "NaN"
    }
}

let date = new Date();
let day = date.getDay();

function check(){
    event.preventDefault();
    let dayCheck = "";
    let dayCheckSi = "";
    let dayTil = 4 - day;
    let dayTilPast = dayTil + 7
    if(day==4){
        dayCheckSi = "SI !";
        document.getElementById("juevesCheckerSi").style.visibility = "visible";
    }
    else if(day>4){
        dayCheck = "No, faltan " + dayTilPast + " dias para el jueves" 
    }
    else if(day==3){
        dayCheck = "No, mañana es jueves"
    }
    else{
        dayCheck = "No, faltan " + dayTil + " dias para el jueves"
    }
    document.getElementById("juevesChecker").innerHTML = dayCheck;
    document.getElementById("juevesCheckerSi").innerHTML = dayCheckSi;
}