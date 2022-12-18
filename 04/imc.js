//Função que calcula o IMC: recebe peso e altura e retorna o imc conforme:
//Até 18,4 = Abaixo do peso
//De 18,5 até 24,9 = Normal
//De 25,1 até 29,9 = Acima do peso
//Mais que 30 = Obeso
//Calculo: PESO / ALTURA²
let readlineSync = require('readline-sync')

let peso = readlineSync.question('\n Informe o peso: ')
let altura = readlineSync.question('\n Informe a altura: ')

let imc = peso / (altura * altura)

if (imc <= 18.4) {
  console.log('\nAbaixo do peso')
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log('\nPeso normal')
} else if (imc >= 25 && imc < 29.9) {
  console.log('\nAcima do peso')
} else {
  console.log('\nObeso')
}

// aparentemente há um erro entre 'peso normal e acima do peso' pois não inclui 
// o nas condições. Alterei uma deles pra incluir essa medida.