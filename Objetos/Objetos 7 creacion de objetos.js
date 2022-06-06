//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log( padre.nombreCompleto() );

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log( madre.nombreCompleto() );

padre.nombre = 'Carlos';

console.log( padre );
console.log( madre );

//crear objeto de tipo clase
let miObjeto = new Object();//creacion mas formal
let miObjeto2 = {};//creacion mas breve 

//crear objeto de tipo string 
let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';
//crear objeto de tipo entero
let miNumero = new Number(1);
let miNumero2 = 1;
//crear objeto de tipo boolean
let miBoolean = new Boolean(false);
let miBoolean2 = false;
//crear objeto de tipo array
let miArreglo1 = new Array();
let miArreglo2 = [];
//crear objeto de tipo funcion
let miFuncion = new Function();
let miFuncion2 = function(){};



