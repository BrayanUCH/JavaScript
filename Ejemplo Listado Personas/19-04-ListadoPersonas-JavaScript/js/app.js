//arreglo
const personas = [
    new Persona('Brayan', 'Ugalde Chavarria'),
    new Persona('Brandon', 'Ugalde')
];

// muestra el arrelgo de arriba en pantalla
function mostrarPersonas(){
    console.log('Mostrar personas...');
    
    //Concatena las personas en el texto 
    //en formato li osea (item de lista)
    let texto = '';
    
    //recorre el arregle 
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }

    //asigna el texto al elemento 'personas' en el HTML 
    document.getElementById('personas').innerHTML = texto;
}