console.log('Aplicación Calculadora');

function sumar(){
    //toma el formulario
    const forma = document.getElementById('forma');
    
    //toma los datos de que estan en el formulario
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];

    //realiza la operacion
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

    //verifica que sea un numero y no alla dado error porque hay una letra
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    
    //toma el resultado y lo asigna a 'resultado' que esta en el HTML
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    
    //imprimi en consola
    console.log(`Resultado: ${resultado}`);
}