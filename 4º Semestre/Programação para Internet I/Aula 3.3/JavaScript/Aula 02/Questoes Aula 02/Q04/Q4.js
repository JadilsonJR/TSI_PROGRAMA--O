// 4. Modifique a resposta anterior para que a chamada de função receba parâmetros passados na linha de comando.

let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);
function media(a, b, c) {
  return (a + b + c) / 3;
}

console.log(media(a, b, c));
