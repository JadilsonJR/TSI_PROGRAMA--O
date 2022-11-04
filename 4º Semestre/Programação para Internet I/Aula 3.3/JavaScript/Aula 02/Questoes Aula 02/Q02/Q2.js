// 2. Modifique a função da questão anterior para que a função aceite um argumento e concatene o valor desse argumento à frase escrita na saída. Na chamada, passe o valor da variável de loop como argumento.

// Exemplo de saída:

// Teste da função 0
// Teste da função 1
// Teste da função 2

function escrever(valor){
    console.log("IFB "+ valor);
}

for(let i=0;i<3;i++){
    escrever(i);
}