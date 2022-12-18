//qual é o erro?

//a) erro de compilação
//b) loop infinito
//c) declaração incorreta das variáveis 
//d) if sem else

// var num = -1;

// while (num <= 10) {
//   console.log(num);
//   num += 0;
// }

// if (num > 10) {
//   console.log(num);
// }

// Resposta B - ao entrar na estrutura de repetição e adicionar 0 à num, 
// a variável sempre será -1, não atendendo a condição de parada.
// Se modificar a adição da linha 'num += 0;' para '1', o código funcionará 
// como esperado. Sendo assim:

var num = -1;

while (num <= 10) {
  console.log(num);
  num += 1;
}

if (num > 10) {
  console.log(num);
}