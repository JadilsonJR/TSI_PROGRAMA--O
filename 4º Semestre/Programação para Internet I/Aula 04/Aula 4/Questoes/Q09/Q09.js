// 9. Escreva uma função que receba um array bidimensional e escreva-o na tela como uma tabela com linhas e colunas separadas por tabulação ("\t").

// Por exemplo, para o array do slide 19, o resultado deve ser:

// Fred    Barney
// George  Jane    Elroy
// Homer   Marge   Bart


let usuarios = [
    {
        nome: 'Rodrigo Melo Fernandes',
        email: 'rodrigo1999@zzzmail.com',
        categorias: ['premium', 'admin', 'proprietario'],
    },
    {
        nome: 'Letícia Goncalves Azevedo',
        email: 'lga@dayrep.com',
        categorias: ['admin'],
    },
    {
        nome: 'Pedro Almeida Oliveira',
        email: 'poliv3@armyspy.com',
        categorias: ['premium', 'promocao'],
    }
];

for (let n of usuarios) {
    console.log(n)
    for (nome of n) {
        console.log(nome)
    }
}