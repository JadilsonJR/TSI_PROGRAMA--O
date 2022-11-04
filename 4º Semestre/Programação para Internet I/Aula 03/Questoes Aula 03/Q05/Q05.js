function obterDescricao(lv) {
  return `${lv.titulo}, autor: ${lv.autor}, ${lv.num_pag} paginas `;
}

function criaLivro(t, a, num) {
  return {
    titulo: t,
    autor: a,
    num_pag: num
  };
}

novoLivro = criaLivro("Harry Porter", "JK", 120);
console.log(obterDescricao(novoLivro));

//console.log(`Livro: ${novoLivro.titulo}, Autor: ${novoLivro.autor}, Numero de Pag.:${novoLivro.num_pag}pg  `);
