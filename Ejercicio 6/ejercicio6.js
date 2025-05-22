const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const altura = document.getElementById("altura");
const correo = document.getElementById("correo");
const parrafo = document.getElementById("pValidaciones");

const btnEnviar = document.getElementById("btn");

btnEnviar.addEventListener("click", botonEnviar);

function botonEnviar(){

    console.log("Boton presionado");

    if (validarNombre() && validarApellido() && validarEdad() && validarAltura() && validarCorreo()){

        parrafo.innerText = "Todo fue cargado corrrectamente";
        parrafo.style.color = "green";

        console.log("If true");
    
    } else{

        parrafo.innerText = "Error, verificar que todo este cargado correctamente";
        parrafo.style.color = "red";

        console.log("If false");
    }
}

function validarNombre() {
    const nombreCont = nombre.value;

    if (nombreCont === "" || nombreCont.length > 50){
        alert("El nombre no puede estar vacio o tener mas de 50 caracteres");
        return false
    } else {
        return true
    }

}

function validarApellido(){
    
    const apellidoCont = apellido.value;

    if (apellidoCont === "" || apellidoCont.length > 50){
        alert("El apellido no puede estar vacio o tener mas de 50 caracteres");
        return false
    } else {
        return true
    }
}

function validarEdad(){
    const edadCont = edad.value;

    if (edadCont < 18){
        alert("La edad no puede ser menor a 18 o mayor a 120");
        return false
    } else {
        return true
    }

}

function validarAltura(){
    const alturaCont = altura.value;

    if (alturaCont <= 0 || alturaCont > 230){
        alert("La altura no puede ser menor a 0 o mayor a 230");
        return false
    } else {
        return true
    }

}

function validarCorreo(){

    const correoCont = correo.value;

    if (correoCont === "" || correoCont.includes("@") === false){
        alert("El correo no puede estar vacio o no tener un @");
        return false
    } else{
        return true
    }
}