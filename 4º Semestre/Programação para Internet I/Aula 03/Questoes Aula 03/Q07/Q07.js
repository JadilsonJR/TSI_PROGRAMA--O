let contaX = {
    nome: 'José Fontes',
    saldo: 1000,
    deposita: function(x){
        this.saldo+= x
    },

    retira: function(x){
        this.saldo-= x
    },

    transferePara: function(contaY,val){
        contaY.saldo +=val
        this.saldo -=val
    }   

};

let contaY = {
    nome: 'Felipe Silva',
    saldo: 3000,
    deposita: function(x){
        this.saldo+= x
    },

    retira: function(x){
        this.saldo-= x
    },

    transferePara: function(contaX,val){
        contaX.saldo +=val
        this.saldo -=val
    }   
}

// console.log(contaX.nome, contaX.saldo);
// contaX.deposita(800);
// console.log(contaX.nome, contaX.saldo);

// contaX.retira(800);
// console.log(contaX.nome, contaX.saldo);

// contaX.transferePara(contaY, 1000);
// console.log(contaX.nome, contaX.saldo);
// console.log(contaY.nome, contaY.saldo);


console.log(contaY.nome, contaY.saldo);
contaY.deposita(800);
console.log(contaY.nome, contaY.saldo);

contaY.retira(800);
console.log(contaY.nome, contaY.saldo);

contaY.transferePara(contaX, 1000);
console.log(contaY.nome, contaY.saldo);
console.log(contaX.nome, contaX.saldo);