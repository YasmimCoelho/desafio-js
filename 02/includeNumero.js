// Função que receba um array de números inteiros e um número inteiro
// Deve etornar se o número passado está informado no array e se sim, em que posição.

// const booksByCategory = [
//   {
//       category: "Riqueza",
//       books: [
//           {
//               title: "Os segredos da mente milionária",
//               author: "T. Harv Eker",
//           },
//           {
//               title: "O homem mais rico da Babilônia",
//               author: "George S. Clason",
//           },
//           {
//               title: "Pai rico, pai pobre",
//               author: "Robert T. Kiyosaki e Sharon L. Lechter",
//           },
//       ],
//   },
//   {
//       category: "Inteligência Emocional",
//       books: [
//           {
//               title: "Você é Insubstituível",
//               author: "Augusto Cury",
//           },
//           {
//               title: "Ansiedade – Como enfrentar o mal do século",
//               author: "Augusto Cury",
//           },
//           {
//               title: "Os 7 hábitos das pessoas altamente eficazes",
//               author: "Stephen R. Covey",
//           },
//       ],
//   },
// ];

// const totalCategories =  booksByCategory.length

// console.log(totalCategories);

// for (let category of booksByCategory) {
//   console.log('Total de livros da categoria', category.category)
//   console.log(category.books.length)
// }
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