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

let palabra = "APPLE"
let intento = 6;

const button = document.getElementById("guess-button");

button.addEventListener('click', intentar);

function intentar(){
    const valor = document.getElementById("guess-input");
    value.toUpperCase();
    
    console.log("ingreso", valor);
if (VALOR === palabra){
    console.log("Ganasta");
}
for (i in palabra){
    if (palabra[i] === VALOR[i] ){
        console.log(VALOR[i])
    }
    console.log(palabra[i])
}

}

