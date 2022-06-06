class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}
//sobre escritura 
class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);//super hace el llamado a la clase padre
        this.departamento = departamento;
    }
    
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}
//pilimordismo
function imprimir(tipo){
    console.log( tipo.obtenerDetalles() );
    //polimorfismo es multiples formas 
    //llama al metodo de la misma forma pero tiene diferente 
    //comportamineto por el tipo de persona que hace el llamado
}

let empleado1 = new Empleado('Juan', 3000);
let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');

imprimir( empleado1 );
imprimir( gerente1 );