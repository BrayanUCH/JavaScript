/*string*/
var nombre = "brayan";
console.log(nombre);
console.log(typeof nombre);
var nombre2 = ' ';
console.log(typeof nombre2);

/*numerico*/
var numero = 99.8;
console.log(numero);

numero = "hola"
console.log(numero);
console.log(typeof numero);

/*Object*/
var objecto = {
    nombre : "Brayan",
    apellido : "ugalde",
    edad : 20
}

console.log(objecto);
console.log(objecto.apellido);

//boolean
var verdad = true;
console.log(verdad);
console.log(typeof verdad);

//funcion/metodo
function miFuncion(){
    

}
console.log(typeof miFuncion);

//simbolo
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//clases
class persona {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido
    }
}

console.log(typeof persona);
console.log(persona);

//tipo indefinido
var x;
console.log(x);
console.log(typeof x);

x = undefined
console.log(x);
console.log(typeof x);

// null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

//listas 
var autos = ["BMW","TOYOTA","NISSAN"];
console.log(autos);
console.log(typeof autos);
console.log(autos[1]);


let nombre3;
nombre3 = "josue";
console.log( nombre3 );

//constante
const apellido2 = "chavarria";
//apellido = "Lara"; Error no se puede cambiar el valor de una constante

let a1nombreCompleto;
let _nombreCompleto;
let $nombreCompleto;
//let 1nombreCompleto; no está permitido iniciar el nombre 
//de una variable con numeros

let ruptura = 10;