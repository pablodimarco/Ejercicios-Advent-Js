// contar dias hasta el 25 de diciembre
// recibe de parametro date
// el resultado es un numero entero
// si la fecha es del mismo dia entonces el resultado es 0
// si es fecha futura devuelve el numero de dias en negativo
// fecha de referencia es dec 25, 2021

const date = 'Dec 23, 2021';

function daysToXmas(date) {
    // primero creamos la fecha de referencia
    const dateRef = new Date('Dec 25, 2021 23:59:59');

    // luego la fecha ingresada la transformamos a objeto fecha
    const dateReal = new Date(date);
    
    // creamos un contador para acumular los dias faltantes 
    let contadorDias = 0;

    // utilizamos metodo getTime para poder hacer comparaciones entre una fecha y otra dado que pasa la fecha a milisegundos
    if(dateReal.getTime() < dateRef.getTime() || dateReal.getTime() > dateRef.getTime()){
        // restamos los valores en ese orden
        // lo dividimos por la multiplicacion que da como resultado el valor de un dia en mseg
       return contadorDias = Math.floor((dateRef.getTime()- dateReal.getTime())/(1000*60*60*24));
    } else {
        return contadorDias;
    };

}

console.log(daysToXmas(date));