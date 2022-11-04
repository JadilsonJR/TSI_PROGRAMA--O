//4 Escreva uma função calcula que receba um array e retorne um objeto contendo a soma e a média aritmética de todos seus elementos. 
//Por exemplo, calcula( [4, 8, 20, 6] ), deve retornar o objeto { soma: 38, media: 9.5 }. A função deve funcionar para arrays de qualquer tamanho.


function calcula(valores) {
    function soma() {
        let res1 = 0
        for (let i = 0; i < valores.length; i++) {
            res1 += valores[i]
        }
        return res1
    }

    function media() {
        return soma() / valores.length
    }

    let retorno = {
        soma: soma(),
        media: media()
    }
    return retorno
}
let obj = calcula([4, 8, 20, 6])
console.log(obj)
console.log(obj.soma)
console.log(obj.media)
