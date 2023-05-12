const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'coche', 'coche']

// Crea una función getGiftsToRefill que reciba tres Array como parámetros.
// La función debe devolver un Array con los regalos que hay que reponer.
// Un regalo se debe reponer cuando sólo hay stock en uno de los tres almacenes.
// Si no hay ningún regalo que reponer, la función debe devolver un Array vacío.
// Si hay más de un regalo que reponer, la función debe devolver un Array con todos los regalos que hay que reponer.

function getGiftsToRefill(a1, a2, a3) {

    let repuestos = [];

    for (let i = 0; i < a1.length; i++) { 
        if (!a2.includes(a1[i]) && !a3.includes(a1[i])) {
            repuestos.push(a1[i]);
        }
    }

    for (let i = 0; i < a2.length; i++) {
        if (!a1.includes(a2[i]) && !a3.includes(a2[i])) {
            repuestos.push(a2[i]);
        }
    }


    for (let i = 0; i < a3.length; i++) {
        if (!a1.includes(a3[i]) && !a2.includes(a3[i])) {
            repuestos.push(a3[i]);
        }
    }

    repuestos = repuestos.filter((element, index) => repuestos.indexOf(element) === index)

    return repuestos;

}




console.log(getGiftsToRefill(a1, a2, a3));