/**
 * Jogo da Adivinhação
 * 
 * Apresente uma mensagem ao usuário: 
 * "Adivinhe o número que eu estou pensando? Entre 0 e 10"
 * 
 * Crie uma lógica para gerar um número aleatório e verificar se o
 * número digitado é o mesmo que o aleatório gerado pelo sistema.
 * 
 * Enquanto o usuário não adivinhar o número, mostrar a mensagem:
 * "[ERRO]: Tente novamente"
 * 
 * Caso o usuário acerte o número, apresentar a mensagem:
 * "Parabéns! Você adivinhou o número em X tentativas."
 * 
 * Substitua o X da mensagem pelo número de tentativas.
 */

// MENSAGEM DE BOAS VINDAS
alert(`Bem vindo (a) ao jogo da Adivinhação`)

// PERGUNTA
let numberUser = prompt(`Adivinhe o número que eu estou pensando? Entre 0 e 10`)

// VALIDAÇÃO DE INTERVALO
if (Number(numberUser) < 0 || Number(numberUser > 10)) {
  alert(`[ERRO]: Seu palpite deve ser entre 0 e 10! Você digitou o número ${numberUser}.`);
}

// NÚMERO ALEATÓRIO
const numberSystem = Math.round(Math.random() * 10)

// CONTROLE DE TENTATIVAS
let xAttempts = 0

// VALIDAÇÃO DE PALPITE
while (Number(numberUser) != numberSystem) {
  numberUser = prompt(`[ERRO]: Tente novamente.`)

  xAttempts++
}

alert(`Parabéns! Você adivinhou o número em ${xAttempts} tentativa (s).`)

alert(`FIM DE JOGO`)