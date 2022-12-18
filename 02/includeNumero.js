// Função que receba um array de números inteiros e um número inteiro
// Deve etornar se o número passado está informado no array e se sim, em que posição.

let readlineSync = require('readline-sync')

let array = []

while (true) {

  let numeroDigitado = readlineSync.question('\n Insira um numero para ser adicionado na lista ou digite um caracter para sair do programa: ')

  if (array.includes(numeroDigitado)) {
    console.log("***Numero existente na lista. Tente novamente***")
    continue
  } else if (isNaN(numeroDigitado) ||  numeroDigitado < 0){
    console.log("Fim do programa.")
    break
  } else {
    array.push(numeroDigitado)
    console.log(array)
  }
}