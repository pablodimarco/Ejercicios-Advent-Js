const carta = 'bici coche balón _playstation bici coche peluche';

// ELIMINAR ESPACIOS y CONVERTIR CADENA A ARRAY
// _ SIGNIFICA QUE ESE REGALO NO CUENTA
// GUARDAR LOS REGALOS EN UNA LISTA


export default function listGifts(letter) {
//     creando arreglo borrando espacios
const palabras = letter.trim().split(/\s+/);
//     creando un objeto vacio
  const regalos = {};
//     recorriendo el arreglo para luego chequear si la palabra comieza con guion bajo
  for (let i = 0; i < palabras.length; i++) {
    const palabra = palabras[i];
//       preguntamos si la palabra no empieza con guion bajo
    if (!palabra.startsWith('_')) {
//         verificamos si el objeto contiene el elemento y si es asi incrementa la cantidad del mismo
      if (regalos.hasOwnProperty(palabra)) {
        regalos[palabra]++;
      } else {
        regalos[palabra] = 1;
      }
    }
  }
  return regalos;
}