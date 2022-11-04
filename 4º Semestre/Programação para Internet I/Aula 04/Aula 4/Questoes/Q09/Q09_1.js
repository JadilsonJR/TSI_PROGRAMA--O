// 9. Escreva uma função que receba um array bidimensional e escreva-o na tela como uma tabela com linhas e colunas separadas por tabulação ("\t").

// Por exemplo, para o array do slide 19, o resultado deve ser:

// Fred    Barney
// George  Jane    Elroy
// Homer   Marge   Bart


let familia = [
    ["Fred", "Barney"],
    ["George", "Jane", "Elroy"],
    ["Homer", "Marge", "Bart"]
];

function EscreverMatriz(valor){
    for(let chave1 of valor){
        console.log("")
        for(let chave2 of chave1 ){
            process.stdout.write(chave2+ "\t")
        }
    }
    console.log("")
}

EscreverMatriz(familia)


