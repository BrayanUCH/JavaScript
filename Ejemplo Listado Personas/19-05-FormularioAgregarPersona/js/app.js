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

function agregarPersona(){
    //toma el formulario
    const forma = document.forms['forma'];
    //toma los datos 
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];

    //revisa que los datos no estan sin texto
    if(nombre.value != '' && apellido.value != ''){
        //crea la persona 
        const persona = new Persona(nombre.value, apellido.value);
        
        //la imprimi
        console.log(persona);
        
        //agrega la persona a la lista 
        personas.push(persona);
        
        //actualiza la lista llamando a la metodo 'mostrarPersonas();'
        mostrarPersonas();

        //limpiar las notas porque no hay error
        document.getElementById('notas').innerHTML ='...';
    }
    else{
        //muestra que hay un error 
        document.getElementById('notas').innerHTML = 'No hay información que agregar';
        console.log('No hay información que agregar');
    }
}