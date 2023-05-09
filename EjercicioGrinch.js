// las cartas de regalo son cadenas de texto que incluyen () y regalos
// para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.
// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...
// Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!

const letter = "() consola bici";

function isValid(letter) {
    const newLetter = letter.trim().split(/\s/);
    var valor= true;
    var regex = /^\(.*\)$/;
     newLetter.forEach(element => {
        if (regex.test(element)){
            valor = false
        } else if (element.startsWith('(') && element.endsWith(')')){
            valor=true;
        }else if (element.startsWith('(') && element.endsWith('')) {
            valor=false;
        } else if (element.startsWith('') && element.endsWith(')')){
            valor =false;
        } else if (element.includes('{')){
            valor =false;
        } else if(element.includes('[')){
            valor = false;
        } else if(element.length === 0) {
            valor =false;
        } else;
    });  

    return valor;
}

console.log(isValid(letter));