/*<h4>Ingresar Peso</h4>
<input type="number" name="peso" id="entPeso" placeholder="Peso en kg">
<br>
<h4>Ingresar Estatura</h4>
<input type="number" name="estatura" id="entEstatura" placeholder="Estatura en metros">
<br>
<button id="btn">Calcular</button>
<br>
<h4>Usted tiene</h4>
<h3 id="muestraIMC" style="font-weight: bold;"></h3>*/

const peso = document.getElementById("entPeso");
const estatura = document.getElementById("entEstatura");

const btn = document.getElementById("btn");
const muestraIMC = document.getElementById("muestraIMC");

btn.addEventListener("click",calcularIMC);

function calcularIMC(){

    const valorPeso = parseFloat(peso.value);
    console.log(valorPeso);
    const valorEstatura = parseFloat(estatura.value);
    console.log(valorEstatura);

    let imc = (valorPeso / (valorEstatura ** 2));
    console.log(imc);


    muestraIMC.innerText = imc.toFixed(2) + " de IMC";


}

