// Fíjate bien en los espacios en blanco que hay en el cubo.
// El cubo tiene que ser simétrico.
// Asegúrate de usar los símbolos correctos.
// Cada nueva línea del cubo debe terminar con un salto de línea (\n) excepto la última.
// Para crear los cubos se le pasa un número con el tamaño deseado al programa y 
// este devuelve un string con el diseño de ese tamaño.

const cubeOfTwo = createCube(2);

function createCube(size) {

  // creando variables de valor string para la parte de arriba y de abajo del cubo, y una para el cubo en si
  let topFace = "";
  let bottomFace = "";
  let cube = "";

  // realizando el bloque de codigo mientras el indice sea menor al tamaño (size)
  for(let i = 0; i < size; i++){

    // construyendo ambas caras del cubo
    topFace += ' '.repeat(size - i - 1) + '/\\'.repeat(i + 1) + '_\\'.repeat(size) + '\n';
    bottomFace += ' '.repeat(i) + '\\/'.repeat(size - i) + '_/'.repeat(size) + '\n';
  };

// recortando el ultimo salto de linea para la parte de abajo 
 bottomFace = bottomFace.slice(0, -1);

//  uniendo las partes con el metodo concat
 cube = topFace.concat(bottomFace);

  return cube;
  
}

  console.log(createCube(3));