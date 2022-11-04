// 2. Escreva um script que resulte na saída abaixo, construída a partir do array da questão anterior, usando a estrutura for(... ; ... ; ...). Depois refaça o mesmo loop de mais duas maneiras, usando for ... in e for ... of.

// - ciano
// - verde
// - amarelo

let cores = ['ciano', 'verde', 'amarelo'];

for(let valores in cores ){
    console.log(cores[valores])
}
console.log("-------------------------")
for(let valores2 of cores){
    console.log(valores2)
}
console.log("-------------------------")
for(let i=0 ; i<cores.length;i++){
    console.log(cores[i])
}