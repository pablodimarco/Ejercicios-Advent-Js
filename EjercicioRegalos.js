const carta = 'bici coche balón _playstation bici coche peluche';

// ELIMINAR ESPACIOS O CONVERTIR CADENA A ARRAY
// _ SIGNIFICA QUE ESE REGALO NO CUENTA
// GUARDAR LOS REGALOS EN UNA LISTA


function listGifts(carta) {
    const palabras = carta.trim().split(/\s+/);

    // Objeto para almacenar los regalos y su cantidad
    const regalos = {};
  
    // Recorrer cada palabra de la carta
    for (let i = 0; i < palabras.length; i++) {
      // Obtener la palabra actual
      const palabra = palabras[i];
  
      // Verificar si la palabra comienza con un guion bajo
      if (!palabra.startsWith('_')) {
        // Incrementar la cantidad del regalo en el objeto
        if (regalos.hasOwnProperty(palabra)) {
          regalos[palabra]++;
        } else {
          regalos[palabra] = 1;
        }
      }
    }
  
    return regalos;
  }
  
  // Ejemplo de uso
  
  
  
  
  
  

console.log(listGifts(carta));