/*let vector = ["Programando" ; "Paraguay" ; "Encarnacion" ; "2023"]

console.log("antes",vector);

console.log(vector.length);

vector[length-1];

console.log(vector[0]);
console.log(vector[1]);
console.log(vector[2]);
console.log(vector[3]);

for (let i = 0; i < vector.length; i++){
    console.log("va a ser mi indice".i);
}
console.log("termino el bucle");*/


/*palabra a adivinar
palabra ingresa
recorrer y adivinar letra por letra*/

//let palabra = "APPLE"

let lista = ("MOUSE", "APPLE", "HOUSE", "GREEN")

let intento = 6;

console.log("random"[Math.floor(Math.random())*lista.length])
let palabra = lista [2]

const grid = document.getElementById("grid");
const ROW = document.createElement("div");
ROW.className = "row;"
   

function intentar(){
    const VALOR = leerIntento();
    console.log(VALOR)


    if (VALOR === palabra){
        console.log("ingreso", VALOR);

    }
    
    
if (VALOR === palabra){
    console.log("Ganaste");
    terminar("<h1>GANASTE!😀</h1>")
    return
}
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
GRIP.appendChild (ROW)
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
