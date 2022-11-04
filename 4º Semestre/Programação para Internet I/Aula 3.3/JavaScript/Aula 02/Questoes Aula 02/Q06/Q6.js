// 6. Escreva uma função para calcular a área de um círculo, dado o raio. Se o raio for negativo, deve ser retornado o valor 0. Dica: Use Math.PI para obter o valor de π.

function calcAreaCirculo(r){
    if(r<0)
        return 0
    return Math.PI * r**2 
}

console.log("Area do Circulo: "+calcAreaCirculo(5)) 