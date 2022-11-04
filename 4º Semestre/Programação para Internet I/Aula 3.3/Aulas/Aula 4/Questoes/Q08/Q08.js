//8. Escreva uma função inverte que retorna o inverso de uma string dada. Utilize métodos de string e array, sem nenhuma estrutura de loop.

//Ex.: O resultado de inverte('Abacaxi') deve ser ixacabA.


function inverte(valor) {
    let quebrando = valor.split('')
    let inverso = quebrando.reverse()
    let junta = inverso.join('')
    return junta
}

console.log(inverte("pera"))