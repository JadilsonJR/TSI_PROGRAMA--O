//3. Modifique a questão anterior para percorrer o objeto com uma estrutura de loop e escrever na saída automaticamente todas as propriedades e valores, uma por linha.

let livro = {
  titulo: "Teste 1",
  autor: "Teste 2",
  num_pag: "Teste 3"
};

for (let key in livro) {
  console.log(`${key} : ${livro[key]}`);
}
