let contaX = {
    nome: 'José Fontes',
    saldo: 1000
};

let contaY = {
    nome: 'Felipe Silva',
    saldo: 3000
}

function deposita(conta, valor){
    conta.saldo+=valor
}

function retira(conta, valor){
    conta.saldo-=valor
}

function transfere(conta1, conta2, valor){
    conta1.saldo -=valor
    conta2.saldo += valor
}

// console.log(contaX)
// deposita(contaX,500)
// console.log(contaX)


// console.log(contaX)
// retira(contaX,500)
// console.log(contaX)

console.log(contaX)
transfere(contaX,contaY, 500)
console.log(contaX , contaY)