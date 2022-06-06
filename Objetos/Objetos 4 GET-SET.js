let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'español',
    get getIdioma(){
        return this.idioma.toUpperCase();
    },
    set setIdioma( Idioma ){
        this.idioma = Idioma.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log( persona.getIdioma );

persona.setIdioma = 'es';//se llama metodo set setIdioma

console.log( persona.getIdioma );//se llama metodo get getIdioma
console.log( persona.idioma );