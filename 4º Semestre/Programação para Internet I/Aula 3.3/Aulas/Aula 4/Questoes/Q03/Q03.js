// 3. Sem modificar a linha inicial que cria o array com 3 elementos, use uma instrução com o método splice e outra com o método push, de modo a resultar no array que gera a seguinte saída:

// - ciano
// - roxo
// - laranja
// - verde
// - amarelo
// - cinza


let cores = ['ciano', 'verde', 'amarelo'];


function addSpli() {
    cores.splice(1, 0, 'roxo', 'laranja');
    cores.splice(5, 0, 'cinza');
    console.log(cores)
    for (let valores2 of cores) {
        console.log(valores2)
    }
}

addSpli()




// function soma() {
    //     let res1=0
    //     for (let i = 0; i < valores.length; i++) {
    //         res1 += valores[i]
    //     }
    //     return res1
    // }
    // console.log(soma())