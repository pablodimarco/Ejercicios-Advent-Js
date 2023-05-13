const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'coche', 'coche']



function getGiftsToRefill(a1, a2, a3) {

    return [...new Set([...a1,...a2,...a3])].filter(regalo =>
         a1.includes(regalo) +
         a2.includes(regalo) + 
         a3.includes(regalo) 
         === 1 
    );

}

console.log(getGiftsToRefill(a1,a2,a3));