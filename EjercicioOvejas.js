const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

  console.log(ovejas);
  function contarOvejas(ovejas) {
    return ovejas.filter( oveja => {
     return oveja.color === 'rojo' && oveja.name.toLowerCase().includes('n') && oveja.name.toLowerCase().includes('a')
    });
  }

  console.log(contarOvejas(ovejas))