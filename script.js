let lista = ("MOUSE", "APPLE", "HOUSE", "GREEN")

let intento = 6;

window.addEventListener('load', init);
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

const input = document.getElementById("guess-input");
const valor = input.value;

console.log("random"[Math.floor(Math.random())*lista.length])
let palabra = lista [2]



const grid = document.getElementById("grid");
const ROW = document.createElement("div");
ROW.className = "row;"
   

function intentar(){
    const VALOR = leerIntento();
let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    console.log(VALOR)


    if (VALOR === palabra){
        console.log("ingreso", VALOR);

    }
    
    
    
if (VALOR === palabra){
    console.log("Ganaste");
    terminar("<h1>GANASTE!😀</h1>")
    return
}

const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
for (i in palabra){
    const SPAN = document.createElement('span');
        SPAN.className = 'letter';
    if (palabra[i] === VALOR[i] ){
        console.log(VALOR[i], "verde");
        SPAN.style.backgroundColor = 'green'; 
        SPAN.innerHTML = VALOR[i];
    }else if(palabra.includes(VALOR[i])){
        console.log(palabra[i], "amarillo");
        SPAN.style.backgroundColor = 'yellow'; 
        SPAN.innerHTML = VALOR[i];
    }
    else{
        console.log(palabra[i], "gris")
        SPAN.style.backgroundColor = 'grey'; 
        SPAN.innerHTML = VALOR[i];
    }
    ROW.appendChild (SPAN)
GRID.appendChild (ROW)
}
intento = intento - 1;
if (intento ==0){
    console.log("Perdiste");
    GamepadButton.style.display = "none";
}
}

function leerIntento() {
    const VALOR = document.getElementById("guess-input").value.toUpperCase();
    return VALOR;
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
