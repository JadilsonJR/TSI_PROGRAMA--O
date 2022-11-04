let familias = {
    Flintstones: {
        pai: 'Fred',
        amigo: 'Barney'
    },
    Jetsons: {
        pai: 'George',
        mae: 'Jane',
        filho: 'Elroy'
    },
    Simpsons: {
        pai: 'Homer',
        mae: 'Marge',
        filho: 'Bart'
    }
};


let obj = {}

//for(in) pega o indice do Objeto 
//for(of) pega o valor do indice


//splice (começa, remove, adiciona)
//slice(-1, 1 'morango')
//-1 começa do ultimo elemento


// for(let chave1 in dados){
//     console.log(`Primeiro Nivel: ${chave1}`)
//     for(let chave2 in dados [chave1]){
//         console.log(` Segundo Nivel: ${chave2}`)
//     }
// }

// console.log(jsonObj);



console.log(familias.Flintstones.pai)


for (let chave1 in familias) {
    console.log(`Primeiro Nivel: ${chave1}`)
    for (pai of chave1) {
        console.log(` Segundo Nivel: ${pai}`)
    }
}

