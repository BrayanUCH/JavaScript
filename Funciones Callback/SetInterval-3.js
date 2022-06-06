let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}
//! el setInterval lo que hace es llamar una funcion cada cierto tiempo
//!setInterval(funcion, tiempo);
setInterval(reloj, 1000);//1 seg