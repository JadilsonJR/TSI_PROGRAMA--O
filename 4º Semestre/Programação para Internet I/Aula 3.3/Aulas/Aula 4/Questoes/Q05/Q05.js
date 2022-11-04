//5 Modifique a função anterior para que ela seja chamada com um número variável de argumentos numéricos, ao invés de um array. 
//Por exemplo, calcula(4, 8, 20, 6), deve retornar o objeto { soma: 38, media: 9.5 }.

function calcula(...valores) {
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
let obj = calcula(4, 8, 20, 6, 5)
console.log(obj)
console.log(obj.soma)
console.log(obj.media)
