
const  nameId = document.getElementById('Name'),
       alturaId = document.getElementById('Height'),
       pesoId = document.getElementById('Weight'),
       Resultado = document.getElementById('result');

const resultado = document.getElementById('resultado'),
      calcular = document.getElementById('calcular'),
      Total = document.getElementById('total'),
      close = document.getElementById('close');

let Name, altura, peso;

function getData(){
    Name = nameId.value; 
    altura = alturaId.value; 
    peso = pesoId.value;

    imc();
    saveStorage(Name, altura, peso);
    toggleInfo();
}

function saveStorage(Name, altura, peso) {
    if (Name !== '' && altura !== '' && peso !== '') {
        localStorage.setItem('Nombre', Name);
        localStorage.setItem('Altura', altura);
        localStorage.setItem('Peso', peso);
    }
  }

function printStorage(){
    if (localStorage.getItem('Nombre') != null){
     nameId.value = localStorage.getItem('Nombre'); 
    }

     if(localStorage.getItem('Altura') != null){
      alturaId.value = localStorage.getItem('Altura');
    }

    if(localStorage.getItem('Peso') != null){
      pesoId.value = localStorage.getItem('Peso');
    }
}

function toggleInfo(){
    if (Name !== '' && altura !== '' && peso !== '') {
    const boxResult = document.getElementById('boxResult');
    boxResult.classList.toggle("active");
    }
}

function imc() {

    if ( Name !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let clasificacion = '';

        if (valorIMC < 18.5){
            clasificacion = 'Bajo peso.';
        }else if (valorIMC < 25) {
            clasificacion = 'con peso ideal. ¡¡¡Felicidades!!!';
        }else if (valorIMC < 30){
            clasificacion = 'un poco de sobrepeso.';
        }else if (valorIMC < 35){
            clasificacion = 'con obesidad de grado I.';
        }else if (valorIMC < 40){
            clasificacion = 'con obesidad grado II';
        }else {
            clasificacion = 'con obesidad grado III. ¡¡Precaución!!';
        }
        Total.innerHTML = valorIMC;
        Resultado.textContent = `${Name} tu IMC es ${valorIMC} y estas ${clasificacion}`;
        
    }else {
        resultado.textContent = '¡¡¡Rellena todos los campos !!!';
    }

}


close.addEventListener('click', toggleInfo);
calcular.addEventListener('click', getData);

window.addEventListener("load", function() {
    console.log("'Todos los recursos terminaron de cargar!");
    printStorage();
  });