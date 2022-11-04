function obterDescricao(lv) {
  return `${lv.titulo}, autor: ${lv.autor}, ${lv.num_pag} paginas `;
}

let livro2 = {
  titulo: "Lua",
  autor: "João",
  num_pag: "123"
};

console.log(obterDescricao(livro2));
