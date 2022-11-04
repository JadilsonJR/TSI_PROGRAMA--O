//7. Escreva uma função ehPalindromo que receba uma string e retorne um valor booleano (true ou false), 
//dependendo se a string é ou não idêntica quando lida de trás para frente.


function ehPalindromo(valor) {
    let quebrando = valor.split('')
    let tamanho = quebrando.length
    for (let i = 0; i < tamanho / 2; i++) {
        if (quebrando[i] == quebrando[tamanho - i - 1]) {
            console.log(valor[i])
            verificar = true
        } else {
            return false;
        }
    }
    return verificar
}

console.log(ehPalindromo("osso"))