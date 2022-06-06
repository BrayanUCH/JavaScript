const mostrarReloj = ()=>{
    //Se usa el DATE para obtener los recursos o datos
    let fecha = new Date();

    //se obtiene los segundos, minutos, horas 
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    //se carga la hora 
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Ene', 'Feb', 'Mar','Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    
    //se carga los dias, meses y numero de dia 
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;

    document.getElementById('fecha').innerHTML = fechaTexto;
    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora)=>{
    if(hora < 10)
        hora = '0' + hora;
    return hora;    
}

//este llamado hace que se llame la funcion cada segundo en este caso
setInterval(mostrarReloj, 1000);