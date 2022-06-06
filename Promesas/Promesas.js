let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');    
});

miPromesa.then( 
    valor => console.log(valor), 
    error => console.log(error)
);

//manda dos resultados uno acceptado y el otro rechasado
    //en el metodo se hace todo lo que se ocupe y devuelve unop 
    //de los resultados aceptado o rechazado
miPromesa
    .then(valor => console.log(valor))
    .catch(error=>console.log(error)
);