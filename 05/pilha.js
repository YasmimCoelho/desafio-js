// Crie uma classe chamada Pilha. Essa classe deverá ter um método chamado adicionar que deverá receber 
// um nome e adicionar à Pilha e outro método chamado remover que deverá remover o último nome Pilha. A 
// estrutura de dados deve funcionar como Pilha, o último registro a ser adicionado deve ser o primeiro a ser 
// removido.

let readlineSync = require('readline-sync')

let Pilha = () => {
  let topoPilha = -1
  const pilha = []

  const adicionarNome = (nome) => {
    topoPilha ++
    pilha[topoPilha] = nome
  }

  const removerNome = () => {
    if (topoPilha < 0) {
      console.log('Pilha vazia')
    }else{
      pilha.splice(topoPilha, 1)
      topoPilha--
    }
  }

  const mostrarLista = () => {
    console.log(pilha)
  }

  return {
		adicionarNome, removerNome, mostrarLista
	}
}

let pilha = Pilha()

while (true) {

  let opcaoDigitada = readlineSync.question('\n1 - Adicionar nome na lista\n2 - Remover nome da lista \n3 - Mostrar lista\n0 - Sair do programa\n\n Insira uma opcao: ')

  if (opcaoDigitada === '1'){
    let nomeDigitado = readlineSync.question('\n Insira um nome para ser adicionado na lista: ')

    if (isNaN(nomeDigitado)) {   
      pilha.adicionarNome(nomeDigitado)
    } else {
      console.log("***Elemento invalido. Tente novamente.***")
      continue
    }
  } else if (opcaoDigitada === '2') {
    pilha.removerNome()
  } else if (opcaoDigitada === '3') {
    pilha.mostrarLista()
  } else {
    console.log("Fim do programa.")
    break
  }
}


  
  
  