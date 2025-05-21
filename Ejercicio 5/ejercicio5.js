/*
    <input type="number" name="baseMay" id="entBaseMay" placeholder="Base mayor en metros">
    <input type="number" name="baseMen" id="entBaseMen" placeholder="Base menor en metros">
    <input type="number" name="altura" id="entAltura" placeholder="Altura en metros">
    <button id="btn">Calcular area</button>
    <h4 id="texto"></h4>
*/ 
const entAltura = document.getElementById("entAltura");
const entBaseMay = document.getElementById("entBaseMay");
const entBaseMen = document.getElementById("entBaseMen");
const btn = document.getElementById("btn");
const texto = document.getElementById("texto");

btn.addEventListener("click",calcularArea)

function calcularArea(){

    const baseMayor = parseFloat(entBaseMay.value);
    const baseMenor = parseFloat(entBaseMen.value);
    const altura = parseFloat(entAltura.value);

    const area = ((baseMayor + baseMenor) * altura) / 2;
    console.log(area);
    texto.innerText = "El area del terreno es: " + area.toFixed(2) + " m2";
}