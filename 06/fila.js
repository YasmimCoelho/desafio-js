// Crie uma classe chamada Fila. Essa classe deverá ter um método chamado adicionar que deverá receber 
// um nome e adicionar à Fila e outro método chamado remover que deverá remover o último primeiro da Fila. 
// A estrutura de dados deve funcionar como Fila, o primeiro registro a ser adicionado deve ser o primeiro a ser 
// removido.

let readlineSync = require('readline-sync')

let Fila = () => {
  const fila = []

  const adicionarNome = (nome) => {
    fila.unshift(nome)
  }

  const removerNome = () => {
    if (fila.length === 0) {
      console.log('Fila vazia')
    }else{
      fila.splice(fila.length - 1, 1)
    }
  }

  const mostrarLista = () => {
    console.log(fila)
  }

  return {
		adicionarNome, removerNome, mostrarLista
	}
}

let fila = Fila()

while (true) {

  let opcaoDigitada = readlineSync.question('\n1 - Adicionar nome na lista\n2 - Remover nome da lista \n3 - Mostrar lista\n0 - Sair do programa\n\n Insira uma opcao: ')

  if (opcaoDigitada === '1'){
    let nomeDigitado = readlineSync.question('\n Insira um nome para ser adicionado na lista: ')

    if (isNaN(nomeDigitado)) {   
      fila.adicionarNome(nomeDigitado)
    } else {
      console.log("***Elemento invalido. Tente novamente.***")
      continue
    }
  } else if (opcaoDigitada === '2') {
    fila.removerNome()
  } else if (opcaoDigitada === '3') {
    fila.mostrarLista()
  } else {
    console.log("Fim do programa.")
    break
  }
}


  
  
  