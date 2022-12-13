let inicioDeSesionRegistrado = "alura";
let contrasenhaRegistrada = "alura321";

let inicioDeSesionIngresado = prompt("Ingrese su usuario");
let contrasenhaIngresada = prompt("Ingrese su contraseña");

let tries=1;
let maxTries=3

function logIn(){
    while(tries<3){
        if (inicioDeSesionRegistrado == inicioDeSesionIngresado && contrasenhaRegistrada == contrasenhaIngresada) {
            alert("Bienvenido al sistema " + inicioDeSesionIngresado);
            break;
        } else {
            alert(`Inicio de sesión inválido. Le quedan ${maxTries-tries} intentos`);
            inicioDeSesionIngresado = prompt("Ingrese su usuario");
            contrasenhaIngresada = prompt("Ingrese su contraseña");
            tries++
        }
    };
};
logIn();
